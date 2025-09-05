import './showcard.css'

export default function ShowCard({listing : listing}){


    let imageUrl = listing.image ? listing.image : "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"
    return (
        <div className="show-card">
          
        <span className="title">{listing.title}</span>
        <img src={imageUrl}/>
            <span className="owner">Owned by : {listing.ownerName}</span>
            <span>{listing.desc}</span>
            <span>₹{listing.price}/program</span>
            <span>{listing.address}</span>
            <span>{listing.city}</span>
        </div>
    )
}