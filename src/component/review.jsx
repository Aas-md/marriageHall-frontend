import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './review.css'
import { deleteReview } from '../controller/reviewController'

export default function Review({ review, listingId, onDeleted }) {

  // let listingId = '68b6d8c34dc1e23fca63db3c'

  let reviewId = review._id

  const onDeleteClick = async () => {
    try {
      const result = await deleteReview(listingId, reviewId)
      console.log('Review deleted:', result)
        onDeleted?.(reviewId)

    } catch (err) {
      console.error('Failed to delete review:', err.message)
      alert(err.message);
    }
  };

  return (
    <div className='review'>
      <h3 className='username'>{review.author?.username}</h3>

      <div className="rating">
        {[1, 2, 3, 4, 5].map(n => (
          <FaStar
            key={n}
            size={30}
            color={n <= review.rating ? "gold" : "lightgray"}
            // onClick={() => setRating(n)}
            style={{ marginRight: 5 }}
          />
        ))}
      </div>

      <span>{review.comment}</span>
      <button className="btn btn-dark w-auto" onClick={onDeleteClick}>Delete</button>
    </div>
  )
}



//  <div className="rating">
//         {[1, 2, 3, 4, 5].map(n => (
//           <FaStar
//             key={n}
//             size={30}
//             color={n <= rating ? "gold" : "lightgray"}
//             onClick={() => setRating(n)}
//             style={{ cursor: "pointer", marginRight: 5 }}
//           />
//         ))}
//       </div>