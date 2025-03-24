import NavbarBS from "./components/navbarBS";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App">
      <NavbarBS />
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
