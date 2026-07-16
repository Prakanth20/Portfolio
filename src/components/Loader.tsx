import { useEffect, useState } from "react";

const Loader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1100;

    let raf: number;
    const tick = (now: number) => {
      const p = Math.min(100, ((now - start) / duration) * 100);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLeaving(true), 250);
        setTimeout(onDone, 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const filled = Math.floor(progress / 5);

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500 ${
        leaving ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center font-mono px-6">
        <p className="text-sm md:text-base text-muted-foreground tracking-wide mb-4">
          {progress < 100 ? "Initializing Security Console..." : "Access Granted"}
        </p>
        <div className="text-accent text-base md:text-lg tracking-widest mb-3">
          {"█".repeat(filled)}
          <span className="text-border">{"░".repeat(20 - filled)}</span>
        </div>
        <p className="text-xs text-muted-foreground/70">{Math.floor(progress)}%</p>
      </div>
    </div>
  );
};

export default Loader;
