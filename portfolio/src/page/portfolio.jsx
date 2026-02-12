import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Hero_section from "../components/hero_section";
import Projects from "../components/projects";
import TechStack from "../components/tech_stack";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Portfolio() {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero_section />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
