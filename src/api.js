import mapListings from "./mappers/homeMapper";
import mapListing from "./mappers/listingMapper";
let baseUrl = 'https://marriage-hall-backend-4t7g.onrender.com'

export async function fetchAllListings() {
  let url = `${baseUrl}/listings`

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 2000) 

  let response = await fetch(url, { signal: controller.signal })

  clearTimeout(timeout) 

  if (!response.ok) {
    const errorData = await response.json()

    throw errorData || 'Failed to fetch Listings'
  }
  let data = await response.json()
  let listings = mapListings(data)
  return listings
}

export async function fetchListing(listingId) {

  let url = `${baseUrl}/listings/${listingId}`
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 2000) 

  let response = await fetch(url, { signal: controller.signal })

  clearTimeout(timeout)
  if (!response.ok) {
    const errorData = await response.json()

    throw errorData || "Failed to faitch Listing"
  }
  let data = await response.json()
  let listing = mapListing(data)
  return listing
}

export async function addListingApi(title, description, price, city, address, imageFile) {

  const formData = new FormData();
  formData.append("listing[title]", title);
  formData.append("listing[desc]", description);
  formData.append("listing[price]", price);
  formData.append("listing[city]", city);
  formData.append("listing[address]", address);
  if (imageFile) formData.append("listing[image]", imageFile); 

  const token = localStorage.getItem("token"); 
  let url = `${baseUrl}/listings/`

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 9000) 

  const res = await fetch(url , {
      signal: controller.signal ,
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`, 
    },
    body: formData, 
  })

  clearTimeout(timeout)

  if (!res.ok) {

    const errorData = await res.json()
    throw errorData || "Failed to add listing!" 

  }

  const data = await res.text()
 

};


export async function editListingApi(title, description, price, city, address, imageFile, listingId) {

  let url = `${baseUrl}/listings/${listingId}`

  const formData = new FormData();
  formData.append("listing[title]", title)
  formData.append("listing[desc]", description)
  formData.append("listing[price]", price)
  formData.append("listing[city]", city)
  formData.append("listing[address]", address)

  if (imageFile) {
    formData.append("listing[image]", imageFile)
  }

  const token = localStorage.getItem("token")

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 9000)

  const res = await fetch(url, {
    signal : controller.signal,
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`, 
    },
    body: formData,
  })

  clearTimeout(timeout)

  if (!res.ok) {

    let err;
    err = await res.json()
    throw err || "Failed to delete listing"

  }

  return await res.json()

}

export async function addReview(listingId, comment, rating) {

  let url = `${baseUrl}/listings/${listingId}/reviews`

  const token = localStorage.getItem('token')

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 6000) 

  const response = await fetch(url, {
    signal : controller.signal,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      review: {
        comment,
        rating
      }
    })

  })

  clearTimeout(timeout)

  if (!response.ok) {
    const errorText = await response.json()
    throw errorText || 'Failed to add review'
  }

  return await response.json()

}


export async function deleteReviewApi(listingId, reviewId) {

  const url = `${baseUrl}/listings/${listingId}/reviews/${reviewId}`;
  const token = localStorage.getItem('token');

    const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)

  const response = await fetch(url, {
    signal : controller.signal,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  clearTimeout(timeout)

  if (!response.ok) {

    const error = await response.json().catch(() => ({}))
    throw error || 'Failed to delete review'
  }

  return await response.json();
}


export async function loginApi(username = "", password = "") {
  const url = `${baseUrl}/login`
  if (!username || !password) {
    throw "Please fill all the fields"
  }

    const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)


  const res = await fetch(url, {
    signal : controller.signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  clearTimeout(timeout)

  if (!res.ok) {
    const errText = await res.text()
    throw errText || "Login failed in !res.ok"
  }

  const data = await res.json()
  localStorage.setItem('token', data.token)
  localStorage.setItem('user', JSON.stringify(data.user))

  return data
}

export async function signup(username = "", password = "", email = "") {
  const url = `${baseUrl}/signup`;

  
  if (!username || !password || !email) {
    throw  "Please fill all the fields"
  }

    const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)

  const res = await fetch(url, {
    signal : controller.signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  });

  clearTimeout(timeout)

  if (!res.ok) {
  
    const errorData = await res.json();
    throw errorData || "Signup failed"; //

  }


  const data = await res.json()

  localStorage.setItem('token', data.token)
  localStorage.setItem('user', JSON.stringify(data.user))

  return data;
}


export async function deleteListingApi(listingId) {

  const url = `${baseUrl}/listings/${listingId}`;

  const token = localStorage.getItem("token")

    const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)

  const res = await fetch(url, {
    signal : controller.signal,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  })

  clearTimeout(timeout)

  if (!res.ok) {

    let err;
    err = await res.json()
    throw err || "Failed to delete listing"

  }

  return await res.json()
}






