import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Rexial",
    description:
      "A real-time Quiz Plateform with GenAI where organizers can host quizzes and the participants can join that quiz via a join-code",
    stack: ["React", "TypeScript", "Express", "Redis", "Turborepo","Python", "pnpm-workspace", "PostgreSQL", "Prisma", "WebSockets", "zustand", "Jenkins", "Dcoker", "AWS", "Nginx"],
    images: [
      "/rexial02.jpeg",
      "/rexial01.jpeg",
    ],
    github: "https://github.com/TheCodeHeist-Coder/Rexial",
    live: "https://rexial.in",
    accent: "#a78bfa",
    status: "In Production"
  },
  {
    id: 2,
    name: "Ratelock",
    description:
      "Stop paying for API gateways you don't need. RateLock adds rate limiting to any backend in 2 lines — Redis-powered, dashboard included, zero infra to manage.",
    stack: ["React.js", "Express", "Typescript", "TailwindCSS", "Redis", "PostgreSQL", "Prisma", "zustand", "Docker", "nginx"],
    images: [
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ],
    github: "https://github.com/TheCodeHeist-Coder/ratelock",
    live: "https://github.com/TheCodeHeist-Coder/ratelock",
    accent: "#34d399",
    status: "In Development"
  },
];

// ── Tilt Card with flip-image-on-hover ──────────────────────────────────────
function ProjectCard({ project }: {project: any}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e:any) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full rounded-2xl overflow-hidden cursor-pointer"
      onClick={() => setImageIndex((i) => (i + 1) % project.images.length)}
    >
      {/* Card border glow */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
          boxShadow: hovered
            ? `0 0 0 1px ${project.accent}55, 0 20px 60px ${project.accent}22`
            : "0 0 0 1px #ffffff0a",
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl pointer-events-none z-20"
      />

      {/* Static border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-10"
        style={{ boxShadow: "0 0 0 1px #ffffff0f" }}
      />

      <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* ── Image section ──────────────────────────────────────── */}
        <div className="relative h-52 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={imageIndex}
              src={project.images[imageIndex]}
              alt={project.name}
              initial={{ opacity: 0, scale: 1.08, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay gradient */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--bg-secondary), rgba(0,0,0,0.05), transparent)' }} />

          {/* Image dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_:any, i:any) => (
              <motion.div
                key={i}
                animate={{
                  width: i === imageIndex ? 20 : 6,
                  backgroundColor:
                    i === imageIndex ? project.accent : "#ffffff44",
                }}
                transition={{ duration: 0.3 }}
                className="h-1.5 rounded-full"
              />
            ))}
          </div>

         
        
        </div>

        {/* ── Content section ────────────────────────────────────── */}
        <div className="px-5 pt-4 pb-5 space-y-3">
          {/* Project name */}
          <motion.h3
            className="text-[1.25rem] flex items-center justify-between font-bold tracking-tight theme-text-primary leading-none"
            style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
          >
            {project.name}
            <span className="text-pink-500 font-extralight text-sm"> {project.status} </span>
          </motion.h3>

          {/* Description */}
          <p
            className="text-[0.8rem] leading-relaxed font-semibold theme-text-secondary"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.stack.map((tech:any) => (
              <span
                key={tech}
                className="text-[0.68rem] px-2.5 py-0.5 rounded-full font-mono tracking-wide theme-text-secondary"
                style={{
                  background: "var(--bg-tertiary)",
                  border: `1px solid var(--border-color)`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ── Links row ──────────────────────────────────────────── */}
          <div className="flex justify-end gap-2 pt-1.5">
            {/* GitHub */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-[0.74rem] font-mono px-3 py-1.5 rounded-lg theme-text-secondary"
              style={{
                background: "var(--bg-tertiary)",
                border: `1px solid var(--border-color)`,
                textDecoration: "none",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </motion.a>

            {/* Live */}
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-1.5 text-[0.74rem] font-mono px-3 py-1.5 rounded-lg"
              style={{
                background: `${project.accent}18`,
                border: `1px solid ${project.accent}44`,
                color: project.accent,
                textDecoration: "none",
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Grid layout ─────────────────────────────────────────────────────────────
export default function ProjectGrid() {
  return (
    <>
    
     

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full max-w-5xl">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ perspective: "1200px" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
    </>
  );
}