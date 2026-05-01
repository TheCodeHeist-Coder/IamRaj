import Navbar from "../components/Navbar"
import PostsPage from "../components/Post"

function Posts() {
  return (
    <div className="flex justify-center bg-[#0F1010] text-white min-h-screen">

        <div className="flex flex-col  min-h-screen  sm:-[80%] md:w-[70%] lg:w-[50%]">

            <Navbar />


            <div className="py-12  ">
                <PostsPage />
            </div>

        </div>


    </div>
  )
}

export default Posts