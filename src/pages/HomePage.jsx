import { HomeCard } from "../component/homeCard.jsx"
import './homepage.css'
import { getAllListings } from "../controller/listingController.js";
import { useEffect, useRef, useState } from "react"

export function HomePage() {

    let alreadyFetched = false;
    let [listings, setListings] = useState([])
    const called = useRef(false)
    useEffect(() => {
        if (called.current) return
        called.current = true
    
        let getListings = async () => {

            let data = await getAllListings()
            setListings(data)
        }
        getListings()

    }, [])

    return (

        <div className="home-page">

            {
                listings.map((listing, id) => (
                    <HomeCard listing={listing} key={id} />
                ))
            }

        </div>

    )
}