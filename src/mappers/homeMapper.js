export default function mapListings(listings){

    if(!listings || listings.length == 0)return []

    let res = []
    for(let listing of listings){
        
        let curr = {
            id : listing._id,
            ownerId : listing.owner,
            title : listing.title,
            desc : listing.desc,
            address : listing.address,
            city : listing.city,
            image : listing.image?.url,
            price : listing.price  
        }

        res.push(curr)
        
    }
    return res

}