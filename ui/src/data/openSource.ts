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
  {
    title: "Keep the live vehicle as a trip's vehicle",
    description:
      "Fixed a bug where a bus that dropped out of the real-time feed kept appearing on its trip for up to 15 minutes after another bus took over. Reworked the fix after maintainer review to address the root cause, verified across three timestamp scenarios.",
    org: "OneBusAway",
    project: "maglev",
    prLink: "https://github.com/OneBusAway/maglev/pull/1587",
    status: "Merged",
    mergedOn: "Oct 14, 2026",
  },
  {
    title: "Keep stop-specific alerts off unrelated trips",
    description:
      "Fixed a bug in the transit API where stop-specific service alerts appeared on every trip in the agency. Scoped GTFS-Realtime alerts correctly so riders only see alerts for the stops they affect.",
    org: "OneBusAway",
    project: "maglev",
    prLink: "https://github.com/OneBusAway/maglev/pull/1624",
    status: "Merged",
    mergedOn: "Oct 21, 2026",
  },
  {
    title: "Return routes when centered on a stop",
    description:
      "Fixed the routes-for-location API returning an empty list when searching at a stop's exact coordinates — floating-point rounding pushed acos just above 1, so SQLite returned NULL and the error was swallowed. Clamped the input to [-1, 1], added a regression test that queries every stop in the feed, and verified results against the production Java server.",
    org: "OneBusAway",
    project: "maglev",
    prLink: "https://github.com/OneBusAway/maglev/pull/1652",
    status: "Merged",
    mergedOn: "Oct 22, 2026",
  },
]

// Orgs / projects you're aiming to contribute to next
export const targets: Target[] = [
  { org: "OneBusAway", project: "maglev", repoLink: "https://github.com/OneBusAway/maglev" },
  { org: "kubernetes", repoLink: "https://github.com/kubernetes" },
]
