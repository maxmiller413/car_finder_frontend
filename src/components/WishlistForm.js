import React, { useState } from "react"

function WishlistForm({ handleUpdateWishlist, wishlist }){
    const [name, setName] = useState("All")

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3000/wishlists/${wishlist.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: name})
        })
        .then(r => r.json())
        .then(updatedWishlist => handleUpdateWishlist(updatedWishlist))
        console.log(name)
        // OnUpdateWishlistName(name)
    }

    return(
        <form onSubmit={handleSubmit} className="form" autoComplete="off" >
            <h3>Update Wishlist Category</h3>
            <select
                // name="wishlist_name"
                // id="wishlistname"
                value={name}
                onChange={(event) => setName(event.target.value)}
            >
                <option value="All" > All </option>
                <option value="Downsizing" > Downsizing </option>
                <option value="Growing" > Growing </option>
                <option value="Luxury" > Luxury </option>
                <option value="Upgrading" > Upgrading </option>
            </select>
            <button type="submit">Update </button>
        </form>
    )
}

export default WishlistForm