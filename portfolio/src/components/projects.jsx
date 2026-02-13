import { useEffect, useRef } from "react";
import { Github, Hourglass, ExternalLink, Code2 } from "lucide-react";
import homepage_ecommerce from "/homepage.png";
import project_tracker from "/dashboard.png";
import birkhe from "/birkhe.png";
import freedom_bajaar from "/freedom bajaar.png";

export default function Projects() {
  const sectionRef = useRef(null);

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

    const items = sectionRef.current?.querySelectorAll(".project-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform (Freedom Bajaar)",
      description:
        "A powerful, modern, and real-time e-commerce application built with Node.js, Express, MySQL, and EJS. This platform supports diverse purchasing options, including game top-ups, product subscriptions, and standard products, featuring a robust admin management system and real-time chat support.",
      image: freedom_bajaar,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "ejs", "MySQL"],
      github:
        "https://github.com/Aryan-Thapa-Np/Ecommerce-Website--Node.js-EJS-HTML",
      demo: "#",
      has_demo: false,
      has_github: false,
    },
    {
      title: "Project Tracker & Management Tool",
      description:
        "A powerful, modern, and real-time project management application built with React 19, Node.js, Express, and MySQL. This application allows teams to efficiently track projects, manage tasks, and stay updated with real-time notifications.",
      image: project_tracker,
      technologies: ["React", "Typescript", "Tailwind CSS", "Node.js", "MySQL"],
      github: "https://github.com/Aryan-Thapa-Np/Project-Tracker-React",
      demo: "#",
      has_demo: false,
      has_github: true,
    },

    {
      title: "Birkhe - Social Media Auto Pilot",
      description:
        "Birkhe, the AI-powered SaaS platform that automates engagement, content creation, and customer interactions across Instagram, Facebook, and WhatsApp. Imagine AI handling your daily posts, replying to messages instantly, managing comments with smart sentiment analysis, and growing your audience while you focus on running your business.",
      image: birkhe,
      technologies: ["Node.js", "Lavarel", "Tailwind CSS", "MySQL", "React"],
      github: "#",
      demo: "#",
      has_demo: false,
      has_github: false,
    },
    {
      title: "E-Commerce Platform (Cartify)",
      description:
        "A powerful, modern, and real-time e-commerce application built with Node.js, Express, MySQL, and EJS. This platform supports diverse purchasing options, including game top-ups, product subscriptions, and standard products, featuring a robust admin management system and real-time chat support.",
      image: homepage_ecommerce,
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "ejs", "MySQL"],
      github:
        "https://github.com/Aryan-Thapa-Np/Ecommerce-Website--Node.js-EJS-HTML",
      demo: "#",
      has_demo: false,
      has_github: true,
    },
  ];

  return (
    <section
      id="project_section"
      ref={sectionRef}
      className="projects-section relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div
        className="hero_blob"
        style={{ top: "95vh", right: "540px", zIndex: -10 }}
      ></div>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 project-item">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-secondary text-lg md:text-xl font-space max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative  h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-primary/50 transition-all duration-300  hover:shadow-2xl hover:shadow-primary/20">
                {/* Project Image */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-56 object-contain"
                  />
                )}

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Stars */}
                  <div className="flex items-start justify-between gap-2 ">
                    <h3 className="text-xl md:text-2xl font-bold  text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-secondary font-space text-sm leading-relaxed  text-justify">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded text-xs font-space"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    {project.has_github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-white font-space text-sm font-medium group/btn"
                      >
                        <Github
                          size={16}
                          className="group-hover/btn:scale-110 transition-transform duration-300"
                        />
                        GitHub
                      </a>
                    )}
                    {project.has_demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-space text-sm font-medium group/btn"
                      >
                        <ExternalLink
                          size={16}
                          className="group-hover/btn:scale-110 transition-transform duration-300"
                        />
                        Demo
                      </a>
                    )}

                    {!project.has_demo && !project.has_github && (
                      <a
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-white font-space text-sm font-medium group/btn"
                      >
                        <Hourglass
                          size={16}
                          className="group-hover/btn:scale-110 transition-transform duration-300"
                        />
                        In Development
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 md:mt-16 project-item ">
          <a
            href="https://github.com/Aryan-Thapa-Np?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center  md:text-xl gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-space font-bold text-sm group"
          >
            <Github
              size={24}
              className="group-hover:rotate-12 transition-transform duration-300"
            />
            View All Projects on GitHub
            <ExternalLink
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
