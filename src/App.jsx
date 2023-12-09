import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home language={true} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
