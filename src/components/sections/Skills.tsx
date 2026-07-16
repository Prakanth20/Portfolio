import { skillCategories } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const Skills = () => (
  <section id="skills" className="section-padding relative">
    <div className="container mx-auto max-w-5xl">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills &amp; <span className="glow-text">Tools</span>
        </h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 80}>
            <div className="glass-card-hover p-6 h-full">
              <h3 className="text-lg font-semibold mb-4 text-accent">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md text-xs md:text-sm border border-primary/30 bg-primary/5 text-foreground/90 hover:border-accent hover:text-accent hover:shadow-[0_0_15px_hsl(var(--glow-cyan)/0.3)] transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
