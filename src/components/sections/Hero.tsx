import { useEffect, useState } from "react";
import { Github, Linkedin, FileDown, ChevronDown } from "lucide-react";
import { profile } from "@/data/portfolio";

const ROLES = [
  "Cyber Security Enthusiast",
  "Offensive Security Enthusiast",
  "Penetration Tester",
  "Bug Bounty Hunter",
  "VAPT Enthusiast",
  "Web Application Security Enthusiast",
  "AI Security Enthusiast",
  "Threat Detection Enthusiast",
  "Ethical Hacker"
];

const useTypewriter = (words: string[], speed = 55, pause = 1400) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
};

const Hero = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative z-10 text-center max-w-3xl mx-auto animate-fade-up">
        <p className="font-mono text-sm md:text-base text-accent mb-4 tracking-wide">
          &gt; whoami --engineer
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
          {profile.name}
        </h1>

        <div className="h-8 md:h-9 flex items-center justify-center mb-6">
          <span className="text-lg md:text-2xl font-semibold glow-text font-mono">
            {typed}
            <span className="animate-pulse">_</span>
          </span>
        </div>

        <p className="text-sm md:text-base text-muted-foreground mb-10 max-w-xl mx-auto">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={profile.resumeUrl} download className="glow-button flex items-center gap-2">
            <FileDown size={18} /> Resume
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all duration-300"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 transition-all duration-300"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-accent transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={26} />
      </a>
    </section>
  );
};

export default Hero;
