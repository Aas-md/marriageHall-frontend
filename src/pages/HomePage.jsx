import { HomeCard } from "../component/homeCard.jsx"
import './homepage.css'
import { getAllListings } from "../controller/listingController.js";
import { useEffect, useRef, useState } from "react"


export function HomePage() {

    let alreadyFetched = false;
    let [listings, setListings] = useState([])
    let [error, setError] = useState(null)

    const called = useRef(false)
    useEffect(() => {
        if (called.current) return
        called.current = true

            let getListings = async () => {
                try {

                    let data = await getAllListings()
                    setListings(data)
                } catch (err) {
            
                    console.log('Some thing went wrong  : ' +  JSON.stringify(err))
                    setError(err.message || err.msg)
                }
            }
        getListings()

    }, [])

    if (error) return <p>Some thing went wrong : {error}</p>
    if (!listings.length) return <p>Loading...</p>

    return (

        <div className="home-page">

            {
                listings.length ?
                    listings.map((listing, id) => (
                        <HomeCard listing={listing} key={id} />
                    )) : <p>No Listings at the moment</p>
            }

        </div>

    )
}