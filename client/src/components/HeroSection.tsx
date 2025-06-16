import { Linkedin, Github, Mail, ArrowDown } from "lucide-react";

import Profilepic from "@assets/Profilepic_1750008568840.jpg";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto text-center animate-fade-in">
        <div className="glassmorphism rounded-3xl p-12 max-w-4xl mx-auto hover-lift hero-liquid">
          {/* Profile Image with floating animation */}
          <div className="mb-8 animate-float">
            <img
              src={Profilepic}
              alt="Prasath Murugesan"
              className="w-32 h-32 rounded-full mx-auto border-4 border-primary/30 shadow-2xl object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-4 bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent leading-tight tracking-tight">
            Prasath Murugesan
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
            AI/ML Consultant & Passionate Engineer
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Based out of New York City, from India.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://www.linkedin.com/in/prasath-m/"
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism rounded-full p-4 social-icon hover:bg-primary/20 transition-all hover-lift"
            >
              <Linkedin className="text-primary text-xl w-6 h-6" />
            </a>
            <a
              href="https://github.com/Prasath2001/"
              target="_blank"
              rel="noopener noreferrer"
              className="glassmorphism rounded-full p-4 social-icon hover:bg-primary/20 transition-all hover-lift"
            >
              <Github className="text-primary text-xl w-6 h-6" />
            </a>
            <a
              href="mailto:prasath.murugesan2001@gmail.com"
              className="glassmorphism rounded-full p-4 social-icon hover:bg-primary/20 transition-all hover-lift"
            >
              <Mail className="text-primary text-xl w-6 h-6" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="inline-flex items-center bg-gradient-to-r from-primary to-secondary px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform animate-glow"
          >
            Connect With Me
            <ArrowDown className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
