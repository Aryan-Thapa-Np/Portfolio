import { useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [state, handleSubmit] = useForm(
    import.meta.env.VITE_FORMSPREE_KEY || "dummy",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const items = sectionRef.current?.querySelectorAll(".contact-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact_section"
      ref={sectionRef}
      className="contact-section relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-32 overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div
        className="hero_blob"
        style={{ bottom: "10%", left: "-5%", zIndex: -10, opacity: 0.4 }}
      ></div>
      <div
        className="hero_blob"
        style={{ top: "20%", right: "-5%", zIndex: -10, opacity: 0.3 }}
      ></div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 contact-item">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-secondary text-lg md:text-xl font-space max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach
            out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact Info */}
          <div
            className="w-full lg:w-1/3 space-y-8 contact-item"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="contact-card bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 font-space">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/20 text-primary rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-secondary text-sm font-space">Email</p>
                    <a
                      href="mailto:aryanthapa583@gmail.com"
                      className="text-white hover:text-primary transition-colors font-space"
                    >
                      aryanthapa583@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/20 text-primary rounded-lg group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-secondary text-sm font-space">Phone</p>
                    <a
                      href="tel:+9779812328875"
                      className="text-white hover:text-primary transition-colors font-space"
                    >
                      +977 9812328875
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="w-full lg:w-2/3 contact-item"
            style={{ animationDelay: "0.4s" }}
          >
            {state.succeeded ? (
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-16 rounded-2xl text-center space-y-6 flex flex-col items-center justify-center min-h-[400px]">
                <div className="p-4 bg-primary/20 text-primary rounded-full animate-bounce">
                  <CheckCircle2 size={64} />
                </div>
                <h3 className="text-3xl font-bold text-white font-space">
                  Message Sent!
                </h3>
                <p className="text-secondary text-lg font-space max-w-md">
                  Thank you for reaching out. I've received your message and
                  will get back to you as soon as possible.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-8 py-3 bg-primary/20 text-primary border border-primary/30 rounded-lg hover:bg-primary/30 transition-all font-space"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl space-y-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Username */}
                  <div className="space-y-2">
                    <label
                      htmlFor="username"
                      className="text-sm font-medium text-secondary ml-1 font-space"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
                        size={18}
                      />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder="John Doe"
                        className="w-full bg-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors font-space"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-secondary ml-1 font-space"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
                        size={18}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors font-space"
                      />
                    </div>
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-red-400 text-xs mt-1 ml-1"
                    />
                  </div>
                </div>

                {/* Number */}
                <div className="space-y-2">
                  <label
                    htmlFor="number"
                    className="text-sm font-medium text-secondary ml-1 font-space"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary"
                      size={18}
                    />
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      placeholder="+977 9812328875"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors font-space"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-secondary ml-1 font-space"
                  >
                    Project Description
                  </label>
                  <div className="relative">
                    <MessageSquare
                      className="absolute left-4 top-4 text-secondary"
                      size={18}
                    />
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell me about your project..."
                      rows="4"
                      className="w-full bg-dark/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors font-space resize-none"
                    ></textarea>
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-xs mt-1 ml-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed font-bold py-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                  {!state.submitting && (
                    <Send
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
