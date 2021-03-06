import React, {useState, useEffect} from "react"
import WishlistItem from "./WishlistItem"


function WishlistCollection({ wishlists, setWishlists, currentUser, handleUpdateWishlist }){

    const [updateWishlist, setUpdateWishlist] = useState("All")

    // useEffect(() => {
    //     fetch(`http://localhost:3000/users/${currentUser.id}`)
    //     .then((r) => r.json())
    //     .then((data) => setWishlists(data.wishlists))
    // }, [])

    function handleDeleteWishlist(id){
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
                onDeleteWishlistItem={handleDeleteWishlist}
                handleUpdateWishlist={handleUpdateWishlist}
            />
        )
    )

    
    return(
        <>

            <div className="wishcollection"> {wishlistsArr} </div>
            
        </>
    )
}

export default WishlistCollection