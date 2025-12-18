import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./comp/Footer";
import { Analytics } from "@vercel/analytics/react"
import Competition from "./pages/Competition";


function App() {
  return (
    <BrowserRouter>
    <Analytics/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/free-website" element={<Competition />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
