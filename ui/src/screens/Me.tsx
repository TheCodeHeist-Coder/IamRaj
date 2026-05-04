import { FaAws, FaGitAlt, FaGithub, FaJenkins, FaLinkedin, FaLinux, FaNodeJs, FaReact } from "react-icons/fa"
import Navbar from "../components/Navbar"
import { FaXTwitter } from "react-icons/fa6"
import Skill from "../components/Skill"
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri"
import { SiExpress, SiHono, SiKubernetes, SiMongodb, SiNginx, SiPrisma } from "react-icons/si"
import { BsJavascript, BsTypescript } from "react-icons/bs"
import { BiLogoPostgresql } from "react-icons/bi"
import { GiSatelliteCommunication } from "react-icons/gi"
import { DiRedis } from "react-icons/di"

import Footer from "../components/Footer"


function Me() {
    return (
        <div className="flex justify-center page-container min-h-screen">

            <div className="flex flex-col  min-h-screen  sm:-[80%] md:w-[70%] lg:w-[50%]">

                <Navbar />

                {/* info section */}
                <div className="flex items-center gap-7 px-2 py-7">

                    <div className="">
                        <img className="w-45 h-45" src="/try.jpeg" alt="" />
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-8xl font-main tracking-wid font-extrabold theme-text-primary">Raj Kumar </h1>
                        <h4 className="theme-text-tertiary font-main font-medium text-[18px] tracking-wide"> Backend Developer & Devops Engg. </h4>

                        <div className="links flex gap-8 mt-3 font-main text-lg">
                            <a href="https://github.com/TheCodeHeist-Coder" target="_blank" className="flex gap-2 items-center tracking-wide theme-text-primary transition-all duration-200 hover:opacity-70" > <FaGithub className="w-6 h-6" /> GitHub</a>
                            <a href="https://www.linkedin.com/in/raj-kumar-54225532a/" target="_blank" className="flex gap-2 items-center tracking-wide text-[#51a2ff] transition-all duration-200 hover:text-[#115eb6]"><FaLinkedin className="w-6 h-6" /> LinkedIn</a>
                            <a href="https://x.com/CodeHeistCoder" target="_blank" className="flex gap-2 items-center theme-text-primary transition-all duration-200 hover:opacity-70"> <FaXTwitter className="w-6 h-6" /> Twitter</a>
                        </div>

                    </div>
                </div>


                {/* brief about me */}
                <div className="flex flex-col gap-2 px-5 py-10">

                    <div>
                        <h1 className="text-[20px] theme-text-primary font-main font-semibold tracking-wide"> Who Am I : </h1>
                    </div>

                    <div className="font-main theme-text-secondary font-medium ">
                        <p className="leading-7 text-[17px]"> just a guy who codes, lifts, and tries to stay consistent. You know that feeling when code finally works the way you imagined? Yeah, I chase that feeling every single day. </p>
                        <p className="leading-7 mt-2 text-[17px]"> I'm basically an engineer with a dangerous habit of starting side projects at 2 AM (sleep is for people without ideas, right?). I love building stuff that makes people ask "how'd you do that?" and honestly, sometimes I wonder too. Hand me a problem and watch my brain speedrun five different solutions before you finish explaining it. </p>
                        <p className="text-center theme-text-secondary text-5xl mt-5 font-bold font-spec tracking-wider"> {"< Backend & Devops />"} </p>
                    </div>

                </div>



                {/* Work experrience */}
                <div className="px-8 py-12 flex flex-col  gap-1">

                    <div className="mb-3">
                        <h1 className="text-2xl font-main tracking-wide theme-text-primary font-medium"> Work Experience </h1>
                    </div>

                    <a href="https://www.vtlrewa.com/" target="_blank" className="info flex justify-between hover:border-dashed hover:border hover:rounded-xl  hover:border-gray-500 p-3 ">
                        <div className="flex items-center gap-4">
                            <div className="logo">
                                <img className="w-12 h-12" src="/vtl.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-main text-2xl font-semibold theme-text-primary"> Vindhya Telelink Limited </h1>
                                <p className="theme-text-secondary mt-1 font-main font-normal text-[18px]"> Made Inventory Management System - Freelance   </p>
                            </div>
                        </div>

                        <div className="timeline font-main theme-text-secondary tracking-wider ">
                            Feb 2026 - April
                        </div>
                    </a>

                </div>


                {/* Education */}
                <div className="px-8 py-8 flex flex-col  gap-1">

                    <div className="mb-3">
                        <h1 className="text-2xl font-main tracking-wide theme-text-secondary font-medium"> Education </h1>
                    </div>

                    <a href="https://knit.ac.in/en" target="_blank" className="info flex justify-between hover:border-dashed hover:border hover:rounded-xl  hover:border-gray-500 p-3 ">
                        <div className="flex items-center gap-4">
                            <div className="logo">
                                <img className="w-15 h-15" src="/knit.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-main text-2xl font-semibold theme-text-primary"> Kamla Nehru Institute of Technology, Sultanpur </h1>
                                <p className="theme-text-secondary mt-1 font-main font-normal text-[18px]"> Bachelor's of Technology in Information Technology (I.T)   </p>
                            </div>
                        </div>

                        <div className="timeline font-main theme-text-secondary tracking-wider ">
                            2024 - 2028
                        </div>
                    </a>

                </div>

                {/* Skills and tools */}
                <div className="px-8 py-18 flex flex-col gap-3">

                    <div>
                        <h1 className="text-2xl font-semibold font-main tracking-wide theme-text-primary"> Skills & Tools I Use </h1>
                    </div>

                    <div className="flex gap-5 flex-wrap ">
                        <Skill icon={<FaReact />} name="React" />
                        <Skill icon={<RiNextjsFill />} name="NextJs" />
                        <Skill icon={<FaNodeJs />} name="NodeJs" />
                        <Skill icon={<SiExpress />} name="ExpressJs" />
                        <Skill icon={<BsJavascript />} name="JavaScript" />
                        <Skill icon={<BsTypescript />} name="TypeScipt" />
                        <Skill icon={<SiMongodb />} name="MongoDB" />
                        <Skill icon={<BiLogoPostgresql />} name="PostgreSQL" />
                        <Skill icon={<SiPrisma />} name="Prisma" />
                        <Skill icon={<RiTailwindCssLine />} name="TailwindCss" />
                        <Skill icon={<SiHono />} name="Hono" />
                        <Skill icon={<GiSatelliteCommunication />} name="Real-time-communication" />
                        <Skill icon={<DiRedis />} name="Redis" />
                        <Skill icon={<SiNginx />} name="Nginx" />
                        <Skill icon={<FaAws />} name="AWS" />
                        <Skill icon={<FaJenkins />} name="Jenkins" />
                        <Skill icon={<FaGitAlt />} name="Git & Github" />
                        <Skill icon={<SiKubernetes />} name="Kubernetes" />
                        <Skill icon={<FaLinux />} name="Linux" />
                    </div>



                </div>




                {/* bottom */}
                 <div className="px-8 ">
                   
                   <Footer />

                 </div>





            </div>




        </div>
    )
}

export default Me