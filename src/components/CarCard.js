import React from "react"


function CarCard({ car }) {

const { id, vehicle_type, make, model, year, price, average_vehicle_rating, image } = car

return(
    <li >
      <div >
        <h4> Make: {make} </h4>
        <h5> Model: {model} </h5>
        <img src={image} alt={model} />
      </div>

      <div >
        <p> Price: {price} </p>
        <p> Year: {year} </p>
        <p>
          <em> Add a link to the detail page here </em>
        </p>
      </div>
    </li>
  )
  
}

export default CarCard