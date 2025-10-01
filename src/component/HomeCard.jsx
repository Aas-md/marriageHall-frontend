import { useEffect, useState } from 'react'
import './HomeCard.css'
import { useNavigate } from "react-router-dom";


export function HomeCard({ listing }) {

  let imageUrl = listing.image ? listing.image : "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/showpage/${listing.id}`) // navigation inside component
  };

  return (
    <div className="home-card" onClick={handleClick} >
      <img src={imageUrl} width="350" height="300" />
      <span className="card-title">{listing.title}</span>
      <span>{listing.city}</span>
      <span>₹ {listing.price}/night</span>
    </div>
  )
}