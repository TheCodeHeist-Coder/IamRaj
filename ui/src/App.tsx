import { BrowserRouter, Routes, Route } from "react-router-dom";
import Me from "./screens/Me";
import Projects from "./screens/Projects";
import Posts from "./screens/Posts";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Me />} />
        <Route path="/work" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />

      </Routes>

    </BrowserRouter>
  )

}

export default App
