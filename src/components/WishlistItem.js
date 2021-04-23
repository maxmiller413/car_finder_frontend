import React, { useState } from "react"
import WishlistForm from "./WishlistForm"

function WishlistItem({ wishlist, onDeleteWishlistItem, handleUpdateWishlist }) {
    // const [updateWishlist, setUpdateWishlist] = useState("All")
    


    console.log(wishlist)
    function handleDeleteButton(e){
        console.log(wishlist.id)
        fetch(`http://localhost:3000/wishlists/${wishlist.id}`, {
            method: "DELETE",
        })
        onDeleteWishlistItem(wishlist.id)
    }

    // function handleUpdateWishlistName(updatedWish){
        
    //         if(wishlist.id === updatedWish.id){
    //             return (updatedWish)
    //         }
    //         else {
    //             return (wishlist)
    //         }
        
    //     setUpdateWishlist(updatedWish)
    // }

    return(
        
    <div className="card" id={wishlist.id}>
        <p>Wishlist Category: </p>
        <p className="wishlist_category">  
            {wishlist.name}
        </p>
        <img className="image_card" src={wishlist.car.image} alt={wishlist.car.model} />
        <div className="container">
            <h4><b>{wishlist.car.make} - {wishlist.car.model}</b></h4>
            <p>Year: {wishlist.car.year} </p>
            <p>Price: ${wishlist.car.price}</p>
            <p>Type: {wishlist.car.vehicle_type}</p>
            <p>Average Rating: {wishlist.car.average_vehicle_rating}</p>
        <div>
            <WishlistForm wishlist={wishlist} handleUpdateWishlist={handleUpdateWishlist} />
        </div>
        <button 
            id={wishlist.id} 
            onClick={handleDeleteButton}
            className="button" 
        > 
            Delete from Wishlist
        </button>
        </div>
    </div>
    )
}

export default WishlistItem