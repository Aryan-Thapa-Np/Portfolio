import { Link } from "react-router-dom";

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
          <Link to="/projects" className="hover:text-primary">
            Projects
          </Link>
          <Link to="/stacks" className="hover:text-primary">
            Stacks
          </Link>
          <Link to="/experience" className="hover:text-primary">
            Experience
          </Link>
        </div>

        <div className="right md:flex hidden ">
          <Link
            to="/contact"
            className="btn font-semibold bg-primary text-white  font-space "
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
}
