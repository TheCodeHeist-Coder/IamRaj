import Navbar from "../components/Navbar"

function Projects() {
  return (
    <div className="flex justify-center bg-[#0F1010] text-white min-h-screen">

        <div className="flex flex-col  min-h-screen  sm:-[80%] md:w-[70%] lg:w-[50%]">
        
        <Navbar />

        {/* Header */}
        <div className="py-10 px-8 flex flex-col items-center justify-center gap-4">
            <h1 className="font-main text-5xl text-center font-extrabold tracking-wide"> Things I've Built </h1>
            <p className="max-w-160 text-center font-main text-lg text-[#a5a5a5] font-medium tracking-wide"> From distributed systems to full-stack applications, each project taught me something new. Take a look around. </p>
        </div>

        

        </div>

    </div>
  )
}

export default Projects