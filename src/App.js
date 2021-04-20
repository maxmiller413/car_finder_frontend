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

  useEffect(() => {
    fetch(cars_url)
    .then((r) => r.json())
    .then((data) => setCars(data))
  }, [])

  return (
    <div >
      <NavBar />
      <Switch>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/wishlist">
          <WishlistDetails />
        </Route>
        <Route exact path="/">
            <CarCollection cars={cars} />
        </Route>
      </Switch>
      <WishlistNames />
    </div>
  );
}




export default App;
