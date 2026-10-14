import { NavLink } from "react-router-dom"
import NightModeIcon from "../svgs/NightModeIcon"
import SunIcon from "../svgs/SunIcon"
import { useTheme } from "../context/ThemeContext"

const LINKS = [
    { to: "/", label: "Me" },
    { to: "/work", label: "Work" },
    { to: "/posts", label: "Posts" },
    { to: "/open-source", label: "Open Source" },
]

function Navbar() {
    const { isDark, toggleTheme } = useTheme()

    return (
        <>
            {/* spacer so page content starts below the fixed navbar */}
            <div className="h-24 sm:h-28" />

            <nav
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100%-2rem)] flex items-center gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 rounded-full font-main backdrop-blur-md shadow-lg"
                style={{
                    backgroundColor: "color-mix(in srgb, var(--bg-secondary) 80%, transparent)",
                    border: "1px solid var(--border-color)",
                }}
            >

                {/* links */}
                <div className="flex gap-3 sm:gap-5 items-center font-semibold tracking-wide text-sm sm:text-base">
                    {LINKS.map((link, i) => (
                        <div key={link.to} className="flex items-center gap-3 sm:gap-5">
                            {i > 0 && <div className="bg-gray-600 h-4 w-px"></div>}
                            <NavLink
                                to={link.to}
                                end
                                className={({ isActive }) =>
                                    `whitespace-nowrap transition-colors ${isActive ? "theme-text-primary" : "theme-text-secondary hover:opacity-80"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-600 h-5 w-px"></div>

                {/* theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="cursor-pointer text-current flex items-center [&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-6 sm:[&_svg]:h-6 transition-transform duration-300 hover:scale-110"
                    aria-label="Toggle dark mode"
                >
                    {isDark ? <SunIcon /> : <NightModeIcon />}
                </button>

            </nav>
        </>
    )
}

export default Navbar
