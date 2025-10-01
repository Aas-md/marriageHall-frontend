import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './addReview.css'
import { addReviewCntr } from '../controller/reviewController'
import toast from 'react-hot-toast'
import ProgressDialog from '../utils/ProgressDialoge';


export default function AddReview({ listingId, onAdded }) {
    // let listingId = '68b6d8c34dc1e23fca63db3c'
    let [rating, setRating] = useState(3)
    let [comment, setComment] = useState('')
    const [validated, setValidated] = useState(false)
    const [loading, setLoading] = useState(false)

    let handleSubmit = async (e) => {
        e.preventDefault()
       

        const form = e.currentTarget
        if (!form.checkValidity()) {
            form.classList.add("was-validated")
            return
        }
        setLoading(true)

        try {
            let res = await addReviewCntr(listingId, comment, rating)
            onAdded?.(res.review)
            setComment('')
            setRating(3)
            toast.success('Review Added Successfully!')
              
        } catch (err) {
            toast.error('Failed To Add Review! ' + err.msg)
            console.log("failed to add review : " + err)
        } finally {
            setLoading(false)
        }

    }

    return (
        <div className="add-review">
            <span >Rating</span>
            <ProgressDialog open={loading} message="Adding listing…" />
            <form noValidate className={`needs-validation needs-validation`} onSubmit={handleSubmit}>

                <div className="rating mb-3">
                    {[1, 2, 3, 4, 5].map(n => (
                        <FaStar
                            key={n}
                            size={30}
                            color={n <= rating ? "gold" : "lightgray"}
                            onClick={() => setRating(n)}
                            style={{ cursor: "pointer", marginRight: 5 }}
                        />
                    ))}
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="comment" className="form-label" >Comment</label>
                    <textarea className='form-control' required name="comment" id="comment" rows={5} value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    <div className="valid-feedback">Loosk Good!</div>
                    <div className="invalid-feedback">Please enter a comment.</div>

                </div>
                <button className='btn btn-outline-dark'>Submit</button>

            </form>



        </div>
    )
}