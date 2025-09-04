export default function mapListing(data){

      let curr = {
            id : data._id,
            title : data.title,
            desc : data.desc,
            address : data.address,
            city : data.city,
            image : data.image?.url,
            price : data.price,
           ownerName : data.owner?.username
        }

        return curr

}