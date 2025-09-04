import mapListings from "./mappers/homeMapper";
import mapListing from "./mappers/listingMapper";

export async function fetchAllListings() {
    let url = 'http://localhost:3000/listings'
    try {

        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        let data = await response.json()
        let listings = mapListings(data)
        return listings

    } catch (err) {
        console.log(err)
    }
}

export async function fetchListing(){
    let url = 'http://localhost:3000/listings/68b6d8c34dc1e23fca63db3c'
    try {
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        let data = await response.json()
        let listing = mapListing(data)
        // console.log(listing)
        return listing
    }catch(err){
        console.log(err)
    }

}



