import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { FaFileDownload, FaTimes } from "react-icons/fa"

/**
 * Full-screen modal that previews the resume PDF in an embedded viewer.
 * Shows a Download button in the header so visitors can view first, then save.
 * Closes on backdrop click, the X button, or the Escape key.
 */
function ResumeModal({
    open,
    onClose,
    fileUrl,
    fileName = "Rajkumar-Resume.pdf",
}: {
    open: boolean
    onClose: () => void
    fileUrl: string
    fileName?: string
}) {
    // Close on Escape + lock body scroll while the modal is open.
    useEffect(() => {
        if (!open) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", onKeyDown)

        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = prevOverflow
        }
    }, [open, onClose])

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="resume-modal relative flex flex-col w-full max-w-3xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", stiffness: 260, damping: 24 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header with title + actions */}
                        <div className="resume-modal-header flex items-center justify-between gap-3 px-4 sm:px-5 py-3 border-b">
                            <h2 className="font-main font-semibold theme-text-primary text-base sm:text-lg">
                                Resume
                            </h2>

                            <div className="flex items-center gap-2 sm:gap-3">
                                <a
                                    href={fileUrl}
                                    download={fileName}
                                    className="flex gap-2 items-center tracking-wide text-white bg-[#51a2ff] rounded-lg px-3 sm:px-4 py-1.5 text-sm sm:text-base transition-all duration-200 hover:bg-[#115eb6]"
                                >
                                    <FaFileDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Download
                                </a>

                                <button
                                    onClick={onClose}
                                    aria-label="Close resume preview"
                                    className="resume-modal-close flex items-center justify-center theme-text-secondary rounded-lg w-9 h-9 transition-all duration-200"
                                >
                                    <FaTimes className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF preview */}
                        <iframe
                            src={`${fileUrl}#toolbar=0&view=FitH`}
                            title="Resume preview"
                            className="resume-modal-frame flex-1 w-full"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ResumeModal
