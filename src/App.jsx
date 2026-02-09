// ROTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ICONS
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

// CSS
import "./App.css";

// COMPONENTS
import Navbar from "./components/Navbar";

// PAGES
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <div className="homeContainer">
                <div className="homeContent">
                  <h1>Lucas mdl</h1>
                  <p>Desenvolvedor full-stack</p>
                </div>

                <div className="iconsHome">
                  <a
                    href="https://github.com/Lucasmdl21"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub className="iconOne" size={28} color="#fff" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/lucas-da-luz-462a3b378"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="iconTwo" size={28} color="#fff" />
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="iconThree" size={28} color="#fff" />
                  </a>

                  <a
                    href="https://www.tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <FaTiktok className="iconFour" size={28} color="#fff" />
                  </a>

                  <a
                    href="https://youtube.com/@tentandocodar-b4w?si=nft4fZBfC2XzRR8l"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="iconFive" size={28} color="#fff" />
                  </a>
                </div>
              </div>
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
