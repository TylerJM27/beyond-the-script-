import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
} from "reactstrap";
import { useCurtain } from "../features/CurtainContext";

const NavbarToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { triggerCurtainTransition } = useCurtain();

    const handleNavClick = (e, path) => {
        e.preventDefault();
        setMenuOpen(false);
        triggerCurtainTransition(path);
    };

    return (
        <Container className="navbar-container" style={{ padding: "0" }}>
            <Navbar dark className="navbar-toggle">
                <NavbarBrand className="ms-5" href="/"></NavbarBrand>
                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}>
                    <span
                        className="fa fa-bars"
                        style={{ color: "white" }}
                    ></span>
                </NavbarToggler>
                <Collapse isOpen={menuOpen} navbar className="custom-collapse">
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <a
                                className="nav-link"
                                href="/"
                                onClick={(e) => handleNavClick(e, "/")}
                            >
                                Home
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                className="nav-link"
                                href="/works"
                                onClick={(e) => handleNavClick(e, "/works")}
                            >
                                Works
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                className="nav-link"
                                href="/projects"
                                onClick={(e) => handleNavClick(e, "/projects")}
                            >
                                Projects
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                className="nav-link"
                                href="/about"
                                onClick={(e) => handleNavClick(e, "/about")}
                            >
                                About
                            </a>
                        </NavItem>
                        <NavItem>
                            <a
                                className="nav-link"
                                href="/contact"
                                onClick={(e) => handleNavClick(e, "/contact")}
                            >
                                Contact
                            </a>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default NavbarToggle;
