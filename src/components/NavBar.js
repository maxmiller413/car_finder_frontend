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

    

return (
    <header> 
        <h1> {title} </h1> 
        <div> 
            <Link to="/"> Home </Link> 
        </div>

        <div > 
            {currentUser ? (
                <>
                    <Link to="/wishlist"> Wishlist </Link>
                    <button onClick={() => setCurrentUser(null)}>Logout</ button>
                </>
            ) : (
                <>
                    <Link to="/signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
            

        <button onClick={() => onToggleDarkMode()}>
            {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </div>
    </header>
)}

export default NavBar