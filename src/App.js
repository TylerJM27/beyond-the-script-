import { Routes, Route } from "react-router-dom";
import { Container, Navbar, NavbarBrand } from "reactstrap";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import WorksPage from "./pages/WorksPage";
import CurtainTransition from "./components/CurtainTransition";
import "./App.css";

function App() {
    return (
        <div className="App">
            <CurtainTransition>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/works" element={<WorksPage />} />
                </Routes>
            </CurtainTransition>
        </div>
    );
}

export default App;
