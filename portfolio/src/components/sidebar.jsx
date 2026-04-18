import { useState, useEffect } from "react";
import { Menu, X, Home, Briefcase, Code, Mail, Layers } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "#home_section", icon: Home },
    { name: "Projects", path: "#project_section", icon: Layers },
    { name: "Tech Stack", path: "#tech_stack_section", icon: Code },
    { name: "Experience", path: "#experience_section", icon: Briefcase },
    { name: "Contact", path: "#contact_section", icon: Mail },
  ];

  return (
    <>
      {/* Toggle Button - Visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-2 right-5 z-50 flex items-center justify-center gap-2 md:hidden  btn_dark  bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <aside
        className={`sidebar-container fixed top-0 right-0 h-full w-72 bg-dark/95 backdrop-blur-xl border-l border-white/10 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="mb-12 mt-16">
            <h2 className="text-3xl font-bold font-space">
              Portfolio<span className="text-primary">.</span>
            </h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.name}
                    className="sidebar-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <a
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-4 py-3 rounded-lg text-secondary hover:text-white hover:bg-white/5 transition-all duration-300 group"
                    >
                      <Icon
                        size={22}
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-lg font-space font-medium">
                        {item.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="/Aryan Thapa CV.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="btn w-full font-semibold flex items-center justify-center gap-2 btn_dark bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-secondary text-sm font-space text-center">
              © 2026 Portfolio
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
