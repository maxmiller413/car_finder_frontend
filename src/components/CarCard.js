import React from "react";
import { useHistory } from "react-router-dom";


function CarCard({ car }) {

const { id, vehicle_type, make, model, year, price, average_vehicle_rating, wishlist, image } = car
const history = useHistory()
const add_to_wishlist = (id) => {
  fetch("http://localhost:3000/wishlists",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      wishlist: {
        car_id: id,
        user_id: id,
        name: "dream"
      }
    })
  })
  history.push('/wishlist')
}

  return (
    <div className="card">
      <img src={image} alt={make} />
      <div className="container">
        <h4><b>{make} {model}</b></h4>
        <p>{year} & {price}</p>
        <button id={id} onClick={(e) => add_to_wishlist(e.target.id)}>
        ☆ wishlist
        </button>
      </div>
    </div>
  )

}

export default CarCard;