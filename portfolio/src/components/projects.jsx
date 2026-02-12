import { useEffect, useRef } from "react";
import { Github, ExternalLink, Code2 } from "lucide-react";

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
      title: "E-Commerce Platform",
      description:
        "A fully functional ecommerce platform built to support diverse purchasing options, including game top-ups, product subscriptions, and standard products. The website features a robust user management system, secure authentication, real-time chat support, and order tracking capabilities for an enhanced user experience.",
      image: "/project1.jpg",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "ejs", "MySQL"],
      github:
        "https://github.com/Aryan-Thapa-Np/Ecommerce-Website--Node.js-EJS-HTML",
      demo: "#",
      has_demo: false,
      has_github: true,
    },
    {
      title: "Project Tracker & Management Tool",
      description:
        "Developed a role-based project management platform that enables project managers to assign tasks to staff, track project progress, and manage subtasks efficiently. Implemented secure role-based access control (RBAC) to ensure proper permission handling across users. Designed a responsive frontend and built a scalable backend for structured project and task management.",
      image: "/project2.jpg",
      technologies: ["React", "Typescript", "Tailwind CSS", "Node.js", "MySQL"],
      github: "https://github.com/yourusername/task-manager",
      demo: "#",
      has_demo: false,
      has_github: true,
    },
    {
      title: "Birkhe - Social Media Auto Pilot",
      description:
        "Birkhe, the AI-powered SaaS platform that automates engagement, content creation, and customer interactions across Instagram, Facebook, and WhatsApp. Imagine AI handling your daily posts, replying to messages instantly, managing comments with smart sentiment analysis, and growing your audience while you focus on running your business.",
      image: "/project3.jpg",
      technologies: ["Node.js", "Lavarel", "Tailwind CSS", "MySQL", "React"],
      github: "https://github.com/yourusername/social-dashboard",
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
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                {/* Project Image */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-primary/20 to-purple-600/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 size={64} className="text-white/20" />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Stars */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 font-space font-bold text-lg group"
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
