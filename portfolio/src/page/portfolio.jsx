import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Hero_section from "../components/hero_section";
import Projects from "../components/projects";
import TechStack from "../components/tech_stack";
import Experience from "../components/experience";
import Footer from "../components/footer";

export default function Portfolio() {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero_section />
      <Projects />
      <TechStack />
      <Experience />
      <Footer />
    </>
  );
}
