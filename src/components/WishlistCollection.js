import React, {useState, useEffect} from "react"
import WishlistItem from "./WishlistItem"

function WishlistCollection({ wishlists, setWishlists, currentUser}){

    useEffect(() => {
        fetch(`http://localhost:3000/users/${currentUser.id}`)
        .then((r) => r.json())
        .then((data) => setWishlists(data.wishlists))
    }, [])

    function handleDeletePlant(id){
        const updatedWishlistsArr = wishlists.filter(wishlist => (
            wishlist.id !== id
        ))
        setWishlists(updatedWishlistsArr)
    }
    
    const wishlistsArr = wishlists
        .map(wishlist => (
            <WishlistItem
                key={wishlist.id}
                wishlist={wishlist}
                currentUser={currentUser}
                onDeleteWishlistItem={handleDeletePlant}
            />
        )
    )
    
    return(
        <div> {wishlistsArr} </div>
    )
}

export default WishlistCollection