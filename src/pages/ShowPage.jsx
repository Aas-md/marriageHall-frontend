import { useEffect, useRef, useState } from "react";
import ShowCard from "../component/ShowCard";
import './showpage.css'
import { getListing } from "../controller/listingController";
import Review from "../component/review";
import AddReview from "../component/AddReview";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export default function ShowPage() {

    const {listingId} = useParams()
     const navigate = useNavigate()
 
    let alreadyFetched = false;
    let [listing, setListing] = useState([])
    const [reviews, setReviews] = useState(listing.reviews || [])

    const handleReviewDeleted = (reviewId) => {
        setReviews((prev) => prev.filter((r) => r._id !== reviewId))
    }

    const handleReviewAdded = (newReview) => {

        setReviews(prev => {
            const newArr = [...prev, newReview]
            return newArr;
        });

    }

    const called = useRef(false)

    useEffect(() => {
        if (called.current) return 
        called.current = true

        let fetch = async () => {

            let data = await getListing(listingId)
            setListing(data)
            if (data.reviews?.length > 0) {
                setReviews(data.reviews) 
            }
        }
        fetch()

    }, [])

    return (
        <div className="show-page">
            <ShowCard listing={listing} />
            
            <hr />
            <h1>Leave a review</h1>
            <AddReview listingId={listing.id} onAdded={handleReviewAdded} />
            <hr />
            <div className="reviews">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <Review
                            key={review._id}
                            review={review}
                            listingId={listing?.id}
                            onDeleted={handleReviewDeleted}
                        />
                    ))
                ) : (
                    <p>No reviews yet</p>
                )}
            </div>

        </div>
    )
}
