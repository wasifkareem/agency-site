import React, { useState } from 'react';
import { motion } from "motion/react";
import fabinaIcon from "../assets/fabina-icon.png";
import { Link } from 'react-router-dom';
import { Loader2, Send, ArrowLeft } from "lucide-react";
import supabase from '../../utils/supabase';

const Competition = () => {
  const [formData, setFormData] = useState({
    website: '',
    problem: '',
    email: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('competition_entries')
        .insert([
          { 
            website: formData.website, 
            problem: formData.problem, 
            email: formData.email 
          },
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ website: '', problem: '', email: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-openSans selection:bg-neutral-900 selection:text-white">
      {/* Navigation / Back Button */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors">
          <ArrowLeft size={20} />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>

      <main className="flex flex-col items-center justify-center px-4 py-12 md:py-20 max-w-2xl mx-auto w-full">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center mb-6 border border-neutral-100 p-4">
            <img src={fabinaIcon} alt="Fabina Logo" className="w-full h-full object-contain opacity-90" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-center tracking-tight text-neutral-900 mb-3">
            Win a Free Website Redesign
          </h1>
          <p className="text-center text-neutral-500 max-w-md leading-relaxed">
            Tell us why your current website isn't working for you. We'll pick one winner to receive a premium, custom-built website by Fabina.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 p-8 md:p-10"
        >
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-2">
                <Send size={32} />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900">Submission Received!</h3>
              <p className="text-neutral-500">
                Thank you for entering. We'll review your submission and contact you via email if you're selected.
              </p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm font-medium text-neutral-900 underline hover:text-neutral-600 transition-colors"
              >
                Submit another entry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="website" className="block text-sm font-semibold text-neutral-700">
                  Current Website Link
                </label>
                <input
                  required
                  type="url"
                  id="website"
                  placeholder="https://example.com"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:bg-white border focus:border-neutral-200 focus:ring-2 focus:ring-neutral-900/5 outline-none transition-all placeholder:text-neutral-400"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="problem" className="block text-sm font-semibold text-neutral-700">
                  What's the problem?
                </label>
                <textarea
                  required
                  id="problem"
                  rows={4}
                  placeholder="Tell us why your current site is holding you back..."
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:bg-white border focus:border-neutral-200 focus:ring-2 focus:ring-neutral-900/5 outline-none transition-all placeholder:text-neutral-400 resize-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-700">
                  Your Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 border-transparent focus:bg-white border focus:border-neutral-200 focus:ring-2 focus:ring-neutral-900/5 outline-none transition-all placeholder:text-neutral-400"
                />
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm text-center">
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 px-6 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-xl shadow-lg shadow-neutral-900/20 transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <span>Submit Entry</span>
                )}
              </button>
            </form>
          )}
        </motion.div>
        
        <footer className="mt-12 text-center text-neutral-400 text-sm">
          © {new Date().getFullYear()} Fabina Studio. All rights reserved.
        </footer>
      </main>
    </div>
  );
};

export default Competition;