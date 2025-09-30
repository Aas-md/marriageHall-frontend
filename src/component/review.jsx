import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './review.css'
import { deleteReview } from '../controller/reviewController'
import toast from 'react-hot-toast'

export default function Review({ review, listingId, onDeleted }) {

  let reviewId = review._id
  let [isOwner, setIsOwner] = useState(false)
 

  useEffect(() => {

    const user = JSON.parse(localStorage.getItem('user'))
 

    if (!review || !review.author || !user) return
    console.log(review, user)


    if (review?.author?._id == user.id) setIsOwner(true)

  }, [review])

  const onDeleteClick = async () => {
    try {
      const result = await deleteReview(listingId, reviewId)
      console.log('Review deleted:', result)
      toast.success('Review Deleted Successfully!')
      onDeleted?.(reviewId)

    } catch (err) {
      console.error('Failed to delete review:', err.message)
      // alert(err.message);
      toast.error('Failed to delete review : ' +  err.message)
    }
  };

  return (

    <div className='review'>
      <h3 className='username'>@{review.author?.username}</h3>

      <div className="rating">
        {[1, 2, 3, 4, 5].map(n => (
          <FaStar
            key={n}
            // size={30}
              className="star-icon"
            color={n <= review.rating ? "gold" : "lightgray"}
            style={{ marginRight: 5 }}
          />
        ))}
      </div>

      <span>{review.comment}</span>
      {
        isOwner && <button className="btn btn-dark w-auto" onClick={onDeleteClick}>Delete</button>
      }
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