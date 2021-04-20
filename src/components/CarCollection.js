import React from "react"
import CarCard from "./CarCard"




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
