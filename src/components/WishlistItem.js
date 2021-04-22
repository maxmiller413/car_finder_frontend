import React from "react"

function WishlistItem({ wishlist, onDeleteWishlistItem }) {


    console.log(wishlist)
    function handleDeleteButton(e){
        console.log(wishlist.id)
        fetch(`http://localhost:3000/wishlists/${wishlist.id}`, {
            method: "DELETE",
        })
        onDeleteWishlistItem(wishlist.id)
    }


    return(
        
    <div className="card" id={wishlist.id}>
        <p>Wishlist Category: {wishlist.name}</p>
        <img src={wishlist.car.image} alt={wishlist.car.model} />
        <div className="container">
            <h4><b>{wishlist.car.make} - {wishlist.car.model}</b></h4>
            <p>Year: {wishlist.car.year} </p>
            <p>Price: ${wishlist.car.price}</p>
            <p>Type: {wishlist.car.vehicle_type}</p>
            <p>Average Rating: {wishlist.car.average_vehicle_rating}</p>
        <button 
            id={wishlist.id} 
            onClick={handleDeleteButton} 
        > 
            Delete from Wishlist
        </button>
        </div>
    </div>
    )
}

export default WishlistItem