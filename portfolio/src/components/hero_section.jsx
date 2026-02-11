import user_image from "/user.jpeg";
import { ArrowRight, Phone } from "lucide-react";
import StackIcon from "tech-stack-icons";

export default function Hero_section() {
  return (
    <section className="hero_section relative flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-20 pt-32 md:pt-16 lg:pt-20">
      <div className="hero_blob"></div>

      {/* Left Content */}
      <div className="left w-full md:w-[65%] lg:w-[70%]">
        <div className="space-y-6 md:space-y-8">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight">
            <span className="text-light">Full-Stack</span> <br />
            <span className="text-primary">Developer &</span>
            <br className="hidden sm:block" />
            <span className="sm:inline"> System Designer</span>
          </h1>

          <p className="text-secondary text-sm sm:text-base md:text-lg lg:text-xl font-space leading-relaxed w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[50%]">
            I build web applications that work smoothly and look great.
            Experienced with{" "}
            <span className="underline underline-offset-4 text-white decoration-primary/50">
              React
            </span>
            ,{" "}
            <span className="underline underline-offset-4 text-white decoration-primary/50">
              Node.js
            </span>
            ,{" "}
            <span className="underline underline-offset-4 text-white decoration-primary/50">
              MySQL
            </span>
            , and{" "}
            <span className="underline underline-offset-4 text-white decoration-primary/50">
              Tailwind CSS
            </span>
            . I focus on creating scalable systems with clean and intuitive
            designs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4 md:pt-6 lg:pt-10 font-space font-bold text-base sm:text-lg">
            <button className="flex items-center justify-center gap-2 btn h-12 sm:h-14 w-full sm:w-48 md:w-56 bg-primary text-white hover:bg-primary/90 transition-colors">
              View Work <ArrowRight size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 btn_dark h-12 sm:h-14 w-full sm:w-48 md:w-56 bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
              Contact Me <Phone size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="right z-10 w-full md:w-auto flex justify-center md:justify-end">
        <div className="relative h-64 w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
          {/* Main glow container */}
          <div className="h-full w-full glow_eff bg-dark/50 flex items-center justify-center rounded-lg md:mr-8 lg:mr-12 xl:mr-20">
            <img
              className="h-52 w-52 md:h-60 md:w-60 lg:h-68 lg:w-68 xl:h-76 xl:w-76 rounded-full border-4 sm:border-6 md:border-8 border-primary object-cover"
              src={user_image}
              alt="Profile"
            />
          </div>

          {/* Floating Tech Icons */}
          <div className="floating-icon floating-icon-1">
            <div className="tech-badge">
              <span className="text-lg sm:text-xl md:text-2xl">
                <StackIcon name="react" />
              </span>
            </div>
          </div>

          <div className="floating-icon floating-icon-2">
            <div className="tech-badge">
              <span className="text-lg sm:text-xl md:text-2xl">
                <StackIcon name="mysql" />
              </span>
            </div>
          </div>

          <div className="floating-icon floating-icon-3">
            <div className="tech-badge">
              <span className="text-lg sm:text-xl md:text-2xl">
                <StackIcon name="nodejs" />
              </span>
            </div>
          </div>

          <div className="floating-icon floating-icon-4">
            <div className="tech-badge">
              <span className="text-lg sm:text-xl md:text-2xl">
                <StackIcon name="tailwindcss" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
