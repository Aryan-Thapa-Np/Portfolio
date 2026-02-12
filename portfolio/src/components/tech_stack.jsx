import StackIcon from "tech-stack-icons";
import { useEffect, useRef } from "react";

export default function TechStack() {
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

    const items = sectionRef.current?.querySelectorAll(".tech-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const techStack = [
    { name: "react", label: "React" },
    { name: "nodejs", label: "Node.js" },
    { name: "mysql", label: "MySQL" },
    { name: "tailwindcss", label: "Tailwind CSS" },
    { name: "js", label: "JavaScript" },
    { name: "typescript", label: "TypeScript" },
    { name: "mongodb", label: "MongoDB" },
    { name: "git", label: "Git" },
    { name: "html5", label: "HTML" },
    { name: "css3", label: "CSS" },
  ];

  return (
    <section
      id="tech_stack_section"
      ref={sectionRef}
      className="tech-stack-section relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 tech-item">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-primary">Tech</span> Stack
          </h2>
          <p className="text-secondary text-lg md:text-xl font-space max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {techStack.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-item tech-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-5xl md:text-6xl transition-transform duration-300 group-hover:scale-110">
                  <StackIcon name={tech.name} />
                </div>
                <span className="text-white font-space text-sm md:text-base font-medium">
                  {tech.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
