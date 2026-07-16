import { experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Briefcase } from "lucide-react";

const Experience = () => (
  <section id="experience" className="section-padding relative">
    <div className="container mx-auto max-w-3xl">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="glow-text">Experience</span>
        </h2>
      </Reveal>

      <div className="relative pl-8 md:pl-10">
        <div className="absolute left-[9px] md:left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        {experience.map((job, i) => (
          <Reveal key={job.company + i} delay={i * 120} className="relative mb-10 last:mb-0">
            <span className="absolute -left-8 md:-left-10 top-1.5 w-5 h-5 rounded-full bg-background border-2 border-accent flex items-center justify-center">
              <Briefcase size={11} className="text-accent" />
            </span>

            <div className="glass-card-hover p-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="font-semibold text-lg">{job.role}</h3>
                <span className="text-xs font-mono text-accent">{job.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {job.company} • {job.location}
              </p>
              <ul className="space-y-1.5">
                {job.description.map((line, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent">▸</span> {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
