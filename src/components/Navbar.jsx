import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import aryanLogo from '../assets/aryan.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          scrolled ? 'pt-3 px-4 sm:px-6 lg:px-8' : 'pt-0 px-0'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 ease-in-out ${
            scrolled
              ? 'max-w-7xl rounded-2xl md:rounded-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-2xl shadow-blue-950/50 px-5 sm:px-8 py-3'
              : 'w-full max-w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-4'
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Brand Logo with aryan.png */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-blue-500/40 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300 bg-slate-900 flex items-center justify-center">
                <img src={aryanLogo} alt="Aryan" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl sm:text-2xl tracking-tight text-white font-display">
                Portfolio<span className="text-blue-500">.</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-white'
                  }`
                }
                end
              >
                Home
              </NavLink>
              <a
                href="/#services"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="/#projects"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                Projects
              </a>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                Contact Us
              </NavLink>
              <a
                href="/Aryan Thapa CV.pdf"
                download="Aryan Thapa CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200"
              >
                Resume
              </a>
            </nav>

            {/* Call to Action Button */}
            <div className="hidden md:flex items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 border border-blue-500/40 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sliding Sidebar Drawer (Right Side) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-slate-950/95 border-l border-slate-800/80 backdrop-blur-2xl z-50 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header in Mobile Sidebar */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-5 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-blue-500/40 shadow-md shadow-blue-500/25 bg-slate-900 flex items-center justify-center">
                <img src={aryanLogo} alt="Aryan" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl text-white font-display">
                Portfolio<span className="text-blue-500">.</span>
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-300 hover:bg-slate-800/50'
                }`
              }
              end
            >
              Home
            </NavLink>
            <a
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/50 transition-colors"
            >
              Services
            </a>
            <a
              href="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/50 transition-colors"
            >
              Projects
            </a>
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-300 hover:bg-slate-800/50'
                }`
              }
            >
              Contact Us
            </NavLink>
            <a
              href="/Aryan Thapa CV.pdf"
              download="Aryan Thapa CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-300 hover:bg-slate-800/50 transition-colors"
            >
              Download CV
            </a>
          </nav>
        </div>

        {/* Bottom CTA in Mobile Sidebar */}
        <div className="pt-6 border-t border-slate-800/80">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </aside>
    </>
  );
}
