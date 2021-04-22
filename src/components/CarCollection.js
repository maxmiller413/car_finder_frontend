import React, { useState } from "react"
import CarCard from "./CarCard"
import Filter from "./Filter"
// import WishlistNames from "./WishlistNames"

function CarCollection({ cars, onAddWishlist, currentUser }) {

    const [type, setType] = useState("All");
    const [make, setMake] = useState("All");
    const [model, setModel] = useState("All");
    const [maxPrice, setMaxPrice] = useState("No Max Price");
    const [avgVehicleRating, setAvgVehicleRating] = useState("All")

    const carsArr = cars
    .filter(car => {
        return type === "All" || car.vehicle_type === type
    })
    .filter(car => {
        return make === "All" || car.make === make
    })
    .filter(car => {
        return model === "All" || car.model === model
    })
    .filter(car => {
        return maxPrice === "No Max Price" || car.price < maxPrice
    })
    .filter(car => {
        return avgVehicleRating === "All" || car.average_vehicle_rating >= avgVehicleRating
    })
    .map(car => (
        <CarCard
            key={car.id}
            car={car}
            onAddWishlist={onAddWishlist}
            currentUser={currentUser}
        />
    ))

    
    return(
        <div className="carCollection">
             <Filter 
                setType={setType}
                type={type}
                setMake={setMake}
                make={make}
                setModel={setModel}
                model={model}
                setMaxPrice={setMaxPrice}
                maxPrice={maxPrice}
                avgVehicleRating={avgVehicleRating}
                setAvgVehicleRating={setAvgVehicleRating}
            />
            {carsArr}
        </div>
    )
}

export default CarCollection
