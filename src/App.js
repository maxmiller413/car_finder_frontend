import './App.css';
import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import CarCollection from "./components/CarCollection"
import NavBar from "./components/NavBar"
import WishlistCollection from "./components/WishlistCollection"
import WishlistItem from "./components/WishlistItem"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
// import Wishlist from './components/WishlistItem';



const cars_url = "http://localhost:3000/cars"
function App() {

  const [cars, setCars] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [wishlists, setWishlists] = useState([])

  // console.log(currentUser)
// auto-login 
// TODO: check if a user has already logged in (look for their token)
//  if they've already logged in, use that token to log them in again
// request => GET /me

  useEffect(() => {
    const token = true
    if (token) {
    fetch("http://localhost:3000/me")
    .then(r => r.json())
    // response => setCurrentUser
    .then(user => setCurrentUser(user))
    }
    
  }, [])

  useEffect(() => {
    fetch(cars_url)
    .then((r) => r.json())
    .then((data) => setCars(data))
  }, [])

  function handleToggleDarkMode(){
    setIsDarkMode(isDarkMode => !isDarkMode)
  }

  return (
    <div className={isDarkMode ? "App" : "App light"} >
      <NavBar 
        title="Car Finder"
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Switch>
        <Route exact path="/signup">
          <SignUp setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/wishlist">
          <WishlistCollection 
            currentUser={currentUser}
            wishlists={wishlists}
            setWishlists={setWishlists}
          />
        </Route>
        <Route exact path="/">
            {currentUser ? 
              (<> 
                <h1 className="letter"> Welcome, {currentUser.username} </h1>
                <CarCollection cars={cars} /> 
              </>) 
              : 
              (<h1 className="letter"> Please Login or SignUp </h1>)}
        </Route>
      </Switch>
      {/* <WishlistItem /> */}
    </div>
  );
}




export default App;
