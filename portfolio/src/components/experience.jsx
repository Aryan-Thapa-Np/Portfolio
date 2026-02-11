import { useEffect, useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Experience item entering viewport:", entry.target);
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
    console.log("Experience items found:", items?.length);
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using React, Node.js, and MySQL. Architecting cloud-based solutions and mentoring junior developers.",
      technologies: ["React", "Node.js", "MySQL", "AWS", "Docker"],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      description:
        "Developed and maintained multiple client projects, implementing responsive designs and RESTful APIs. Improved application performance by 40%.",
      technologies: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Studio",
      period: "2019 - 2021",
      description:
        "Created pixel-perfect, responsive user interfaces. Collaborated with designers and backend teams to deliver high-quality web applications.",
      technologies: ["JavaScript", "React", "CSS3", "Figma"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2019",
      description:
        "Assisted in building web applications and learned modern development practices. Contributed to both frontend and backend development.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="experience-section relative px-4 sm:px-8 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 experience-item">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-secondary text-lg md:text-xl font-space max-w-2xl mx-auto">
            My professional journey in software development
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
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
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
                    <p className="text-secondary font-space leading-relaxed mb-4">
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
