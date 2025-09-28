export default function mapListing(data){

      let curr = {
            id : data._id,
            title : data.title,
            desc : data.desc,
            address : data.address,
            city : data.city,
            image : data.image?.url || "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
            price : data.price,
           ownerName : data.owner?.username,
           reviews : data.reviews,
           owner : data.owner
        }

        return curr

}