import { fetchListing } from "../api";

export default async function getListing(){
    let listing = await fetchListing()
    return listing
}