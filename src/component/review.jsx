import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './review.css'

export default function Review({review : review}) {

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
      <button className="btn btn-dark w-auto">Delete</button>
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