import React from "react"
import CarCard from "./CarCard"
import Filter from "./Filter"
// import WishlistNames from "./WishlistNames"




function CarCollection({ cars }) {

    const carsArr = cars.map(car => (
        <CarCard
            key={car.id}
            car={car}
        />
    ))

    return(
        <div className="carCollection">
            {carsArr}
        </div>
    )
}

export default CarCollection
