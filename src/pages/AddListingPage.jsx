import { useState } from 'react'
import './AddListingPage.css'
import { addListing } from '../controller/listingController'
import toast from "react-hot-toast";
import ProgressDialog from '../utils/ProgressDialoge';
import { useNavigate } from "react-router-dom"

export default function AddListingPage() {

    let [title, setTitle] = useState('')
    let [description, setDescription] = useState('')
    let [price, setPrice] = useState('')
    let [city, setCity] = useState('')
    let [address, setAddress] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const [loading, setLoading] = useState(false)
     const navigate = useNavigate()



    const isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false
    }

    const handleOnSubmit = async (event) => {

        event.preventDefault()

        if (isLoggedIn() == false) {
            toast.error("Please Login Before Adding A Listing")
             navigate("/signup")
            return 
        }

        const form = event.currentTarget
        if (!form.checkValidity()) {
            form.classList.add("was-validated")
            return
        }
        setLoading(true)
        try {

            await addListing(title, description, price, city, address, imageFile)
            console.log("Added succesffully")
            localStorage.setItem("flash", "Listing Added successfully!")
            window.location = "/";

        } catch (err) {
            console.log("Failed To Add Listing " + (JSON.stringify(err) == {} || "No Internet"))
            toast.error("Signup failed! " + (err.msg || "No Internet"))
        } finally {
            setLoading(false)
        }
    }

    return (
// col-8 offset-2
        <div className="row mt-3 ">
            <div className="col-12  col-md-8 offset-md-2  add-listing">
                <ProgressDialog open={loading} message="Adding listing…" />
                <h2>Add A New Listing</h2>
                <form onSubmit={handleOnSubmit} noValidate className="needs-validation" encType="multipart/form-data">
                    <div className="mb-3 form-group">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" name="listing[title]" id="title" required placeholder="Enter your title"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                        <div className="invalid-feedback">
                            Please enter title
                        </div>

                    </div>
                    <div className="invalid-feedback">
                        Please enter title
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea name="listing[description]" required id="description" placeholder="description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}></textarea>
                        <div className="invalid-feedback">
                            Please enter description
                        </div>
                    </div>


                    <div className="row">
                        <div className="mb-3 form-group col-md-8">
                            <label htmlFor="image" className="form-label">Choose Image</label>
                            <input type="file" name="listing[image]" id="image" className="form-control"
                                onChange={(e) => setImageFile(e.target.files[0])} />
                        </div>

                        <div className="mb-3 form-group col-md-4">
                            <label htmlFor="price" className="form-label">Price</label>
                            <input type="number" name="listing[price]" required id="price" placeholder="Enter price"
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)} />
                            <div className="invalid-feedback">
                                Please enter Price
                            </div>
                        </div>

                    </div>
                    <div className="mb-3 form-group">
                        <label htmlFor="city" className="form-label">City </label>
                        <input type="text" name="listing[city]" id="city" required placeholder="City" className="form-control"
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />
                        <div className="invalid-feedback">
                            Please enter city
                        </div>
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="address" className="form-label">Address </label>
                        <input type="text" name="listing[address]" id="address" required placeholder="Address" className="form-control"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                        <div className="invalid-feedback">
                            Please enter Address
                        </div>
                    </div>

                    <button className="btn btn-dark btn-add">Submit</button>
                </form>
            </div>
        </div>
    )
}