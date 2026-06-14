import { FaGithub, FaLinkedin } from "react-icons/fa"
import DateComponent from "./Date"
import { FaXTwitter } from "react-icons/fa6"
import { GrInstagram } from "react-icons/gr"

function Footer() {
  return (
     <>
    
          <div className="flex items-center justify-between theme-text-primary">

                        <a className="p-4 sm:p-12" href="https://github.com/TheCodeHeist-Coder" target="_blank">  <FaGithub className="w-7 h-7 sm:w-10 sm:h-10" /> </a>

                        <a className="p-4 sm:p-12 " href="https://linkedin.com/in/raj-kumar-54225532a/" target="_blank">  <FaLinkedin className="w-7 h-7 sm:w-10 sm:h-10"/> </a>

                        <a className="p-4 sm:p-12 " href="https://x.com/CodeHeistCoder" target="_blank">  <FaXTwitter className="w-7 h-7 sm:w-10 sm:h-10"/> </a>

                        <a className="p-4 sm:p-12 " href="https://www.instagram.com/raaz_kumar.r/" target="_blank">  <GrInstagram className="w-7 h-7 sm:w-10 sm:h-10"/> </a>
                         </div>
                     <div className="py-10 sm:py-15 px-4 sm:px-12 flex items-center justify-between">
                        
                        <div className="flex gap-1 theme-text-primary">
                            <h3> &copy; </h3>
                            <h2 className="theme-text-secondary"> Rajkumar </h2>
                        </div>

                        <div className="theme-text-primary">
                          <DateComponent />
                        </div>


                        </div>    
   </>
  )
}

export default Footer