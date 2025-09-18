import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './addReview.css'

export default function AddReview() {
    let [rating, setRating] = useState(3)
    const [validated, setValidated] = useState(false)

    let handleSubmit = (e) => {
        e.preventDefault(); // stop reload
        setValidated(true)
        console.log("submitted");
    }

    return (
        <div className="add-review">
            <span >Rating</span>

            <form noValidate className={`needs-validation ${validated ? "was-validated" : ""}`} onSubmit={handleSubmit}>

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
                    <label htmlFor="comment" className="form-label">Comment</label>
                    <textarea className='form-control' required name="comment" id="comment" rows={5}></textarea>
                    <div className="valid-feedback">Loosk Good!</div>
                      <div className="invalid-feedback">Please enter a comment.</div>

                </div>
                <button className='btn btn-outline-dark'>Submit</button>

            </form>



        </div>
    )
}