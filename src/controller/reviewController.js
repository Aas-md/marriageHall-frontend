import { deleteReviewApi } from "../api";
import { addReview } from "../api";



export async function addReviewCntr(listingId, comment, rating) {

    return await addReview(listingId, comment, rating)

}

export async function deleteReview(listingId, reviewId) {
   
        const result = await deleteReviewApi(listingId, reviewId)
        // console.log('Deleted:', result)
   
}