import { useEffect, useState } from 'react'
import './showcard.css'
import { deleteListing } from '../controller/listingController'

export default function ShowCard({ listing: listing }) {

    let [isOwner, setIsOwner] = useState(false)

    useEffect(() => {

        if (!listing) return

        const user = JSON.parse(localStorage.getItem("user"))

      
        if (listing.owner?._id == user.id) {
            setIsOwner(true)
        }

    }, [listing])





    let handleDelete = async () => {
      try{
        await deleteListing(listing.id)
        console.log("listing deleted successfuly")
      }catch(err){
        console.log(err)
      }
    }

    let imageUrl = listing.image ? listing.image : "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
    return (
        <div className="show-card">

            <span className="title">{listing.title}</span>
            <img src={imageUrl} />
            <span className="owner">Owned by : {listing.ownerName}</span>
            <span>Desc : {listing.desc}</span>
            <span>Price : ₹{listing.price}/program</span>
            <span>Address : {listing.address}</span>
            <span>City : {listing.city}</span>
            {
                isOwner && (<div className="btns-delete-edit">

                    <button className="btn btn-dark btn-add" onClick={handleDelete}>Delete</button>
                    <button className="btn btn-dark ">Edit</button>

                </div>
                )
            }

        </div>
    )
}