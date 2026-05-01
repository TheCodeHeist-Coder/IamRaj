import { BrowserRouter, Routes, Route } from "react-router-dom";
import Me from "./screens/Me";
import Projects from "./screens/Projects";

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Me />} />
        <Route path="/work" element={<Projects />} />

      </Routes>

    </BrowserRouter>
  )

}

export default App
