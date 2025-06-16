import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "education", "projects"];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 glass-nav rounded-full px-8 py-4 animate-slide-up">
      <div className="flex items-center space-x-8">
        <button 
          onClick={() => scrollToSection("hero")}
          className={`font-poppins font-bold text-lg liquid-effect hover:text-secondary transition-colors ${
            activeSection === "hero" ? "liquid-text" : "text-white"
          }`}
        >
          வணக்கம்!
        </button>
        <button 
          onClick={() => scrollToSection("about")}
          className={`hover:text-primary transition-colors ${
            activeSection === "about" ? "text-primary" : "text-white"
          }`}
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection("experience")}
          className={`hover:text-primary transition-colors ${
            activeSection === "experience" ? "text-primary" : "text-white"
          }`}
        >
          Experience
        </button>
        <button 
          onClick={() => scrollToSection("education")}
          className={`hover:text-primary transition-colors ${
            activeSection === "education" ? "text-primary" : "text-white"
          }`}
        >
          Education
        </button>
        <button 
          onClick={() => scrollToSection("projects")}
          className={`hover:text-primary transition-colors ${
            activeSection === "projects" ? "text-primary" : "text-white"
          }`}
        >
          Projects
        </button>
      </div>
    </nav>
  );
}
