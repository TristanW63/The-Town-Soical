import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Container, Modal, Tab, NavbarBrand, NavLink } from 'react-bootstrap';


function NavBar() {
    return (
<Navbar className="sidebar">
    <NavbarBrand>
        The Townies
    </NavbarBrand>
    <Nav>
        <Nav.Item>
            <NavLink>
                Home
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
                Search
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
                Profile
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
                Create Post
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
                Likes
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
                Logout
            </NavLink>
        </Nav.Item>
    </Nav>
</Navbar>
    );
}

export default NavBar;