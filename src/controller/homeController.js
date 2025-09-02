import { fetchAllListings } from "../api";
export default async function getAllListings(){
    let listings = await fetchAllListings()
    return listings
    
}