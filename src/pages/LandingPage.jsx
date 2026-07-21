import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Code2,
  Layers,
  Zap,
  ShieldCheck,
  Cpu,
  Globe,
  PhoneCall,
  CheckCircle2,
  Server,
  Layout,
  ExternalLink,
  GitBranch,
  Construction,
  Layers3,
  Lock,
  Smile,
  Download,
  FileText,
} from 'lucide-react';
import { ShootingStarsCanvas, SolarSystem, HeroSatellites } from '../components/SolarSystem';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollAnimate from '../components/ScrollAnimate';

const InstagramIcon = ({ className = "w-5 h-5 text-pink-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// Project Screenshots
import freedomBajaarPic from '../assets/freedom bajaar.png';
import dashboardPic from '../assets/dashboard.png';
import yatramindPic from '../assets/yatramind.png';
import homepageEcommercePic from '../assets/homepage.png';
import affiliateNepalPic from '../assets/affilaite-nepal.png';
import sajiloOsPic from '../assets/sajiloOS.png';

export default function LandingPage() {
  useEffect(() => {
    document.title = 'Portfolio | Full-Stack Developer & Software Engineer';
  }, []);

  const [activeStackFilter, setActiveStackFilter] = useState('All');

  const stats = [
    { target: 6, suffix: '+', label: 'Projects' },
    { target: 1, suffix: '+', label: 'Years Exp.' },
    { target: 100, suffix: '%', label: 'Satisfaction' },
    { target: 14, suffix: '', label: 'Tech Stack' },
  ];

  // Tech Stack List
  const techStack = [
    { name: 'react', label: 'React', proficiency: 'Intermediate', color: '#38bdf8', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'nodejs', label: 'Node.js', proficiency: 'Intermediate', color: '#22c55e', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'mysql', label: 'MySQL', proficiency: 'Intermediate', color: '#f97316', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'tailwindcss', label: 'Tailwind CSS', proficiency: 'Intermediate', color: '#06b6d4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'js', label: 'JavaScript', proficiency: 'Intermediate', color: '#eab308', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'reactnative', label: 'React Native', proficiency: 'Beginner', color: '#61dafb', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'typescript', label: 'TypeScript', proficiency: 'Beginner', color: '#3178c6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'mongodb', label: 'MongoDB', proficiency: 'Beginner', color: '#10b981', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'git', label: 'Git', proficiency: 'Beginner', color: '#f05032', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'html5', label: 'HTML', proficiency: 'Intermediate', color: '#e34f26', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'css3', label: 'CSS', proficiency: 'Intermediate', color: '#1572b6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'java', label: 'Java', proficiency: 'Beginner', color: '#f59e0b', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'python', label: 'Python', proficiency: 'Beginner', color: '#3b82f6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'redis', label: 'Redis', proficiency: 'Beginner', color: '#ef4444', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  ];

  const filteredTechStack = techStack.filter((item) => {
    if (activeStackFilter === 'All') return true;
    return item.proficiency === activeStackFilter;
  });

  // User Specified Projects
  const projects = [
    {
      title: 'sajiloOS',
      description:
        'Activate modular apps for your clinic, restaurant, or store. Benefit from unified staff logs, central inventory tracking, and shared ledger systems, while each app retains its own specialized UI and dedicated POS workflows.',
      image: sajiloOsPic,
      technologies: ['React', 'Vite', 'Node.js', 'Express', 'MySQL', 'Redis', 'Tailwind CSS'],
      github: '#',
      demo: 'https://sajiloos.xyz',
      has_demo: true,
      has_github: false,
      in_development: true,
    },
    {
      title: 'E-Commerce Platform (Freedom Bajaar)',
      description:
        'A powerful, modern, and real-time e-commerce application built with Node.js, Express, MySQL, and EJS. Designed specifically for e-commerce products, featuring a robust admin management system and real-time chat support.',
      image: freedomBajaarPic,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'EJS', 'MySQL'],
      github: '#',
      demo: '#',
      has_demo: false,
      has_github: false,
    },
    {
      title: 'Project Tracker & Management Tool',
      description:
        'A powerful, modern, and real-time project management application built with React 19, Node.js, Express, and MySQL. This application allows teams to efficiently track projects, manage tasks, and stay updated with real-time notifications.',
      image: dashboardPic,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MySQL'],
      github: 'https://github.com/Aryan-Thapa-Np/Project-Tracker-React',
      demo: '#',
      has_demo: false,
      has_github: true,
    },
    {
      title: 'Yatramind',
      description:
        'A platform for users who want to travel to a specific location. The app AI will guide you from your starting point to your destination. It will estimate your budget, what you like in the trip like trekking, food, view, etc.',
      image: yatramindPic,
      technologies: ['Node.js', 'React', 'Tailwind CSS', 'AI/ML'],
      github: '#',
      demo: '#',
      has_demo: false,
      has_github: false,
      fun_tag: 'Personal Project',
    },
    {
      title: 'E-Commerce Platform (Cartify)',
      description:
        'A powerful, modern, and real-time e-commerce application built with Node.js, Express, MySQL, and EJS. This platform supports diverse purchasing options, including game top-ups, product subscriptions, and standard products, featuring a robust admin management system and real-time chat support.',
      image: homepageEcommercePic,
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'EJS', 'MySQL'],
      github: 'https://github.com/Aryan-Thapa-Np/Ecommerce-Website--Node.js-EJS-HTML',
      demo: '#',
      has_demo: false,
      has_github: true,
    },
    {
      title: 'Affiliate Marketing Nepal',
      description:
        'A centralized platform for affiliate users to manage their work efficiently. This platform allows affiliates to showcase their professional profiles, display their products to customers, track performance, and manage their affiliate network all in one place.',
      image: affiliateNepalPic,
      technologies: ['React', 'Node.js', 'MySQL', 'Tailwind CSS', 'JavaScript'],
      github: '#',
      demo: '#',
      has_demo: false,
      has_github: false,
      private_label: 'Private College Project',
    },
  ];

  const highlights = [
    'Clean, modular and maintainable codebases',
    'Fully responsive across all screen sizes',
    'Built with modern Vite and Tailwind stack',
    'Interactive user feedback & smooth micro-interactions'
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 font-body">

      {/* ══════════════════════════════════════
          UNIVERSE CONTAINER — Hero + Services + Tech Stack + Projects
      ══════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-slate-950">

        {/* Unified Universe Background — Shooting Stars Canvas */}
        <ShootingStarsCanvas />

        {/* Deep space glow radial gradients flowing across sections */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[2%] left-[5%] w-[650px] h-[650px] rounded-full bg-blue-700/10 blur-[140px]" />
          <div className="absolute top-[28%] right-[5%] w-[550px] h-[550px] rounded-full bg-indigo-700/10 blur-[130px]" />
          <div className="absolute top-[55%] left-[8%] w-[600px] h-[600px] rounded-full bg-cyan-700/10 blur-[140px]" />
          <div className="absolute top-[80%] right-[10%] w-[550px] h-[550px] rounded-full bg-blue-700/10 blur-[140px]" />
        </div>

        {/* ══════════════════════════════════════
            HERO SECTION
        ══════════════════════════════════════ */}
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-16 sm:pt-24 lg:py-0 pb-20">

          {/* Floating Space Satellites */}
          <HeroSatellites />

          {/* Hero content grid */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Right on Desktop / FIRST on Mobile — 3D Spherical Solar System with Page Load Scale-In */}
              <div className="order-1 lg:order-2 lg:col-span-6 flex items-center justify-center pt-8 sm:pt-12 lg:pt-0 animate-hero-right">
                <SolarSystem />
              </div>

              {/* Left on Desktop / SECOND on Mobile — Left text with Page Load Slide-Up */}
              <div className="order-2 lg:order-1 lg:col-span-6 text-left space-y-6 lg:space-y-7 lg:-ml-12 xl:-ml-20 2xl:-ml-28 animate-hero-left">

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.12] font-display">
                  Full-Stack <br />
                  <span className="text-blue-500">Developer &amp;</span> <br />
                  Software Engineer
                </h1>

                {/* Subtitle Paragraph — text-justify */}
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-body max-w-xl text-justify">
                  <span className="underline decoration-blue-500 decoration-2 underline-offset-4 text-white font-semibold">
                    Hi! I'm Aryan Thapa
                  </span>
                  , a Full-Stack Developer &amp; Software Engineer. I build web applications that work smoothly and look great. Experienced with{' '}
                  <span className="underline decoration-blue-500 decoration-2 underline-offset-4 text-white font-semibold">
                    React
                  </span>
                  ,{' '}
                  <span className="underline decoration-blue-500 decoration-2 underline-offset-4 text-white font-semibold">
                    Node.js
                  </span>
                  ,{' '}
                  <span className="underline decoration-blue-500 decoration-2 underline-offset-4 text-white font-semibold">
                    MySQL
                  </span>
                  , and{' '}
                  <span className="underline decoration-blue-500 decoration-2 underline-offset-4 text-white font-semibold">
                    Tailwind CSS
                  </span>
                  . I focus on creating scalable systems with clean and intuitive designs.
                </p>

                {/* Dark Bluish Action Buttons & Social Quick Links */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 border border-blue-500/40 shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <span>View Work</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-slate-900/90 border border-slate-700/90 hover:border-blue-500/60 hover:bg-slate-800/90 transition-all duration-300"
                  >
                    <span>Contact Me</span>
                    <PhoneCall className="w-4 h-4 text-blue-400" />
                  </Link>

                  <a
                    href="/Aryan Thapa CV.pdf"
                    download="Aryan Thapa CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/90 border border-slate-700/90 hover:border-blue-500/60 hover:text-white hover:bg-slate-800/90 transition-all duration-300 shadow-md"
                  >
                    <span>Download CV</span>
                    <Download className="w-4 h-4 text-blue-400" />
                  </a>

                  {/* Hero Social Media Icons */}
                  <div className="flex items-center space-x-3 sm:pl-2">
                    <a
                      href="https://github.com/Aryan-Thapa-Np"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/90 hover:border-blue-500/60 hover:bg-slate-800/90 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/aryanthapa224/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Profile"
                      className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/90 hover:border-pink-500/60 hover:bg-slate-800/90 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 shadow-md"
                    >
                      <InstagramIcon className="w-5 h-5 text-pink-400" />
                    </a>
                  </div>
                </div>

                {/* Clean Stats Highlights with Animated Counter */}
                <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-800/80">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-2xl font-bold text-blue-400 font-display">
                        <AnimatedCounter target={s.target} suffix={s.suffix} />
                      </div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </section>

        {/* ══════════════════════════════════════
            SERVICES SECTION — Bento Layout
        ══════════════════════════════════════ */}
        <section id="services" className="py-28 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <ScrollAnimate effect="zoom-in">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4 font-display">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Core Capabilities
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display leading-tight">
                  Services Tailored for High-Impact Web Solutions
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed text-center">
                  From responsive frontend component engineering to resilient backend services and API architectures.
                </p>
              </div>
            </ScrollAnimate>

            {/* High-Impact Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

              {/* Bento Card 1: Featured Hero Card (Span 7) */}
              <div className="lg:col-span-7 flex">
                <ScrollAnimate effect="fade-up" delay={0} className="w-full flex">
                  <div className="glass-card p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between w-full shadow-2xl hover:shadow-blue-500/10">
                    <div className="absolute -right-16 -top-16 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all duration-500" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300">
                          <Code2 className="w-7 h-7" />
                        </div>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-300 bg-blue-500/10 border border-blue-500/30">
                          React &amp; Node.js
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors font-display">
                        Full-Stack Web Engineering
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed mb-8 text-justify">
                        Building fast, scalable web applications with modern tech stacks, clean state architecture, and reactive APIs. Engineered end-to-end to deliver sub-second response times and bulletproof reliability.
                      </p>
                    </div>

                    {/* Interactive Code Preview Pill Tags */}
                    <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2.5">
                      {['React 19', 'Node.js', 'Vite', 'MySQL', 'Tailwind CSS', 'REST APIs', 'Redis'].map((tech) => (
                        <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 group-hover:border-blue-500/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollAnimate>
              </div>

              {/* Bento Card 2: UI/UX Design Systems (Span 5) */}
              <div className="lg:col-span-5 flex">
                <ScrollAnimate effect="fade-left" delay={150} className="w-full flex">
                  <div className="glass-card p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between w-full shadow-2xl hover:shadow-indigo-500/10">
                    <div className="absolute -right-16 -top-16 w-56 h-56 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-600/20 transition-all duration-500" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:border-indigo-400 transition-all duration-300">
                          <Layers className="w-7 h-7" />
                        </div>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/10 border border-indigo-500/30">
                          Tailwind &amp; Figma
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors font-display">
                        UI/UX &amp; Design Systems
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed mb-6 text-justify">
                        Crafting responsive, high-converting interfaces with pixel-perfect Tailwind CSS design systems, dark modes, dynamic themes, and intuitive user flows.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-800/80 flex items-center gap-2">
                      <Layout className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-semibold text-slate-400">Design Tokens &amp; Component Libraries</span>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>

              {/* Bento Card 3: Performance & Optimization (Span 5) */}
              <div className="lg:col-span-5 flex">
                <ScrollAnimate effect="fade-right" delay={300} className="w-full flex">
                  <div className="glass-card p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between w-full shadow-2xl hover:shadow-amber-500/10">
                    <div className="absolute -right-16 -top-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
                          <Zap className="w-7 h-7" />
                        </div>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30">
                          Core Web Vitals
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors font-display">
                        Performance &amp; Speed
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed mb-6 text-justify">
                        Optimizing web applications for sub-second load times, SEO perfection, lighthouse 100 metrics, asset minification, and silky smooth 60fps animations.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-800/80 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span className="text-xs font-semibold text-slate-400">60fps Smooth Animation &amp; SEO Optimizations</span>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>

              {/* Bento Card 4: API & Microservices Architecture (Span 7) */}
              <div className="lg:col-span-7 flex">
                <ScrollAnimate effect="fade-up" delay={450} className="w-full flex">
                  <div className="glass-card p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between w-full shadow-2xl hover:shadow-cyan-500/10">
                    <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-600/20 transition-all duration-500" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                          <Cpu className="w-7 h-7" />
                        </div>
                        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-500/30">
                          REST &amp; Databases
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors font-display">
                        API &amp; Backend Architecture
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed mb-6 text-justify">
                        Designing robust backend services, RESTful APIs, relational MySQL database schemas, Redis caching layers, and high-concurrency microservice integrations.
                      </p>
                    </div>

                    <div className="pt-6 border-t border-slate-800/80 flex items-center gap-3">
                      <Server className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-slate-400">Secure REST Endpoints, MySQL &amp; Caching</span>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>

            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════
            TECH STACK SECTION — Interactive Filterable Grid
        ══════════════════════════════════════ */}
        <section id="stack" className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <ScrollAnimate effect="zoom-in">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4 font-display">
                  <Layers3 className="w-3.5 h-3.5 text-blue-400" />
                  Technologies &amp; Tools
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                  Skills &amp; Tech Stack
                </h2>
                <p className="mt-4 text-slate-300 text-base sm:text-lg">
                  Languages, frameworks, databases, and development tools I work with.
                </p>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-3 mt-8">
                  {['All', 'Intermediate', 'Beginner'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setActiveStackFilter(filter)}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${
                        activeStackFilter === filter
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                          : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollAnimate>

            {/* Grid of Tech Stack Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-5 sm:gap-6">
              {filteredTechStack.map((tech, idx) => (
                <ScrollAnimate key={tech.name} effect="zoom-in" delay={idx * 40}>
                  <div className="glass-card p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-slate-800/90 hover:border-blue-500/60 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col items-center text-center shadow-xl hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl flex items-center justify-center p-3 mb-4 bg-slate-950 border border-slate-800 group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300"
                      style={{ boxShadow: `0 0 20px ${tech.color}30` }}
                    >
                      <img src={tech.icon} alt={tech.label} className="w-full h-full object-contain" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-white mb-2 font-display group-hover:text-blue-300 transition-colors">
                      {tech.label}
                    </h4>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full tracking-wide capitalize ${
                        tech.proficiency === 'Intermediate'
                          ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30'
                          : 'text-purple-300 bg-purple-500/10 border border-purple-500/30'
                      }`}
                    >
                      {tech.proficiency}
                    </span>
                  </div>
                </ScrollAnimate>
              ))}
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════
            FEATURED PROJECTS SECTION — Screenshots & Live Links
        ══════════════════════════════════════ */}
        <section id="projects" className="py-28 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <ScrollAnimate effect="fade-down">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-3 font-display">
                    Portfolio Showcase
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                    Featured Engineering Work
                  </h2>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Need a custom application?</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimate>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <ScrollAnimate key={idx} effect={idx % 2 === 0 ? 'fade-up' : 'zoom-in'} delay={idx * 120}>
                  <div className="glass-card rounded-3xl overflow-hidden border border-slate-800/90 hover:border-blue-500/50 transition-all duration-500 group flex flex-col justify-between bg-slate-900/60 h-full shadow-2xl hover:shadow-blue-500/10">
                    <div>
                      {/* Project Image Preview Box — High Resolution Full Display */}
                      <div className="h-64 sm:h-72 lg:h-80 relative overflow-hidden bg-slate-950 border-b border-slate-800/80 group/img">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-all duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Fun Tag Badge */}
                        {project.fun_tag && (
                          <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-950/95 border-2 border-purple-400 text-purple-300 text-xs font-bold tracking-wide shadow-2xl font-display">
                            <Smile className="w-4 h-4 text-purple-400 flex-shrink-0" />
                            <span>{project.fun_tag}</span>
                          </div>
                        )}

                        {/* In Development Badge — Solid High-Contrast Pill */}
                        {project.in_development && (
                          <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/95 border-2 border-amber-400 text-amber-300 text-xs font-bold tracking-wide shadow-2xl shadow-slate-950/90 font-display">
                            <Construction className="w-4 h-4 text-amber-400 animate-pulse flex-shrink-0" />
                            <span>In Development</span>
                          </div>
                        )}
                      </div>

                      {/* Project Content */}
                      <div className="p-7">
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors font-display">
                          {project.title}
                        </h3>

                        <p className="text-slate-300 text-sm leading-relaxed mb-6 text-justify">
                          {project.description}
                        </p>

                        {/* Tech Chips — High Contrast & High Visibility */}
                        <div className="flex flex-wrap gap-2.5 mb-4">
                          {project.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-950/90 border border-cyan-400/50 text-cyan-300 shadow-md shadow-cyan-950/50 hover:bg-blue-950/80 hover:border-cyan-300 hover:text-white transition-all duration-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="px-7 pb-7 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-4">
                      {project.has_github && project.github && project.github !== '#' ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:border-blue-500/50 hover:bg-slate-800 transition-all"
                        >
                          <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                          <span>Code Repo</span>
                        </a>
                      ) : null}

                      {project.has_demo && project.demo && project.demo !== '#' ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 transition-all ml-auto"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : null}

                      {!project.has_github && !project.has_demo && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-400 text-xs font-medium">
                          <Lock className="w-3.5 h-3.5 text-slate-500" />
                          <span>{project.private_label || 'Private Project'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>

          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════
          WHY CHOOSE SECTION
      ══════════════════════════════════════ */}
      <section className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimate effect="fade-right">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 font-display">Why Partner With Me</h2>
                <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6 font-display">
                  Modern Standards &amp; High Performance Architecture
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-justify">
                  I prioritize maintainable patterns, seamless UI UX micro-interactions, and high speed page loading. Every component is optimized to deliver peak satisfaction for your users.
                </p>

                <div className="space-y-4">
                  {highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-200 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate effect="fade-left">
              <div className="glass-panel p-8 rounded-3xl relative border border-slate-800/90 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                      <Globe className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-display">Global Scalability</h4>
                      <p className="text-xs text-slate-400">Deployable anywhere with CDN &amp; serverless speed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 border-b border-slate-800/80 pb-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-display">Robust &amp; Secure</h4>
                      <p className="text-xs text-slate-400">Type safety, form validation, and error boundaries</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold font-display">Aesthetic Excellence</h4>
                      <p className="text-xs text-slate-400">Vibrant color palettes and responsive design</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════ */}
      <section className="py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate effect="flip-up">
            <div className="glass-panel rounded-3xl p-10 md:p-16 text-center border border-blue-500/30 relative overflow-hidden shadow-2xl">
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
                Ready to build your next big project?
              </h2>
              <p className="text-slate-300 max-w-xl mx-auto text-base sm:text-lg mb-8">
                Send a message today to discuss project requirements, timelines, or potential collaboration.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30 hover:scale-105 transition-all duration-300"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollAnimate>
        </div>
      </section>

    </div>
  );
}
