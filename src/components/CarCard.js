import React from "react"


function CarCard({ car }) {

const { id, vehicle_type, make, model, year, price, average_vehicle_rating, wishlist, image } = car

return(
    <li >
      <div >
        <img src={image} alt={model} />
        <button  >
          👏
        </button>
      </div>

      <div >
        <h4>{model}</h4>
        <p>{price}</p>
        <p>
          <em>Add a link to the detail page here</em>
        </p>
      </div>

      <div >
        <span >
            Phase {make}
        </span>
      </div>
    </li>
)
    
    
}

export default CarCard