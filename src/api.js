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

export async function fetchListing() {
    let url = 'http://localhost:3000/listings/68b6d8c34dc1e23fca63db3c'
    try {
        let response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        let data = await response.json()
       
        let listing = mapListing(data)
   
        return listing
    } catch (err) {
        console.log(err)
    }

}

export async function signup(username = "", password = "", email = "") {
  const url = "http://localhost:3000/signup";

  // simple check
  if (!username || !password || !email) {
    throw new Error("Please fill all the fields");
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (!res.ok) {
      // convert error body if needed
      const errorText = await res.text();
      throw new Error(errorText || "Signup failed");
    }

    // parse JSON response
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Signup error:", err);
    throw err; // rethrow so caller can handle
  }
}



