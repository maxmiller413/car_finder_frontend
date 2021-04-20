
import './App.css';
import React, { useState, useEffect } from "react"
import CarCollection from "./components/CarCollection"



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
        <CarCollection cars={cars} />
    </div>
  );
}




export default App;
