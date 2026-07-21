import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ChevronDown, 
  Copy, 
  Check,
  MessageSquare,
  Sparkles,
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import { ShootingStarsCanvas } from '../components/SolarSystem';
import ScrollAnimate from '../components/ScrollAnimate';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Portfolio | Contact Me';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedText, setCopiedText] = useState('');
  const [openFaq, setOpenFaq] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xrenlbpy';

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          setErrorMessage(data.errors.map((err) => err.message).join(', '));
        } else {
          setErrorMessage('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Small to medium websites usually take 1-3 weeks. Complex full-stack web applications range from 4 to 8 weeks depending on scope, API integrations, and features.'
    },
    {
      question: 'What tech stack do you specialize in?',
      answer: 'Specializing in React, Vite, Tailwind CSS, Node.js, Express, MySQL, and modern cloud deployment platforms.'
    },
    {
      question: 'How do we get started on a project?',
      answer: 'Fill out the contact form below with your requirements or idea. We will schedule a initial consultation call within 24 hours to discuss goals, scope, and pricing.'
    },
    {
      question: 'Do you offer post-launch support & maintenance?',
      answer: 'Yes! Providing ongoing maintenance including bug fixes, security updates, feature enhancements, and performance monitoring.'
    }
  ];

  return (
    <div className="relative overflow-hidden bg-slate-950 text-slate-100 font-body py-16 md:py-24 min-h-screen">

      {/* Universe Background — Shooting Stars Canvas */}
      <ShootingStarsCanvas />

      {/* Deep space glow radial gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[550px] h-[550px] rounded-full bg-blue-700/10 blur-[140px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-indigo-700/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with ScrollAnimate */}
        <ScrollAnimate effect="zoom-in">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-blue-500/30 text-xs font-semibold text-blue-300 mb-4 font-display">
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct Response within 24 Hours</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight font-display">
              Get In <span className="text-blue-500">Touch</span>
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              Have a project in mind, a question, or want to collaborate? Fill out the form or reach out directly.
            </p>
          </div>
        </ScrollAnimate>

        {/* Main Grid: Form + Info Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Form Container (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollAnimate effect="fade-right" delay={100}>
              <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 shadow-2xl relative bg-slate-900/60">
                
                {isSubmitted ? (
                  /* Success State View instead of Form */
                  <div className="py-10 text-center space-y-6 animate-fade-in">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-xl shadow-emerald-500/10">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Message Received!</h3>
                      <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. We will get back to you shortly.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 transition-all text-sm font-display shadow-md hover:scale-105"
                      >
                        <RotateCcw className="w-4 h-4 text-blue-400" />
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Active Form View */
                  <>
                    {errorMessage && (
                      <div className="mb-6 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start gap-3 animate-fade-in">
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-400" />
                        <div>
                          <h4 className="font-semibold text-sm font-display">Submission Error</h4>
                          <p className="text-xs text-rose-400/90 mt-0.5">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display">
                            Your Name <span className="text-blue-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            disabled={isSubmitting}
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Aryan Thapa"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/70 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm disabled:opacity-50"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display">
                            Email Address <span className="text-blue-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            disabled={isSubmitting}
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="aryanthapa583@gmail.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/70 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm disabled:opacity-50"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display">
                          Subject / Project Type <span className="text-blue-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          disabled={isSubmitting}
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Web App Development, Collaboration, etc."
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/70 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm disabled:opacity-50"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 font-display">
                          Your Message <span className="text-blue-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          disabled={isSubmitting}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your project goals, timeline, and requirements..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-700/70 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-sm resize-none disabled:opacity-50"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed font-display"
                      >
                        {isSubmitting ? (
                          <span>Sending message...</span>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollAnimate>
          </div>

          {/* Contact Details & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollAnimate effect="fade-left" delay={200}>
              {/* Quick Contact Card */}
              <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6 bg-slate-900/60">
                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-display">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span>Contact Details</span>
                </h3>

                <div className="space-y-4">
                  {/* Email Item */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block font-display">Email</span>
                        <span className="text-sm font-medium text-white">aryanthapa583@gmail.com</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy('aryanthapa583@gmail.com', 'email')}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="Copy Email"
                    >
                      {copiedText === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone Item */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block font-display">Phone</span>
                        <span className="text-sm font-medium text-white">+977 9812328875</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy('+977 9812328875', 'phone')}
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                      title="Copy Phone"
                    >
                      {copiedText === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location Item */}
                  <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block font-display">Location</span>
                      <span className="text-sm font-medium text-white">Sundarharaicha-10, Morang Nepal</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

        </div>

        {/* FAQ Section with ScrollAnimate */}
        <div className="mt-24 pt-16 border-t border-slate-800/80 max-w-4xl mx-auto">
          <ScrollAnimate effect="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 font-display">Got Questions?</h2>
              <h3 className="text-3xl font-bold text-white tracking-tight font-display">Frequently Asked Questions</h3>
            </div>
          </ScrollAnimate>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <ScrollAnimate key={idx} effect="zoom-in" delay={idx * 80}>
                <div className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all duration-300 bg-slate-900/40">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between text-white font-semibold gap-4 focus:outline-none font-display"
                  >
                    <span className="text-base">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-400 transition-transform duration-300 flex-shrink-0 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Smooth expand/collapse animation grid */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
