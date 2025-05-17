import React from "react";
import { NavLink } from "react-router-dom";

function Contact(){
    return <>
        <h2>Contact us</h2>
        <NavLink to="/contact" style={{ margin: '0 10px' }} activeStyle={{ fontWeight: 'bold' }}> 404 </NavLink>

    </>
}

export default Contact;