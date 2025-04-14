import NavbarBS from "./components/navbarBS";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Realisations from "./pages/Realisations";
import "./App.css";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Mentions from "./pages/Mentions";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <NavbarBS />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Realisations" element={<Realisations />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Mentions" element={<Mentions />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
