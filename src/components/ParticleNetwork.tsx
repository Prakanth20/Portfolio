import { useEffect, useRef } from "react";

/**
 * Interactive particle / network-topology background.
 * - Nodes drift slowly and spring back after being pushed by the cursor.
 * - Lines connect nearby nodes, brightening near the mouse.
 * - Renders on a single fixed <canvas> behind all page content.
 */

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  r: number;
};

const PRIMARY = "59, 130, 246"; // blue #3B82F6
const SECONDARY = "139, 92, 246"; // violet #8B5CF6
const ACCENT = "6, 182, 212"; // cyan #06B6D4

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let animationId: number;
    let reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const density = width < 640 ? 18000 : 11000;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    };

    const buildNodes = () => {
      const count = Math.min(140, Math.floor((width * height) / density));
      nodes = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: Math.random() * 1.6 + 0.8,
        };
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.active = true;
    };
    const onMouseLeave = () => {
      mouse.current.active = false;
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouse.current.x = e.touches[0].clientX;
        mouse.current.y = e.touches[0].clientY;
        mouse.current.active = true;
      }
    };

    const linkDist = width < 640 ? 110 : 150;
    const mouseRadius = 180;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // subtle radial glow following the cursor
      if (mouse.current.active) {
        const grd = ctx.createRadialGradient(
          mouse.current.x,
          mouse.current.y,
          0,
          mouse.current.x,
          mouse.current.y,
          mouseRadius * 1.6
        );
        grd.addColorStop(0, `rgba(${ACCENT}, 0.06)`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, width, height);
      }

      // update + draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (!reduceMotion) {
          // drift
          n.baseX += n.vx;
          n.baseY += n.vy;
          if (n.baseX < 0 || n.baseX > width) n.vx *= -1;
          if (n.baseY < 0 || n.baseY > height) n.vy *= -1;

          // repel from mouse, spring back to base position
          const dx = n.x - mouse.current.x;
          const dy = n.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius;
            n.x += (dx / (dist || 1)) * force * 3.2;
            n.y += (dy / (dist || 1)) * force * 3.2;
          }
          n.x += (n.baseX - n.x) * 0.06;
          n.y += (n.baseY - n.y) * 0.06;
        } else {
          n.x = n.baseX;
          n.y = n.baseY;
        }
      }

      // connecting lines (network topology)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const dm = Math.hypot(midX - mouse.current.x, midY - mouse.current.y);
            const nearMouse = Math.max(0, 1 - dm / (mouseRadius * 1.4));
            const baseOpacity = (1 - dist / linkDist) * 0.18;
            const opacity = baseOpacity + nearMouse * 0.35;
            const color = nearMouse > 0.4 ? ACCENT : PRIMARY;
            ctx.strokeStyle = `rgba(${color}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes on top, glowing
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const dm = Math.hypot(n.x - mouse.current.x, n.y - mouse.current.y);
        const near = dm < mouseRadius;
        const color = near ? ACCENT : i % 5 === 0 ? SECONDARY : PRIMARY;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color}, ${near ? 0.95 : 0.55})`;
        ctx.shadowBlur = near ? 12 : 4;
        ctx.shadowColor = `rgba(${color}, 0.8)`;
        ctx.arc(n.x, n.y, near ? n.r + 1 : n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticleNetwork;
