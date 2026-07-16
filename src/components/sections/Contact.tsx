import { profile } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Mail, Phone, Github, Linkedin, FileDown } from "lucide-react";

const Contact = () => (
  <section id="contact" className="section-padding relative">
    <div className="container mx-auto max-w-2xl text-center">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's <span className="glow-text">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-12">
          Open to internships, entry-level security roles, and collaboration on interesting problems.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="glass-card p-8 grid sm:grid-cols-2 gap-4 text-left">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Mail size={18} className="text-accent" />
            <span className="text-sm">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Phone size={18} className="text-accent" />
            <span className="text-sm">{profile.phone}</span>
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Github size={18} className="text-accent" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Linkedin size={18} className="text-accent" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>

        <a
          href={profile.resumeUrl}
          download
          className="glow-button mt-8 inline-flex items-center gap-2"
        >
          <FileDown size={18} /> Download Resume
        </a>
      </Reveal>
    </div>
  </section>
);

export default Contact;
