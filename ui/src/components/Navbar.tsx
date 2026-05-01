import { Link } from "react-router-dom"
import NightModeIcon from "../svgs/NightModeIcon"

function Navbar() {
    return (
        <div className="py-10 w-full flex items-center">

            <div className="flex justify-between w-full">

                {/* left side links */}
                <div className="flex gap-6 items-center font-semibold tracking-wider">
                    <Link to={"/"}>Me</Link>
                    <div className=" bg-gray-600 h-5 w-px "></div>
                    <Link to={"/work"}>Work</Link>
                    <div className=" bg-gray-600 h-5 w-px "></div>
                    <Link to={"/posts"}>Posts</Link>

                </div>

                {/* right side links */}
                <div className="">
                    <button className=" cursor-pointer"> <NightModeIcon /> </button>
                </div>


            </div>


        </div>
    )
}

export default Navbar



