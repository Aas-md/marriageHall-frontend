import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

export default function Review() {
  const [rating, setRating] = useState(3) // default rating

  return (
    <div style={{ padding: 20 }}>
      <h3>@aas</h3>

      {[1, 2, 3, 4, 5].map(n => (
        <FaStar
          key={n}
          size={30}
          color={n <= rating ? "gold" : "lightgray"}
          onClick={() => setRating(n)}
          style={{ cursor: "pointer", marginRight: 5 }}
        />
      ))}

      <span>very good hotel</span>
      <button className="btn btn-dark">Delete</button>
    </div>
  )
}
