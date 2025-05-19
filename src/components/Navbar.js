import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <nav className="nav-bar">
            <h1 className="large-title">Testing Apple UI</h1>
            <NavLink to="/" className="nav-link" > Home </NavLink>
            <NavLink to="/about" className="nav-link"> About </NavLink>
            <NavLink to="/contact" className="nav-link"> Contact </NavLink>
            <NavLink to="/user/123" className="nav-link">User 123</NavLink>
            <NavLink to="/search?query=example" className="nav-link">Search Example</NavLink>
        </nav>
    )
}

export default Navbar;