import React from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
            <NavLink exact to="/" className="nav-text">
                <li>HOME</li>
            </NavLink>
                <NavLink exact to="/about" className="nav-text">
                <li>ABOUT</li>
                </NavLink>
                <NavLink exact to="/projects" className="nav-text">
                <li>PROJECTS</li>
                </NavLink>
                <NavLink exact to="/contact" className="nav-text">
                <li>CONTACT</li>
                </NavLink>
            </ul>
        </nav>
    )
}
export default Nav;