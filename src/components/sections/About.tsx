import { profile, whoamiList } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

const About = () => (
  <section id="about" className="section-padding relative">
    <div className="container mx-auto max-w-3xl">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="glow-text">Me</span>
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="glass-card p-6 md:p-8 font-mono text-sm md:text-base leading-relaxed">
          <p className="text-accent mb-4">$ whoami</p>
          <p className="text-foreground font-semibold mb-4">{profile.role}</p>
          <p className="text-muted-foreground mb-6">
            {profile.whoami.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <ul className="space-y-2">
            {whoamiList.map((item) => (
              <li key={item} className="flex items-center gap-2 text-muted-foreground">
                <span className="text-accent">•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
