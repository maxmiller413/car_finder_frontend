import React from "react"
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div> 
            NavBar 
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/"> Home </Link>
            <Link to="/wishlist"> Wishlist </Link>
        </div>
    )
}


export default NavBar