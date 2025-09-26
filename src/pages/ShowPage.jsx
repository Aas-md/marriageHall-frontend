import { useEffect, useRef, useState } from "react";
import ShowCard from "../component/ShowCard";
import './showpage.css'
import getListing from "../controller/showController";
import Review from "../component/review";
import AddReview from "../component/AddReview";


export default function ShowPage() {

    let alreadyFetched = false;
    let [listing, setListing] = useState([])
    const [reviews, setReviews] = useState(listing.reviews || [])

    const handleReviewDeleted = (reviewId) => {
        setReviews((prev) => prev.filter((r) => r._id !== reviewId))
    }


    const handleReviewAdded = (newReview) => {

        setReviews(prev => {
            const newArr = [...prev, newReview]; // bottom pe add karne ke liye
            return newArr;
        });

    }




    const called = useRef(false)
    useEffect(() => {
        if (called.current) return // prevent double call
        called.current = true

        let fetch = async () => {

            let data = await getListing()
            setListing(data)
            console.log(data)
            if (data.reviews?.length > 0) {
                setReviews(data.reviews) // reviews tabhi set ho jab listing aa jaaye
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




//  {
//                     listing.reviews ? listing.reviews.map((review, id) => (
//                         <Review review={review} key={id} />
//                     )) : <p>No reviews yet</p>
//                 }