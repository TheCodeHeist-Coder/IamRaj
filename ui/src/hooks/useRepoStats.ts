import { useEffect, useState } from "react"

export type RepoStats = {
  stars: number
  forks: number
  commits: number
}

const CACHE_TTL = 10 * 60 * 1000 // 10 min — GitHub allows only 60 unauthenticated requests/hour

function parseRepo(url: string) {
  const match = url.match(/github\.com\/([^/]+)\/([^/#?]+)/)
  return match ? `${match[1]}/${match[2].replace(/\.git$/, "")}` : null
}

function readCache(repo: string): RepoStats | null {
  try {
    const raw = sessionStorage.getItem(`repo-stats:${repo}`)
    if (!raw) return null
    const { at, stats } = JSON.parse(raw)
    return Date.now() - at < CACHE_TTL ? stats : null
  } catch {
    return null
  }
}

function writeCache(repo: string, stats: RepoStats) {
  try {
    sessionStorage.setItem(`repo-stats:${repo}`, JSON.stringify({ at: Date.now(), stats }))
  } catch {
    // storage unavailable — just skip caching
  }
}

async function fetchStats(repo: string): Promise<RepoStats> {
  const [repoRes, commitsRes] = await Promise.all([
    fetch(`https://api.github.com/repos/${repo}`),
    fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`),
  ])
  if (!repoRes.ok || !commitsRes.ok) throw new Error("GitHub API request failed")

  const data = await repoRes.json()

  // With per_page=1 the page number of the "last" link equals the commit count
  const link = commitsRes.headers.get("link") ?? ""
  const last = link.match(/[?&]page=(\d+)>; rel="last"/)
  const commits = last ? Number(last[1]) : (await commitsRes.json()).length

  return { stars: data.stargazers_count, forks: data.forks_count, commits }
}

/** Live stars / forks / commit count for a GitHub repo URL. Returns null while loading or on failure. */
export function useRepoStats(githubUrl: string) {
  const repo = parseRepo(githubUrl)
  const [stats, setStats] = useState<RepoStats | null>(() => (repo ? readCache(repo) : null))

  useEffect(() => {
    if (!repo || readCache(repo)) return
    let cancelled = false
    fetchStats(repo)
      .then((s) => {
        writeCache(repo, s)
        if (!cancelled) setStats(s)
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [repo])

  return stats
}
