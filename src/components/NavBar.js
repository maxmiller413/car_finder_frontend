import '../index.css';
import React from "react"
import { Link } from "react-router-dom";
import DarkMode from './Darkmode'

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
        <ul className="navbar-home">
            <li><Link to="/"> Home </Link></li>
            {currentUser ? (
                <>
                    <li><Link to="/wishlist"> Wishlist </Link></li>
                    <li><Link onClick={() => setCurrentUser(null)}>Logout</ Link></li>
                </>
            ) : (
                <>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </>
            )}
        </ul>
        <div>
            
        
            <DarkMode isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}>
            </DarkMode>
        </div>
    </header>
)}

export default NavBar