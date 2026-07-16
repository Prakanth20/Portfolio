import { useState } from "react";
import { certificates } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import { Award, X } from "lucide-react";

const Certificates = () => {
  const [active, setActive] = useState<number | null>(null);

  const grouped = certificates.reduce<Record<string, typeof certificates>>((acc, cert) => {
    acc[cert.issuer] = acc[cert.issuer] ? [...acc[cert.issuer], cert] : [cert];
    return acc;
  }, {});

  return (
    <section id="certificates" className="section-padding relative">
      <div className="container mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="glow-text">Certificates</span>
          </h2>
        </Reveal>

        <div className="space-y-10">
          {Object.entries(grouped).map(([issuer, certs], gi) => (
            <Reveal key={issuer} delay={gi * 100}>
              <div>
                <h3 className="text-sm font-mono text-accent mb-4 tracking-wide">{issuer}</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certs.map((cert, ci) => {
                    const globalIndex = certificates.indexOf(cert);
                    return (
                      <button
                        key={cert.name}
                        onClick={() => cert.image && setActive(globalIndex)}
                        className="glass-card-hover p-5 text-left flex items-start gap-3"
                      >
                        <Award size={20} className="text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm leading-snug">{cert.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && certificates[active]?.image && (
        <div
          className="fixed inset-0 z-[150] bg-background/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setActive(null)}
        >
          <button
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
            onClick={() => setActive(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={certificates[active].image}
            alt={certificates[active].name}
            className="max-w-full max-h-[85vh] rounded-lg border border-border"
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
