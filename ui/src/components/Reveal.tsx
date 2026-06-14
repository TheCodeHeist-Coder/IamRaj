import { motion } from "framer-motion"
import type { ReactNode } from "react"

/**
 * Wraps content so it fades + slides into view as the user scrolls to it.
 * Keeps the page feeling alive without changing any of the inner styling.
 */
function Reveal({
    children,
    className,
    delay = 0,
}: {
    children: ReactNode
    className?: string
    delay?: number
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

export default Reveal
