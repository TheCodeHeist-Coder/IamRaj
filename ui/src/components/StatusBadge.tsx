import { useState } from "react"

/**
 * GitHub-style status badge: shows just the emoji, and slides open to reveal
 * the status text on hover (tap on touch screens).
 */
function StatusBadge({ className = "" }: { className?: string }) {
    const [open, setOpen] = useState(false)

    return (
        <button
            type="button"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onClick={() => setOpen((o) => !o)}
            aria-label="Status: Never Play Safe"
            className={`absolute z-10 flex items-center h-9 px-2 rounded-full text-sm font-main font-medium theme-text-primary shadow-lg cursor-pointer ${className}`}
            style={{ backgroundColor: "var(--bg-primary)", border: "1px solid var(--border-color)" }}
        >
            <span className="text-base leading-none">🔥</span>
            <span
                className="overflow-hidden whitespace-nowrap transition-all duration-300 ease-out"
                style={{
                    maxWidth: open ? "9rem" : "0",
                    opacity: open ? 1 : 0,
                    marginInline: open ? "0.3rem" : "0",
                }}
            >
                Never Play Safe
            </span>
        </button>
    )
}

export default StatusBadge
