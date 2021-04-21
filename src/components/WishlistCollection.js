import React, {useState, useEffect} from "react"
import WishlistItem from "./WishlistItem"

function WishlistCollection(){
    const [wishlists, setWishlists] = useState([])


    useEffect(() => {
        fetch("http://localhost:3000/wishlists")
        .then((r) => r.json())
        .then((data) => setWishlists(data))
    }, [])

    const wishlistsArr = wishlists.map(wishlist => (
        <WishlistItem
            key={wishlist.id}
            wishlist={wishlist}
        />
    ))

    return(
        <div> {wishlistsArr} </div>
    )
}

export default WishlistCollection