import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from "reactstrap";
import { useCurtain } from "../features/CurtainContext";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { triggerCurtainTransition } = useCurtain();

    const handleNav = (e, path) => {
        e.preventDefault();
        triggerCurtainTransition(path);
    };

    return (
        <>
            <Navbar light sticky="top" expand="md">
                <div className="d-flex align-items-center w-100">
                    <Nav
                        className="g-5 me-auto d-none d-md-flex align-items-center"
                        navbar
                    >
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5 me-xl-5">
                            <a
                                className="nav-link"
                                href="/"
                                onClick={(e) => handleNav(e, "/")}
                            >
                                Home
                            </a>
                        </NavItem>
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5">
                            <a
                                className="nav-link"
                                href="/works"
                                onClick={(e) => handleNav(e, "/works")}
                            >
                                Works
                            </a>
                        </NavItem>
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5">
                            <a
                                className="nav-link"
                                href="/projects"
                                onClick={(e) => handleNav(e, "/projects")}
                            >
                                Projects
                            </a>
                        </NavItem>
                    </Nav>

                    <NavbarBrand
                        href="/"
                        onClick={(e) => handleNav(e, "/")}
                        className="mx-auto mx-lg-0 text-center"
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
                            <a
                                className="nav-link"
                                href="/about"
                                onClick={(e) => handleNav(e, "/about")}
                            >
                                About
                            </a>
                        </NavItem>
                        <NavItem className="mx-md-2 mx-lg-4 mx-xl-5 ms-xl-5">
                            <a
                                className="nav-link"
                                href="/contact"
                                onClick={(e) => handleNav(e, "/contact")}
                            >
                                Contact
                            </a>
                        </NavItem>
                    </Nav>
                </div>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar>
                    <Nav className="d-md-none w-100" navbar>
                        {[
                            { label: "Home", path: "/" },
                            { label: "Works", path: "/works" },
                            { label: "Projects", path: "/projects" },
                            { label: "About", path: "/about" },
                            { label: "Contact", path: "/contact" },
                        ].map(({ label, path }) => (
                            <NavItem key={path}>
                                <a
                                    className="nav-link"
                                    href={path}
                                    onClick={(e) => handleNav(e, path)}
                                >
                                    {label}
                                </a>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
};

export default Header;
