import React from "react"

function WishlistItem({ wishlist }) {

    console.log(wishlist.user.username)
    console.log(wishlist)

    
    return(

        <div>
            <p>-----------------</p>
            <p>id: {wishlist.id}</p>
            <p>name: {wishlist.name}</p>
            
             
            <p>-----------------</p>
        </div>
    )
}

export default WishlistItem