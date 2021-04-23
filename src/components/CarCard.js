import React from "react";
import { useHistory } from "react-router-dom";


function CarCard({ car, onAddWishlist, currentUser }) {

const { id, vehicle_type, make, model, year, price, average_vehicle_rating, wishlist, image } = car
const history = useHistory()

const handleAddWishlist = (id) => {
  // history.push('/wishlist')
  
  const wishlistObject = {
    car_id: id,
    user_id: currentUser.id,
    name: "All"
  }
  console.log(id)
  fetch("http://localhost:3000/wishlists",{
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(wishlistObject)
  })
    .then(r => r.json())
    .then(newWishlist => onAddWishlist(newWishlist))
    history.push('/wishlist')
}

  return (
    <div className="card">
      <img className="image_card" src={image} alt={make} />
      <div className="container">
        <h4><b>{make} {model}</b></h4>
        <p>Year: {year} </p>
        <p>Price: ${price}</p>
        <p>Average Rating: {average_vehicle_rating}</p>
        <button className="button" id={id} onClick={(e) => handleAddWishlist(e.target.id)}>
        ☆ Add Wishlist
        </button>
      </div>
    </div>
  )

}

export default CarCard;