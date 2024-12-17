import { useState } from "react";
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { NavLink } from 'react-router-dom';



const NavbarToggle = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container className='navbar-container'sticky='top' style={{padding: '0'}}> 
        <Navbar className='navbar-toggle'>
            <NavbarBrand className='ms-5' href='/'>
            </NavbarBrand>
            <NavbarToggler onClick = {() => setMenuOpen(!menuOpen)}>
                <span className='fa fa-bars' style={{color: "white"}}></span>
            </NavbarToggler>
            <Collapse isOpen = {menuOpen} navbar className='custom-collapse'>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>  
                            <i className="fa fa-home fa-lg" /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>  
                            <i className="fa fa-info fa-lg" /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>  
                            <i className="fa fa-address-card fa-lg" /> Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/projects'>  
                            <i className="fa fa-list fa-lg" /> Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/works'>  
                            <i className="fa fa-home fa-lg" /> Works
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </Container>
    )
}

export default NavbarToggle;