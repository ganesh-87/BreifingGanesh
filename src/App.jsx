import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="font-script text-white bg-gradient-to-l from-blue-100 to-purple-200">
        <Navbar />
        <Hero />
        <Experience />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
