import { addListingApi, deleteListingApi, editListingApi, fetchAllListings } from "../api";
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

export async function edidListing(title,description,price,city,address,imageFile,listingId){
    return await editListingApi(title,description,price,city,address,imageFile,listingId)
}