import React from "react";
import "./Navbar.css";
import { Navbar, Nav, Container, Modal, Tab, NavbarBrand, NavLink } from 'react-bootstrap';
import {
    AiFillHome,
} from "react-icons/ai";
import {
    BiMessageSquareAdd
} from "react-icons/bi"
import {
    FcLike
} from "react-icons/fc"

function NavBar() {
    return (
<Navbar className="sidebar">
    <NavbarBrand className="nav-logo">
       <p>The Townies</p>
    </NavbarBrand>
    <Nav>
        <Nav.Item>
            <NavLink to="/home">
             <AiFillHome />   Home
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
                Search
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
            <FcLike />  Likes
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
             <BiMessageSquareAdd />   Create Post
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
              Profile
            </NavLink>
        </Nav.Item>

        <Nav.Item>
            <NavLink>
                <p className="">Logout</p>
            </NavLink>
        </Nav.Item>
    </Nav>
</Navbar>
    );
}

export default NavBar;