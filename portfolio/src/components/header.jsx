export default function Header() {
  return (
    <>
      <div className="header-animate fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-3 px-10 md:px-20 bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-space hover:scale-105 transition-all duration-300">
            Portfolio.
          </h1>
        </div>
        <div className="mid hidden gap-10 items-center justify-center font-space text-secondary md:flex">
          <a href="#project_section" className="hover:text-primary">
            Projects
          </a>
          <a href="#tech_stack_section" className="hover:text-primary">
            Stacks
          </a>
          <a href="#experience_section" className="hover:text-primary">
            Experience
          </a>
        </div>

        <div className="right md:flex hidden ">
          <a
            href="#contact_section"
            className="btn font-semibold flex items-center justify-center gap-2 btn_dark bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors "
          >
            Hire Me
          </a>
        </div>
      </div>
    </>
  );
}
