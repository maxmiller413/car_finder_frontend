import React, {useState, useEffect} from "react"
import WishlistItem from "./WishlistItem"

function WishlistCollection({ wishlists, setWishlists, currentUser}){
    


    useEffect(() => {
        fetch("http://localhost:3000/wishlists")
        .then((r) => r.json())
        .then((data) => setWishlists(data))
    }, [])

    const wishlistsArr = wishlists
        // .filter(wishlist => (
        //     wishlist.user.username === currentUser
        // ))
        .map(wishlist => (
            <WishlistItem
                key={wishlist.id}
                wishlist={wishlist}
                currentUser={currentUser}
            />
    ))

    return(
        <div> {wishlistsArr} </div>
    )
}

export default WishlistCollection