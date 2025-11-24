import React, { useRef, useEffect } from "react";

/**
 * HeroRipple.jsx
 * - A full-bleed hero canvas with ripple shader following cursor/touch.
 * - No external libs. Works in plain React.
 */

const MAX_RIPPLES = 16; // how many simultaneous ripples we track

const vertexShaderSrc = `
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

// fragment shader: sum of rings from active ripples
const fragmentShaderSrc = `
precision highp float;
varying vec2 v_uv;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec3 u_ripples[${MAX_RIPPLES}]; // x, y, startTime
uniform int u_count;

float circle(vec2 uv, vec2 center, float radius, float thickness){
  float d = distance(uv, center);
  return smoothstep(radius + thickness, radius, d) - smoothstep(radius, radius - thickness, d);
}

void main() {
  vec2 uv = v_uv;
  // Normalize so uv maps 0..1 with aspect correction
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 p = uv * aspect;

  float color = 0.0;

  // Parameters
  float speed = 0.6;       // wave speed
  float frequency = 20.0;  // how sharp the ring edges are
  float decay = 1.6;       // how fast the wave fades

  for (int i = 0; i < ${MAX_RIPPLES}; ++i) {
    if (i >= u_count) break;
    vec3 r = u_ripples[i];
    vec2 center = r.xy;
    float t0 = r.z;
    float t = u_time - t0;
    if (t <= 0.0) continue;

    // aspect-correct center
    vec2 c = center * aspect;

    float d = distance(p, c);
    // radius of the expanding ring
    float radius = t * speed;
    // ring contribution: sine-based + smoothstep to make soft ring
    float wave = sin((d - radius) * frequency) * 0.5 + 0.5;
    float envelope = exp(- (d * decay + t * 1.2)); // decay by distance and time
    float ring = (1.0 - smoothstep(0.0, 0.35, abs(d - radius))) * envelope;
    color += ring * 1.2;
  }

  // base glow near pointer area to look watery
  color = clamp(color, 0.0, 1.0);

  // Output color - tweak to taste
  vec3 baseCol = vec3(0.9, 0.95, 1.0);   // light bluish highlights
  vec3 glowCol = vec3(1.0, 0.85, 0.6);   // warmer specular color (optional)
  vec3 final = mix(baseCol, glowCol, color * 0.5) * (0.3 + color * 1.2);

  // For overlay: output with alpha to allow underlying background to show
  float alpha = color * 0.9; // how visible the ripple is
  gl_FragColor = vec4(final, alpha);
}
`;

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  const ok = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!ok) {
    const err = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("Shader compile error: " + err);
  }
  return shader;
}

function createProgram(gl, vsSrc, fsSrc) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSrc);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const err = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    throw new Error("Program link error: " + err);
  }
  return program;
}

export default function HeroRipple({
  style = {},
  className = "",
  pointerCapture = true,
}) {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]); // array of {x,y,t}
  const rafRef = useRef(null);
  const startTimeRef = useRef(null);
  const glRef = useRef(null);
  const programRef = useRef(null);
  const uniformsRef = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: true });
    if (!gl) {
      console.warn("WebGL not supported");
      return;
    }

    glRef.current = gl;

    // Build program
    const program = createProgram(gl, vertexShaderSrc, fragmentShaderSrc);
    programRef.current = program;
    gl.useProgram(program);

    // Full-screen quad
    const posLoc = gl.getAttribLocation(program, "a_position");
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    const verts = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const u_time = gl.getUniformLocation(program, "u_time");
    const u_resolution = gl.getUniformLocation(program, "u_resolution");
    const u_ripples = gl.getUniformLocation(program, "u_ripples");
    const u_count = gl.getUniformLocation(program, "u_count");
    uniformsRef.current = { u_time, u_resolution, u_ripples, u_count };

    // Setup blending so fragment alpha acts as overlay
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Resize canvas to DPR
    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    resize();
    window.addEventListener("resize", resize);

    // Start RAF loop
    startTimeRef.current = performance.now() / 1000;

    function render() {
      const now = performance.now() / 1000;
      const t = now - startTimeRef.current;

      // Set uniforms
      gl.useProgram(program);
      gl.uniform1f(uniformsRef.current.u_time, t);
      gl.uniform2f(
        uniformsRef.current.u_resolution,
        canvas.width,
        canvas.height
      );

      // Build ripple uniform float array of length MAX_RIPPLES * 3
      const arr = new Float32Array(MAX_RIPPLES * 3);
      const ripples = ripplesRef.current;
      for (let i = 0; i < MAX_RIPPLES; i++) {
        if (i < ripples.length) {
          const r = ripples[i];
          arr[i * 3 + 0] = r.x;
          arr[i * 3 + 1] = r.y;
          arr[i * 3 + 2] = r.t;
        } else {
          // mark with negative start time so shader ignores it
          arr[i * 3 + 0] = 0.0;
          arr[i * 3 + 1] = 0.0;
          arr[i * 3 + 2] = -9999.0;
        }
      }

      // supply array uniform
      gl.uniform3fv(uniformsRef.current.u_ripples, arr);
      gl.uniform1i(uniformsRef.current.u_count, ripples.length);

      // clear (transparent)
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      try {
        gl.deleteProgram(program);
      } catch (e) {
        console.error(e);
      }
    };
  }, []);

  // Add ripple on pointer event
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function addRipple(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      const t = performance.now() / 1000 - (startTimeRef.current || 0);

      const r = { x, y, t };
      const arr = ripplesRef.current;
      arr.unshift(r);
      if (arr.length > MAX_RIPPLES) arr.length = MAX_RIPPLES;
    }

    let lastMove = 0;
    function onMove(e) {
      const now = performance.now();
      if (now - lastMove < 30) {
        // throttle: do nothing or let occasional events through
      } else {
        lastMove = now;
      }
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      addRipple(clientX, clientY);
    }

    function onDown(e) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      addRipple(clientX, clientY);
    }

    if (pointerCapture) {
      canvas.addEventListener("pointermove", onMove, { passive: true });
      canvas.addEventListener("pointerdown", onDown, { passive: true });
      canvas.addEventListener("touchstart", onDown, { passive: true });
      canvas.addEventListener("touchmove", onMove, { passive: true });
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mousedown", onDown, { passive: true });
      window.addEventListener("touchstart", onDown, { passive: true });
      window.addEventListener("touchmove", onMove, { passive: true });
    }

    return () => {
      if (pointerCapture) {
        canvas.removeEventListener("pointermove", onMove);
        canvas.removeEventListener("pointerdown", onDown);
        canvas.removeEventListener("touchstart", onDown);
        canvas.removeEventListener("touchmove", onMove);
      } else {
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mousedown", onDown);
        window.removeEventListener("touchstart", onDown);
        window.removeEventListener("touchmove", onMove);
      }
    };
  }, [pointerCapture]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
        aria-hidden
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "auto",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
          pointerEvents: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div style={{ color: "white", textAlign: "center" }}>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", margin: 0 }}>
            Your hero headline
          </h1>
          <p style={{ opacity: 0.9 }}>
            Move your cursor — ripples will follow.
          </p>
        </div>
      </div>
    </div>
  );
}
