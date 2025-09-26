import { fetchListing } from "../api";

export default async function getListing(listingId){
    let listing = await fetchListing(listingId)
    return listing
}