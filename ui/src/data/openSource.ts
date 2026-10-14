// ── Open source data ────────────────────────────────────────────────────────
// Add a new object to `contributions` whenever a PR of yours gets merged.
// `org` must be the GitHub org/user handle — its avatar is loaded from
// https://github.com/<org>.png automatically.

export type Contribution = {
  title: string
  description: string
  org: string
  project: string
  prLink: string
  status: "Merged" | "Open"
  mergedOn?: string
}

export type Target = {
  org: string
  project?: string // leave out if you haven't picked a project yet
  repoLink: string
}

export const contributions: Contribution[] = [
  {
    title: "Fix startup with command-line flags",
    description:
      "Fixed a 7-month-old regression where starting the server with command-line flags always failed config validation. Added a subprocess regression test that runs the real binary.",
    org: "OneBusAway",
    project: "maglev",
    prLink: "https://github.com/OneBusAway/maglev/pull/1532",
    status: "Merged",
    mergedOn: "Oct 6, 2026",
  },
  {
    title: "Fix real-time tracking of vehicles that have no ID",
    description:
      "Found and fixed a bug where buses identified only by a label overwrote each other in the GTFS-Realtime feed, making buses vanish or appear twice. Introduced a source-aware vehicle key and deterministic regression tests.",
    org: "OneBusAway",
    project: "maglev",
    prLink: "https://github.com/OneBusAway/maglev/pull/1538",
    status: "Merged",
    mergedOn: "Oct 7, 2026",
  },
  {
    title: "Add protected API keys to command-line startup",
    description:
      "Enabled flag-only production deployments by adding a -protected-api-keys flag and environment-variable support, with clear precedence rules. Unified key parsing across both startup paths, with full test coverage.",
    org: "OneBusAway",
    project: "maglev",
    prLink: "https://github.com/OneBusAway/maglev/pull/1539",
    status: "Merged",
    mergedOn: "Oct 8, 2026",
  },
]

// Orgs / projects you're aiming to contribute to next
export const targets: Target[] = [
  { org: "OneBusAway", project: "maglev", repoLink: "https://github.com/OneBusAway/maglev" },
  { org: "kubernetes", repoLink: "https://github.com/kubernetes" },
]
