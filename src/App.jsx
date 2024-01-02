import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Components/Home";
import HomeRu from "./Components/HomeRu";
import { useState } from "react";

function App() {
  const [dropDown, setDropDown] = useState(true)

  function handleDropDown() {
    setDropDown(!dropDown)
    console.log(dropDown);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar handleDropDown={handleDropDown} dropDown={dropDown} />}>
            <Route index element={<Home />} />
            <Route path="ru" element={<HomeRu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
