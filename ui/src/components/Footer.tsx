import { FaGithub, FaLinkedin } from "react-icons/fa"
import DateComponent from "./Date"
import { FaXTwitter } from "react-icons/fa6"
import { GrInstagram } from "react-icons/gr"

function Footer() {
  return (
     <>
    
          <div className="flex items-center justify-between "> 
                        
                        <a className="h-12 p-12" href="https://github.com/TheCodeHeist-Coder" target="_blank">  <FaGithub className="w-10 h-10" /> </a>

                        <a className="h-12 p-12 " href="https://linkedin.com/in/raj-kumar-54225532a/" target="_blank">  <FaLinkedin className="w-10 h-10"/> </a>

                        <a className="h-12 p-12 " href="https://x.com/CodeHeistCoder" target="_blank">  <FaXTwitter className="w-10 h-10"/> </a>

                        <a className="h-12 p-12 " href="https://www.instagram.com/raaz_kumar.r/" target="_blank">  <GrInstagram className="w-10 h-10"/> </a>
                         </div>
                     <div className="py-15 px-12 flex items-center justify-between">
                        
                        <div className="flex gap-1">
                            <h3> &copy; </h3>
                            <h2 className="text-gray-200"> Rajkumar </h2>
                        </div>

                        <div>
                          <DateComponent />
                        </div>


                        </div>    
   </>
  )
}

export default Footer