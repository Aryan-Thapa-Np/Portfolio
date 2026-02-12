import { Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-animate relative px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold font-space">
              Portfolio<span className="text-primary">.</span>
            </h2>
            <p className="text-secondary text-sm md:text-base font-space leading-relaxed">
              Building exceptional web experiences with modern technologies and
              clean design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-space text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-secondary font-space">
              <li>
                <a
                  href="#home_section"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#project_section"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#tech_stack_section"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#experience_section"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold font-space text-white">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Aryan-Thapa-Np"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} className="text-white" />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aryanthapa583@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} className="text-white" />
              </a>

              <a
                href="https://www.instagram.com/aryanthapa224/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-secondary text-sm font-space">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
