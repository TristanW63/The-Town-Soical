import React from "react";
import "./Navbar.css";
import { Navbar, Nav, NavbarBrand, NavLink } from 'react-bootstrap';
import {
    AiFillHome,
    AiOutlineSearch,
} from "react-icons/ai";
import {
    BiMessageSquareAdd,
    BiLogOut
} from "react-icons/bi";
import { CgProfile} from "react-icons/cg";
import {FcLike} from "react-icons/fc";
import Login from "../Login/Reg/Login";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

function NavBar() {
    return (
<Navbar className="sidebar">
    <NavbarBrand className="nav-logo">
       <p>The Townies</p>
    </NavbarBrand>
    <Nav>
        <Nav.Item>
            <NavLink to="/home">
             <AiFillHome style={{ marginBottom: '3px', marginRight: '3px'}}/>   Home
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
             <AiOutlineSearch style={{ marginBottom: '3px', marginRight: '3px'}}/>   Search
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
            <FcLike style={{ marginBottom: '2px', marginRight: '3px'}}/>  Likes
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
             <BiMessageSquareAdd style={{ marginBottom: '2px', marginRight: '3px'}}/>   Create Post
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
            <CgProfile style={{ marginBottom: '2px', marginRight: '3px'}}/>  Profile
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink as={Link} to='/' onClick={Auth.logout} style={{marginTop: '65%'}}>
             <BiLogOut style={{ marginBottom: '2px', marginRight: '3px'}}/>  Logout
            </NavLink>
        </Nav.Item>
    </Nav>
</Navbar>
    );
}

export default NavBar;