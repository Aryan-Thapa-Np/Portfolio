import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
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

    const items = sectionRef.current?.querySelectorAll(".experience-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Full-Stack E-Commerce Development",
      company: "Personal Project",
      period: "2025 - 2025",
      description:
        "Developed a comprehensive e-commerce platform featuring secure authentication, real-time chat support, and complex product management. Optimized MySQL queries for high performance and implemented a responsive UI with EJS templates.",
      technologies: ["Node.js", "MySQL", "EJS", "JavaScript", "Express"],
    },
    {
      title: "Project Tracker & Management Tool",
      company: "Personal Project",
      period: "2025 - 2025",
      description:
        "Developed a role-based project management platform that enables project managers to assign tasks to staff, track project progress, and manage subtasks efficiently. Implemented secure role-based access control (RBAC) to ensure proper permission handling across users. Designed a responsive frontend and built a scalable backend for structured project and task management.",
      technologies: ["React", "Typescript", "Tailwind CSS", "Node.js", "MySQL"],
    },
    {
      title: "Birkhe - Social Media Auto Pilot",
      company: "Founder & Lead Developer (Collaborative Project)",
      period: "In Progress",
      description:
        "Co-developed an AI-driven SaaS platform that automates social media workflows. Architected the React frontend and engineered a high-performance Web-Socket pipeline to facilitate real-time messaging and automated sentiment-based interactions across Instagram, Facebook, and WhatsApp. Focused on creating a low-latency user experience for complex AI content management.",
      technologies: [
        "Node.js",
        "Laravel",
        "Tailwind CSS",
        "MySQL",
        "React",
        "Web-Sockets",
      ],
    },
    {
      title: "Full-Stack E-Commerce Development",
      company: "Personal Project",
      period: "In Progress",
      description:
        "Developed a comprehensive e-commerce platform featuring secure authentication and complex product management. Optimized MySQL queries for high performance and implemented a responsive UI with EJS templates.",
      technologies: ["Node.js", "MySQL", "EJS", "JavaScript", "Express"],
    },
    {
      title: "Affiliate Marketing Nepal",
      company: "Personal Project",
      period: "In Progress",
      description:
        "Building a centralized affiliate marketing platform designed specifically for the Nepali market. The platform enables affiliates to manage their work efficiently, showcase professional profiles, display products to customers, track performance metrics, and manage their affiliate network all in one place. Implementing real-time analytics and commission tracking features.",
      technologies: ["React", "Node.js", "MySQL", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Samrat - AI Image Generator",
      company: "Personal Project",
      period: "In Progress",
      description:
        "Developing a cutting-edge AI-powered image generation application that allows users to generate unique, high-quality images from text prompts. Samrat features advanced AI capabilities, batch processing, real-time caching with Redis, and customizable parameters for fine-tuning generated outputs to meet specific creative needs.",
      technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB", "Redis", "AI/ML"],
    },
  ];

  return (
    <section
      id="experience_section"
      ref={sectionRef}
      className="experience-section relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div
        className="hero_blob"
        style={{ top: "50vh", right: "540px", zIndex: -10 }}
      ></div>
      <div
        className="hero_blob"
        style={{ top: "180vh", right: "140px", zIndex: -10 }}
      ></div>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 experience-item">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Project <span className="text-primary">Experience</span>
          </h2>
          <p className="text-secondary text-lg md:text-xl font-space max-w-2xl mx-auto">
            A timeline of my key development milestones and personal projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark transform md:-translate-x-1/2 z-10 shadow-lg shadow-primary/50"></div>

                {/* Content Card */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="experience-card bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-2xl md:text-3xl text-start font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-space text-lg mb-2">
                        <Briefcase size={20} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-secondary font-space">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary font-space leading-relaxed mb-4 text-justify">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-sm font-space"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
