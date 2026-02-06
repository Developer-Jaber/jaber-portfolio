import About from "../components/sections/about/About";
import Contact from "../components/sections/contact/Contact";
import Hero from "../components/sections/hero/Hero";
import Projects from "../components/sections/projects/Projects";

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}
