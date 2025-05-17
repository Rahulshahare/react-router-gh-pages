import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){
    return(
        <nav style={{marginBottom: '20px'}}>
            <NavLink to="/" style={{ margin: '0 10px' }} activeStyle={{ fontWeight: 'bold' }}> Home </NavLink>
            <NavLink to="/about" style={{ margin: '0 10px' }} activeStyle={{ fontWeight: 'bold' }}> About </NavLink>
            <NavLink to="/contact" style={{ margin: '0 10px' }} activeStyle={{ fontWeight: 'bold' }}> Contact </NavLink>
        </nav>
    )
}

export default Navbar;