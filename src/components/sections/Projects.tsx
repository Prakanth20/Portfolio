import { projects } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Github, ExternalLink, FileText } from "lucide-react";

const difficultyColor: Record<string, string> = {
  Beginner: "text-green-400 border-green-400/30 bg-green-400/10",
  Intermediate: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  Advanced: "text-red-400 border-red-400/30 bg-red-400/10",
};

const Projects = () => (
  <section id="projects" className="section-padding relative">
    <div className="container mx-auto max-w-5xl">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="glow-text">Projects</span>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <div className="glass-card-hover p-6 h-full flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <span
                  className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full border ${difficultyColor[project.difficulty]}`}
                >
                  {project.difficulty}
                </span>
              </div>

              <p className="text-xs text-accent font-mono mb-3">{project.category}</p>

              <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github size={15} /> Code
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink size={15} /> Demo
                  </a>
                )}
                {project.docsUrl && (
                  <a
                    href={project.docsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <FileText size={15} /> Docs
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
