import { FaGithub, FaLinkedin } from "react-icons/fa"
import Navbar from "../components/Navbar"
import { FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"

function Me() {
    return (
        <div className="flex justify-center bg-[#0F1010] text-white min-h-screen">

            <div className="flex flex-col  min-h-screen  sm:-[80%] md:w-[70%] lg:w-[50%]">

                <Navbar />

                {/* info section */}
                <div className="flex items-center gap-7 px-2 py-7">

                    <div className="">
                        <img className="w-45 h-45" src="/try.jpeg" alt="" />
                    </div>

                    {/* About */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-8xl font-main tracking-wid font-extrabold">Raj Kumar </h1>
                        <h4 className="text-[#8a8a8a] font-main font-medium text-[18px] tracking-wide"> Backend Developer & Devops Engg. </h4>

                        <div className="links flex gap-8 mt-3 font-main text-lg">
                            <a href="https://github.com/TheCodeHeist-Coder" target="_blank" className="flex gap-2 items-center tracking-wide hover:text-gray-400 transition-all duration-200" > <FaGithub className="w-6 h-6" /> GitHub</a>
                            <a href="https://www.linkedin.com/in/raj-kumar-54225532a/" target="_blank" className="flex gap-2 items-center tracking-wide text-[#51a2ff] transition-all duration-200 hover:text-[#115eb6]"><FaLinkedin className="w-6 h-6" /> LinkedIn</a>
                            <a href="https://x.com/CodeHeistCoder" target="_blank" className="flex gap-2 items-center  hover:text-gray-400 transition-all duration-200"> <FaXTwitter className="w-6 h-6" /> Twitter</a>
                        </div>

                    </div>
                </div>
                 

                 {/* brief about me */}
                  <div className="flex flex-col gap-2 px-5 py-10">

                    <div>
                        <h1 className="text-[20px] text-[#ffffff] font-main font-semibold tracking-wide"> Who Am I : </h1> 
                     </div>

                     <div className="font-main text-[#989898] font-medium ">
                        <p className="leading-7 text-[17px]"> just a guy who codes, lifts, and tries to stay consistent. You know that feeling when code finally works the way you imagined? Yeah, I chase that feeling every single day. </p>
                        <p className="leading-7 mt-2 text-[17px]"> I'm basically an engineer with a dangerous habit of starting side projects at 2 AM (sleep is for people without ideas, right?). I love building stuff that makes people ask "how'd you do that?" and honestly, sometimes I wonder too. Hand me a problem and watch my brain speedrun five different solutions before you finish explaining it. </p>
                         <p className="text-center text-gray-300 text-5xl mt-5 font-bold font-spec tracking-wider"> {"< Backend & Devops />"} </p>
                     </div>

                  </div>



                  {/* Work experrience */}
                  <div className="px-8 py-8 flex flex-col  gap-1">

                    <div className="mb-3"> 
                     <h1 className="text-2xl font-main tracking-wide text-gray-100 font-medium"> Work Experience </h1>    
                     </div>

                     <div className="info flex justify-between hover:border-dashed hover:border hover:rounded-xl  hover:border-gray-500 p-3 ">
                               <div className="flex items-center gap-4">
                                    <div className="logo">
                                        <img className="w-12 h-12" src="/vtl.png" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="font-main text-2xl font-semibold"> Vindhya Telelink Limited </h1>
                                        <p className="text-[#a5a5a5] mt-1 font-main font-normal text-[18px]"> Made Inventory Management System - Freelance   </p>
                                    </div>
                               </div>

                               <div className="timeline font-main text-gray-300 tracking-wider ">
                                   Feb 2026 - April
                               </div>
                     </div>

                  </div>


                  {/* Education */}
                    <div className="px-8 py-8 flex flex-col  gap-1">

                    <div className="mb-3"> 
                     <h1 className="text-2xl font-main tracking-wide text-gray-400 font-medium"> Education </h1>    
                     </div>

                     <a href="https://knit.ac.in/en" target="_blank" className="info flex justify-between hover:border-dashed hover:border hover:rounded-xl  hover:border-gray-500 p-3 ">
                               <div className="flex items-center gap-4">
                                    <div className="logo">
                                        <img className="w-15 h-15" src="/knit.png" alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="font-main text-2xl font-semibold"> Kamla Nehru Institute of Technology, Sultanpur </h1>
                                        <p className="text-[#a5a5a5] mt-1 font-main font-normal text-[18px]"> Bachelor's of Technology in Information Technology (I.T)   </p>
                                    </div>
                               </div>

                               <div className="timeline font-main text-gray-300 tracking-wider ">
                                   2024 - 2028
                               </div>
                     </a>

                  </div>






            </div>




        </div>
    )
}

export default Me