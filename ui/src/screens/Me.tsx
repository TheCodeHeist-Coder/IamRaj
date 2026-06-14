import { FaAws, FaGitAlt, FaGithub, FaJenkins, FaLinkedin, FaLinux, FaNodeJs, FaReact } from "react-icons/fa"
import Navbar from "../components/Navbar"
import { FaXTwitter } from "react-icons/fa6"
import Skill from "../components/Skill"
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri"
import { SiExpress, SiHono, SiKubernetes, SiMongodb, SiNginx, SiPrisma } from "react-icons/si"
import { BsJavascript, BsTypescript } from "react-icons/bs"
import { BiLogoPostgresql } from "react-icons/bi"
import { GiSatelliteCommunication } from "react-icons/gi"
import { DiPython, DiRedis } from "react-icons/di"

import Footer from "../components/Footer"


function Me() {
    return (
        <div className="flex justify-center page-container min-h-screen">

            <div className="flex flex-col  min-h-screen w-full px-4 sm:px-0 sm:w-[80%] md:w-[70%] lg:w-[50%]">

                <Navbar />

                {/* info section */}
                <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 px-2 py-7 text-center sm:text-left">

                    <div className="shrink-0">
                        <img className="w-36 h-36 sm:w-45 sm:h-45" src="/try.jpeg" alt="" />
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-2 items-center sm:items-start">
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-main tracking-wid font-extrabold theme-text-primary">Raj Kumar </h1>
                        <h4 className="theme-text-tertiary font-main font-medium text-base sm:text-[18px] tracking-wide"> Full Stack Developer & Devops Engg. </h4>

                        <div className="links flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 mt-3 font-main text-base sm:text-lg">
                            <a href="https://github.com/TheCodeHeist-Coder" target="_blank" className="flex gap-2 items-center tracking-wide theme-text-primary transition-all duration-200 hover:opacity-70" > <FaGithub className="w-6 h-6" /> GitHub</a>
                            <a href="https://www.linkedin.com/in/raj-kumar-54225532a/" target="_blank" className="flex gap-2 items-center tracking-wide text-[#51a2ff] transition-all duration-200 hover:text-[#115eb6]"><FaLinkedin className="w-6 h-6" /> LinkedIn</a>
                            <a href="https://x.com/CodeHeistCoder" target="_blank" className="flex gap-2 items-center theme-text-primary transition-all duration-200 hover:opacity-70"> <FaXTwitter className="w-6 h-6" /> Twitter</a>
                        </div>

                    </div>
                </div>


                {/* brief about me */}
                <div className="flex flex-col gap-2 px-2 sm:px-5 py-10">

                    <div>
                        <h1 className="text-[20px] theme-text-primary font-main font-semibold tracking-wide"> Who Am I : </h1>
                    </div>

                    <div className="font-main theme-text-secondary font-medium ">
                        <p className="leading-7 text-base sm:text-[17px]"> just a guy who codes, lifts, and tries to stay consistent. You know that feeling when code finally works the way you imagined? Yeah, I chase that feeling every single day. </p>
                        <p className="leading-7 mt-2 text-base sm:text-[17px]"> I'm basically an engineer with a dangerous habit of starting side projects at 2 AM (sleep is for people without ideas, right?). I love building stuff that makes people ask "how'd you do that?" and honestly, sometimes I wonder too. Hand me a problem and watch my brain speedrun five different solutions before you finish explaining it. </p>
                        <p className="text-center theme-text-secondary text-3xl sm:text-4xl lg:text-5xl mt-5 font-extrabold font-spec tracking-wider"> {"< Full Stack & Devops />"} </p>
                    </div>

                </div>


                {/* Currently learning — infinite marquee */}
                <div className="marquee w-full overflow-hidden py-6 select-none">
                    <div className="marquee-track">
                        {Array.from({ length: 2 }).map((_, group) => (
                            <div key={group} className="flex items-center" aria-hidden={group === 1}>
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <span key={i} className="flex items-center">
                                        <span className="font-spec font-bold theme-text-primary text-3xl sm:text-4xl lg:text-5xl tracking-wider whitespace-nowrap px-6 sm:px-10">
                                            Diving into AI &amp; ML
                                        </span>
                                        <span className="text-[#51a2ff] text-2xl sm:text-3xl">✦</span>
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>


                {/* Work experrience */}
                <div className="px-2 sm:px-8 py-12 flex flex-col  gap-1">

                    <div className="mb-3">
                        <h1 className="text-2xl font-main tracking-wide theme-text-primary font-medium"> Work Experience </h1>
                    </div>

                    <div className="flex flex-col gap-10 sm:gap-12">



                     <a href="https://nextgenautomationtechnologies.com/" target="_blank" className="info flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between hover:border-dashed hover:border hover:rounded-xl  hover:border-gray-500 p-3 ">
                        <div className="flex items-center gap-4">
                            <div className="logo shrink-0">
                                <img className="w-12 h-12" src="nextgen.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-main text-lg sm:text-2xl font-semibold theme-text-primary"> NextGen Automation Technologies </h1>
                                <p className="theme-text-secondary mt-1 font-main font-normal text-base sm:text-[18px]"> Full Stack Developer - Intern   </p>
                            </div>
                        </div>

                        <div className="timeline font-main theme-text-secondary tracking-wider text-sm sm:text-base shrink-0 pl-16 sm:pl-0">
                            May 2026 - Present
                        </div>
                    </a>

                    <a href="https://www.vtlrewa.com/" target="_blank" className="info flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between hover:border-dashed hover:border hover:rounded-xl  hover:border-gray-500 p-3 ">
                        <div className="flex items-center gap-4">
                            <div className="logo shrink-0">
                                <img className="w-12 h-12" src="/vtl.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-main text-lg sm:text-2xl font-semibold theme-text-primary"> Vindhya Telelink Limited </h1>
                                <p className="theme-text-secondary mt-1 font-main font-normal text-base sm:text-[18px]"> Made Inventory Management System - Freelance   </p>
                            </div>
                        </div>

                        <div className="timeline font-main theme-text-secondary tracking-wider text-sm sm:text-base shrink-0 pl-16 sm:pl-0">
                            Feb 2026 - April
                        </div>
                    </a>

                       </div>

                </div>


                {/* Education */}
                <div className="px-2 sm:px-8 py-8 flex flex-col  gap-1">

                    <div className="mb-3">
                        <h1 className="text-2xl font-main tracking-wide theme-text-secondary font-medium"> Education </h1>
                    </div>

                    <a href="https://knit.ac.in/en" target="_blank" className="info flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between hover:border-dashed hover:border hover:rounded-xl  hover:border-gray-500 p-3 ">
                        <div className="flex items-center gap-4">
                            <div className="logo shrink-0">
                                <img className="w-15 h-15" src="/knit.png" alt="" />
                            </div>
                            <div className="flex flex-col">
                                <h1 className="font-main text-lg sm:text-2xl font-semibold theme-text-primary"> Kamla Nehru Institute of Technology, Sultanpur </h1>
                                <p className="theme-text-secondary mt-1 font-main font-normal text-base sm:text-[18px]"> Bachelor's of Technology in Information Technology (I.T)   </p>
                            </div>
                        </div>

                        <div className="timeline font-main theme-text-secondary tracking-wider text-sm sm:text-base shrink-0 pl-19 sm:pl-0">
                            2024 - 2028
                        </div>
                    </a>

                </div>

                {/* Skills and tools */}
                <div className="px-2 sm:px-8 py-14 sm:py-18 flex flex-col gap-3">

                    <div>
                        <h1 className="text-2xl font-semibold font-main tracking-wide theme-text-primary"> Skills & Tools I Use </h1>
                    </div>

                    <div className="flex gap-3 sm:gap-5 flex-wrap ">
                        <Skill icon={<FaReact />} name="React" />
                        <Skill icon={<RiNextjsFill />} name="NextJs" />
                        <Skill icon={<FaNodeJs />} name="NodeJs" />
                        <Skill icon={<SiExpress />} name="ExpressJs" />
                        <Skill icon={<BsJavascript />} name="JavaScript" />
                        <Skill icon={<BsTypescript />} name="TypeScipt" />
                        <Skill icon={<DiPython />} name="Python" />
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
                 <div className="px-2 sm:px-8 ">

                   <Footer />

                 </div>





            </div>




        </div>
    )
}

export default Me