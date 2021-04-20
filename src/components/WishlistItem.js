import React from "react"

function WishlistItem({wishlist}) {
    return(

        <div>
            <p>-----------------</p>
            <p>id: {wishlist.id}</p>
             <p>name: {wishlist.name}</p>
             <p>car id: {wishlist.car_id}</p>
            <p>-----------------</p>
        </div>
    )
}

export default WishlistItem