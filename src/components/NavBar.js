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

function handleLogout(){
    const userId = localStorage.setItem("userId", null)
    setCurrentUser(userId)
    
}

return (
    <header> 
        <h1 className="letter"> {title} </h1> 
        <ul className="navbar-home">
            <li><Link to="/"> Home </Link></li>
            {currentUser ? (
                <>
                    <li><Link to="/wishlist"> Wishlist </Link></li>
                    <li><Link to="/logout" onClick={handleLogout}>Logout</ Link></li>
                </>
            ) : (
                <>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </>
            )}
        </ul>
        {/* <div>
            <DarkMode isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode}>
            </DarkMode>
        </div> */}
    </header>
)}

export default NavBar