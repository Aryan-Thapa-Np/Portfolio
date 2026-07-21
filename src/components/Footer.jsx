import React from 'react';
import { Link } from 'react-router-dom';
import aryanLogo from '../assets/aryan.png';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-slate-800/60">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-blue-500/40 shadow-md shadow-blue-500/25 bg-slate-900 flex items-center justify-center">
                <img src={aryanLogo} alt="Aryan" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl text-white font-display">
                Portfolio<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crafting high-performance modern web experiences, aesthetic user interfaces, and robust web applications.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-display">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-blue-400 transition-colors">Services</a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-blue-400 transition-colors">Featured Work</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-display">Services</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Full-Stack Development</li>
              <li>Frontend Engineering</li>
              <li>UI/UX Design Systems</li>
              <li>Performance Tuning</li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase font-display">Connect</h4>
            <p className="text-slate-400 text-sm">Let's build something extraordinary together.</p>
            <div className="flex items-center space-x-3 pt-2">
              {/* GitHub */}
              <a
                href="https://github.com/Aryan-Thapa-Np"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600/30 hover:border-blue-500/50 transition-all duration-300 shadow-md"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/aryanthapa224/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600/30 hover:border-pink-500/50 transition-all duration-300 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 text-center text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Aryan Thapa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
