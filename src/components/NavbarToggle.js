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
import { NavLink } from "react-router-dom";

const NavbarToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/works">
                                Works
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/projects">
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
};

export default NavbarToggle;
