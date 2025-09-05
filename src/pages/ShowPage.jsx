import { useEffect, useRef, useState } from "react";
import ShowCard from "../component/ShowCard";
import './showpage.css'
import getListing from "../controller/showController";
import Review from "../component/review";

export default function ShowPage() {

    let alreadyFetched = false;
    let [listing, setListing] = useState([])
    const called = useRef(false)
    useEffect(() => {
        if (called.current) return // prevent double call
        called.current = true

        let fetch = async () => {

            let data = await getListing()
            setListing(data)
        }
        fetch()

    }, [])

    return (
        <div className="show-page">
            <ShowCard listing={listing} />
            <hr />
            <div className="reviews">
                {
                    listing.reviews ? listing.reviews.map((review, id) => (
                        <Review review={review} key={id} />
                    )) : <p>No reviews yet</p>
                }
            </div>

        </div>
    )
}