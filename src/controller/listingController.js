import { addListingApi, deleteListingApi, fetchAllListings } from "../api";
import { fetchListing } from "../api";


export  async function getAllListings(){
    let listings = await fetchAllListings()
    return listings
    
}

export  async function getListing(listingId){
    let listing = await fetchListing(listingId)
    return listing
}

export async function addListing(title,description,price,city,address,imageFile){

    return await addListingApi(title,description,price,city,address,imageFile)
}

export async function deleteListing(listingId){
    return await deleteListingApi(listingId)
}