import { useState } from "react"
import { useLocation } from "react-router-dom"
import { edidListing } from "../controller/listingController"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast";
import ProgressDialog from '../utils/ProgressDialoge';

export default function EditListingPage() {
    const location = useLocation()

    const { listing } = location.state || {}
    const navigate = useNavigate()
    const [loading, setListing] = useState(false)

    let [title, setTitle] = useState(listing?.title)
    let [description, setDescription] = useState(listing?.desc)
    let [price, setPrice] = useState(listing?.price)
    let [city, setCity] = useState(listing?.city)
    let [address, setAddress] = useState(listing?.address)

    const [imageFile, setImageFile] = useState(null)



    const handleOnSubmit = async (e) => {
        e.preventDefault();

        try {

            const form = e.currentTarget
            if (!form.checkValidity()) {
                form.classList.add("was-validated")
                return
            }

            setListing(true)
            let res = await edidListing(title, description, price, city, address, imageFile, listing?.id)

            localStorage.setItem("flash", "Listing Updated Successful!")
            window.location = `/showpage/${listing?.id}`
        } catch (err) {

            console.log("error in update listing " + (JSON.stringify(err) || "No internet"))
            toast.error("Updation Failed! " + (err.msg || "Please check your internet connetion!"))
        } finally {
            setListing(false)
        }

    }


    return (
        <div className="row mt-3">
             <div className="col-12  col-md-8 offset-md-2  add-listing">
                <ProgressDialog open={loading} message="Adding listing…" />
                 <h2>Edit This Listing</h2>
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

                    <div className="mb-3">
                        Original Listing image <br />
                        <img
                            src={listing.image}
                            alt="Listing image"
                            style={{ width: "300px", height: "200px", objectFit: "cover" }}
                        />
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