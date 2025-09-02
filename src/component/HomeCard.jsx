import { useEffect, useState } from 'react'
import './Homecard.css'


export function HomeCard({listing}) {
  console.log('listing ->',listing)
  let imageUrl = listing.image ? listing.image : "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"

  return (
    <div className="home-card">
      <img src={imageUrl} width="350" height="300" />
        <span className="card-title">{listing.title}</span>
        <span>{listing.city}</span>
        <span>₹ {listing.price}/night</span>
      </div>


  )
}