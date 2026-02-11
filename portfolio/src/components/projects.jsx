import { useEffect, useRef } from "react";
import { Github, ExternalLink, Code2, Star } from "lucide-react";

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Project item entering viewport:", entry.target);
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
    console.log("Project items found:", items?.length);
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/yourusername/ecommerce",
      demo: "https://demo-ecommerce.com",
      featured: true,
      stars: 245,
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features. Supports multiple workspaces and projects.",
      image: "/project2.jpg",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      github: "https://github.com/yourusername/task-manager",
      demo: "https://demo-tasks.com",
      featured: true,
      stars: 189,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization, scheduled posting, and engagement tracking across multiple platforms.",
      image: "/project3.jpg",
      technologies: ["Next.js", "TypeScript", "Chart.js", "PostgreSQL"],
      github: "https://github.com/yourusername/social-dashboard",
      demo: "https://demo-social.com",
      featured: false,
      stars: 156,
    },
    {
      title: "Weather Forecast App",
      description:
        "Beautiful weather application with 7-day forecasts, interactive maps, and location-based alerts. Features smooth animations and intuitive UI.",
      image: "/project4.jpg",
      technologies: ["React", "OpenWeather API", "CSS3", "Geolocation"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://demo-weather.com",
      featured: false,
      stars: 98,
    },
    {
      title: "Portfolio Generator",
      description:
        "AI-powered portfolio website generator that creates personalized portfolio sites based on user input. Includes multiple themes and customization options.",
      image: "/project5.jpg",
      technologies: ["React", "Node.js", "OpenAI", "Tailwind CSS"],
      github: "https://github.com/yourusername/portfolio-gen",
      demo: "https://demo-portfolio.com",
      featured: false,
      stars: 312,
    },
    {
      title: "Fitness Tracker",
      description:
        "Comprehensive fitness tracking application with workout plans, nutrition tracking, progress charts, and social features for motivation.",
      image: "/project6.jpg",
      technologies: ["React Native", "Express", "MySQL", "Chart.js"],
      github: "https://github.com/yourusername/fitness-tracker",
      demo: "https://demo-fitness.com",
      featured: false,
      stars: 127,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="projects-section relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-32"
    >
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-space font-semibold flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Featured
                  </div>
                )}

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
                    <div className="flex items-center gap-1 text-secondary text-sm">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-secondary font-space text-sm leading-relaxed line-clamp-3">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 md:mt-16 project-item">
          <a
            href="https://github.com/yourusername"
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
