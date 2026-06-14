import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProjectGrid from "../components/ProjectCard"

function Projects() {
  return (
    <div className="flex justify-center page-container min-h-screen">

        <div className="flex flex-col  min-h-screen w-full px-4 sm:px-0 sm:w-[80%] md:w-[70%] lg:w-[50%]">

        <Navbar />

        {/* Header */}
        <div className="py-10 px-2 sm:px-8 flex flex-col items-center justify-center gap-4">
            <h1 className="font-main text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold tracking-wide theme-text-primary"> Things I've Built </h1>
            <p className="max-w-160 text-center font-main text-base sm:text-lg theme-text-secondary font-medium tracking-wide"> From distributed systems to full-stack applications, each project taught me something new. Take a look around. </p>
        </div>



       {/* Projects secion */}
        <div className="py-12 px-2 sm:px-8">
            <ProjectGrid />
        </div>


        {/* footer */}

        <div>
            <Footer />
        </div>

        </div>

    </div>
  )
}

export default Projects