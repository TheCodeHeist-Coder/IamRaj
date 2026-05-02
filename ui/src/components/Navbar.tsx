import { Link } from "react-router-dom"
import NightModeIcon from "../svgs/NightModeIcon"
import SunIcon from "../svgs/SunIcon"
import { useTheme } from "../context/ThemeContext"

function Navbar() {
    const { isDark, toggleTheme } = useTheme()

    return (
        <div className="py-10 w-full flex items-center font-main">

            <div className="flex justify-between w-full">

                {/* left side links */}
                <div className="flex gap-6 items-center font-semibold tracking-widest">
                    <Link to={"/"}>Me</Link>
                    <div className=" bg-gray-600 h-5 w-px "></div>
                    <Link to={"/work"}>Work</Link>
                    <div className=" bg-gray-600 h-5 w-px "></div>
                    <Link to={"/posts"}>Posts</Link>

                </div>

                {/* right side links */}
                <div className="">
                    <button 
                        onClick={toggleTheme}
                        className="cursor-pointer text-current transition-transform duration-300 hover:scale-110"
                        aria-label="Toggle dark mode"
                    > 
                        {isDark ? <SunIcon /> : <NightModeIcon />}
                    </button>
                </div>


            </div>


        </div>
    )
}

export default Navbar



