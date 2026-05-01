import { BrowserRouter, Routes, Route } from "react-router-dom";
import Me from "./screens/Me";



function App() {

  return (
    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Me />} />

    </Routes>
    </BrowserRouter>
  )
  
}

export default App
