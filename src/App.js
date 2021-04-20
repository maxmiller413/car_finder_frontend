import './App.css';
import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom";
import CarCollection from "./components/CarCollection"
import NavBar from "./components/NavBar"
import WishlistNames from "./components/WishlistNames"
import WishlistDetails from "./components/WishlistDetails"
import SignUp from "./components/SignUp"
import Login from "./components/Login"

const cars_url = "http://localhost:3000/cars"
function App() {

  const [cars, setCars] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [isDarkMode, setIsDarkMode] = useState(false);

console.log(currentUser)

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
          <WishlistDetails />
        </Route>
        <Route exact path="/">
            {currentUser ? 
              (<> 
                <h1> Welcome, {currentUser.username} </h1>
                <CarCollection cars={cars} /> 
              </>) 
              : 
              (<h1> Please Login or SignUp </h1>)}
        </Route>
      </Switch>
      <WishlistNames />
    </div>
  );
}

export default App;
