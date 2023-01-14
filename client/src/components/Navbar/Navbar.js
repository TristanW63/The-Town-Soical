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
import Logo from "../../img/townhouse32.png";

function NavBar() {
    return (
<Navbar className="sidebar">
    <NavbarBrand>
       <p className="nav-logo">The Townies</p>
       <img className="logoIcon" src={Logo}/>
    </NavbarBrand>
    <Nav>
        <Nav.Item>
            <NavLink to="/home">
             <AiFillHome style={{ marginBottom: '3px', marginRight: '3px'}} className="navIcons"/>   <span className="navtext">Home</span>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
             <AiOutlineSearch style={{ marginBottom: '3px', marginRight: '3px'}} className="navIcons"/>  <span className="navtext">Search</span>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
            <FcLike style={{ marginBottom: '2px', marginRight: '3px'}} className="navIcons"/>  <span className="navtext">Likes</span>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
             <BiMessageSquareAdd style={{ marginBottom: '2px', marginRight: '3px'}} className="navIcons"/>   <span className="navtext">Create Post</span>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink>
            <CgProfile style={{ marginBottom: '2px', marginRight: '3px'}} className="navIcons"/>  <span className="navtext">Profile</span>
            </NavLink>
        </Nav.Item>
        <Nav.Item>
            <NavLink as={Link} to='/' onClick={Auth.logout} className="logout">
             <BiLogOut style={{ marginBottom: '2px', marginRight: '3px'}} className="navIconsL"/>  <span className="navtext">Logout</span>
            </NavLink>
        </Nav.Item>
    </Nav>
</Navbar>
    );
}

export default NavBar;