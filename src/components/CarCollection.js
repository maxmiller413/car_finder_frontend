import React from "react"
import CarCard from "./CarCard"
import Filter from "./Filter"
import WishlistNames from "./WishlistNames"


function CarCollection({ cars }){

    const carsArr = cars.map(car => (
        <CarCard 
            key={car.id}
            car={car}
        />
    ))
    return(
        <>
            <Filter />
            <WishlistNames />
            <ul>
                <div>{carsArr}</div>
            </ul>
        </>
    )
}

export default CarCollection
