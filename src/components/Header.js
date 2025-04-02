import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Navbar light sticky="top" expand="md">
                <div className=" d-flex align-items-center w-100">
                    <Nav
                        className="g-5 me-auto d-none d-md-flex align-items-center "
                        navbar
                    >
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5 me-xl-5">
                            <NavLink className="nav-link" to="/">
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5">
                            <NavLink className="nav-link" to="/works">
                                Works
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5">
                            <NavLink className="nav-link" to="/projects">
                                Projects
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <NavbarBrand
                        href="/"
                        className="mx-auto mx-lg-0 mx-xl-0 mx-xxl-0 text-center"
                    >
                        <h2
                            style={{
                                fontFamily: "Italiana",
                                fontSize: "calc(1rem + 2vw)",
                            }}
                        >
                            JENNI GREENMILLER
                        </h2>
                    </NavbarBrand>

                    <Nav
                        className="ms-auto d-none d-md-flex align-items-center"
                        navbar
                    >
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5 ms-xl-5">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="d-md-none w-100 " navbar>
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
        </>
    );
};

export default Header;
