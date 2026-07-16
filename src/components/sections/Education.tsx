import { education } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="section-padding relative">
    <div className="container mx-auto max-w-3xl">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="glow-text">Education</span>
        </h2>
      </Reveal>

      <div className="space-y-6">
        {education.map((item, i) => (
          <Reveal key={item.school} delay={i * 100}>
            <div className="glass-card-hover p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{item.school}</h3>
                <p className="text-sm text-muted-foreground">{item.degree}</p>
                <p className="text-xs font-mono text-accent mt-1">{item.period}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
