import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleNetwork from "@/components/ParticleNetwork";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import GitHubDashboard from "@/components/sections/GitHubDashboard";
import TryHackMeDashboard from "@/components/sections/TryHackMeDashboard";
import Certificates from "@/components/sections/Certificates";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Loader onDone={() => setLoading(false)} /> */}

      {/* <ParticleNetwork /> */}

      {/* <CustomCursor /> */}

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubDashboard />
        <TryHackMeDashboard />
        <Certificates />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
