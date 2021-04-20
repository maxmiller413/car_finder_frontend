import '../index.css';
import React from "react"
import { Link } from "react-router-dom";

function NavBar({ 
    title,
    isDarkMode,
    onToggleDarkMode,
    currentUser,
    setCurrentUser
}) {

    function logout(){
        setCurrentUser(null)
    }

return (
    <header> 
        <h1> {title} </h1> 
        <nav className="nav"> 
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
            <Link to="/"> Home </Link>
            <Link to="/wishlist"> Wishlist </Link>
            <button onClick={logout}>Logout</button>

        <button onClick={() => onToggleDarkMode()}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </nav>
    </header>
)}

export default NavBar