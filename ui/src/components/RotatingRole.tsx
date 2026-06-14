import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ROLES = [
    "Full Stack Developer",
    "DevOps Engineer",
    "AI / ML Explorer",
]

/**
 * Typewriter effect that cycles through roles — types a role, pauses,
 * deletes it, then moves to the next one. Adds instant engagement on load.
 */
function RotatingRole() {
    const [index, setIndex] = useState(0)
    const [text, setText] = useState("")
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = ROLES[index]
        let timeout: ReturnType<typeof setTimeout>

        if (!deleting && text === current) {
            // finished typing -> hold, then start deleting
            timeout = setTimeout(() => setDeleting(true), 1500)
        } else if (deleting && text === "") {
            // finished deleting -> move to next role
            setDeleting(false)
            setIndex((i) => (i + 1) % ROLES.length)
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        current.slice(0, deleting ? text.length - 1 : text.length + 1)
                    )
                },
                deleting ? 45 : 85
            )
        }

        return () => clearTimeout(timeout)
    }, [text, deleting, index])

    return (
        <h4 className="theme-text-tertiary font-main font-medium text-[22px] sm:text-[22px] tracking-wide min-h-[1.6em] flex items-center gap-0.5">
            <span>{text}</span>
            <motion.span
                aria-hidden
                className="inline-block w-[2px] h-[1.1em] bg-[#51a2ff]"
                animate={{ opacity: [1, 1, 0, 0] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </h4>
    )
}

export default RotatingRole
