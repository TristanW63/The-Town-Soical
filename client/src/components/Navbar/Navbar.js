import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Container, Modal, Tab, NavbarBrand } from 'react-bootstrap';


function NavBar() {
    return (
<Navbar className="sidebar">
    <NavbarBrand>
        The Townies
    </NavbarBrand>
    
</Navbar>
    );
}

export default NavBar;