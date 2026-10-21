import { useState } from "react"
import { motion } from "framer-motion"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Reveal from "../components/Reveal"
import { contributions, targets } from "../data/openSource"
import type { Contribution } from "../data/openSource"

// how many PRs are visible before "Show more"
const INITIAL_COUNT = 3

const STATUS_COLORS: Record<Contribution["status"], string> = {
  Merged: "#a371f7",
  Open: "#3fb950",
}

function ContributionCard({ contribution }: { contribution: Contribution }) {
  const color = STATUS_COLORS[contribution.status]

  return (
    <motion.a
      href={contribution.prLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="block rounded-2xl p-5 space-y-3 theme-border"
      style={{ backgroundColor: "var(--bg-secondary)", border: "1px solid var(--border-color)", textDecoration: "none" }}
    >
      {/* Org / project */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={`https://github.com/${contribution.org}.png?size=40`}
            alt={contribution.org}
            className="w-6 h-6 rounded-md shrink-0"
          />
          <span className="font-mono text-[0.8rem] theme-text-secondary truncate">
            {contribution.org} / <span className="theme-text-primary font-semibold">{contribution.project}</span>
          </span>
        </div>

        <span
          className="text-[0.68rem] font-mono px-2.5 py-0.5 rounded-full shrink-0"
          style={{ background: `${color}18`, border: `1px solid ${color}55`, color }}
        >
          {contribution.status}
        </span>
      </div>

      {/* Title */}
      <h3
        className="text-[1.1rem] font-bold tracking-tight theme-text-primary leading-snug"
        style={{ fontFamily: "'Syne', sans-serif", letterSpacing: "-0.02em" }}
      >
        {contribution.title}
      </h3>

      {/* Description */}
      <p
        className="text-[0.8rem] leading-relaxed font-semibold theme-text-secondary"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {contribution.description}
      </p>

      {/* PR number + merge date, PR link */}
      <div className="flex items-center justify-between gap-3">
        <span className="text-[0.74rem] font-mono theme-text-secondary">
          PR #{contribution.prLink.split("/").pop()}
          {contribution.mergedOn && ` · Merged ${contribution.mergedOn}`}
        </span>
        <span className="text-[0.74rem] font-mono" style={{ color: "var(--link-color)" }}>
          View PR ↗
        </span>
      </div>
    </motion.a>
  )
}

function OpenSource() {
  const [showAll, setShowAll] = useState(false)

  // newest first — new PRs are appended to the bottom of the data file
  const sorted = [...contributions].reverse()
  const visible = showAll ? sorted : sorted.slice(0, INITIAL_COUNT)

  return (
    <div className="flex justify-center page-container min-h-screen">

      <div className="flex flex-col min-h-screen w-full px-4 sm:px-0 sm:w-[80%] md:w-[70%] lg:w-[50%]">

        <Navbar />

        {/* Header */}
        <div className="py-10 px-2 sm:px-8 flex flex-col items-center justify-center gap-4">
          <h1 className="font-main text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold tracking-wide theme-text-primary"> Open Source </h1>
          <p className="max-w-160 text-center font-main text-base sm:text-lg theme-text-secondary font-medium tracking-wide"> Contributions I've made to projects I use and love. </p>
        </div>

        {/* Contributions */}
        <div className="py-8 px-2 sm:px-8 flex flex-col gap-4">
          {contributions.length === 0 ? (
            <p className="text-center font-main theme-text-secondary">First contributions coming soon.</p>
          ) : (
            visible.map((contribution, i) => (
              <Reveal key={contribution.prLink} delay={(i % INITIAL_COUNT) * 0.08}>
                <ContributionCard contribution={contribution} />
              </Reveal>
            ))
          )}

          {sorted.length > INITIAL_COUNT && (
            <div className="flex justify-center pt-4">
              <motion.button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full font-main font-semibold text-sm theme-text-primary cursor-pointer"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              >
                {showAll ? "Show less ↑" : `Show more (${sorted.length - INITIAL_COUNT}) ↓`}
              </motion.button>
            </div>
          )}
        </div>

        {/* Projects I want to contribute to */}
        {targets.length > 0 && (
          <Reveal className="py-8 px-2 sm:px-8 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold font-main tracking-wide theme-text-primary"> Looking to Contribute To </h2>
            <div className="flex flex-wrap gap-3">
              {targets.map((target) => (
                <a
                  key={target.repoLink}
                  href={target.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-lg font-mono text-[0.8rem] theme-text-secondary transition-transform hover:scale-105"
                  style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-color)" }}
                >
                  <img src={`https://github.com/${target.org}.png?size=40`} alt={target.org} className="w-5 h-5 rounded" />
                  {target.project ? (
                    <>{target.org} / <span className="theme-text-primary font-semibold">{target.project}</span></>
                  ) : (
                    <><span className="theme-text-primary font-semibold">{target.org}</span> <span className="opacity-70">· project TBD</span></>
                  )}
                </a>
              ))}
            </div>
          </Reveal>
        )}

        {/* footer */}
        <div>
          <Footer />
        </div>

      </div>

    </div>
  )
}

export default OpenSource
