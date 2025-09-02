import mapListings from "./mappers/homeMapper";


export async function fetchAllListings() {
    let url = 'http://localhost:3000/listings'
    try {

        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        let data = await response.json()
        let listings = mapListings(data)
      return listings

    } catch (err) {
        console.log(err)
    }


}