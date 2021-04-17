import React from "react"
import CarCard from "./CarCard"


function CarCollection({ cars }){

    const carsArr = cars.map(car => (
        <CarCard 
            key={car.id}
            car={car}
        />
    ))
    return(
        <ul>
            {carsArr}
        </ul>
    )
}

export default CarCollection
