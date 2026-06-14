import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import PostsPage from "../components/Post"

function Posts() {
  return (
    <div className="flex justify-center page-container min-h-screen">

        <div className="flex flex-col  min-h-screen w-full px-4 sm:px-0 sm:w-[80%] md:w-[70%] lg:w-[50%]">

            <Navbar />

            {/* Header section */}
             <div className="py-10 px-2 sm:px-8 flex flex-col items-center justify-center gap-4">
            <h1 className="font-main text-3xl sm:text-4xl lg:text-5xl text-center font-extrabold tracking-wide theme-text-primary"> Experinces Worth Sharing </h1>
            <p className="max-w-188 text-center font-main text-base sm:text-lg theme-text-secondary font-medium tracking-wide">Writing helps me think. These posts are less about showing off and more about documenting what I've faced during building. I know beginners and juniors where faced some problems. maybe you'll find something useful too.</p>
        </div>


            <div className="py-3  ">
                <PostsPage />
            </div>


            <div>
                <Footer />
            </div>

        </div>


    </div>
  )
}

export default Posts