import { useEffect, useState } from "react"
import { IoEye } from "react-icons/io5"
import { IoMdEyeOff } from "react-icons/io"
import { authSignup } from "../controller/authController"
import toast from "react-hot-toast";
import ProgressDialog from '../utils/ProgressDialoge';

export default function SignupPage() {

    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
     const [loading, setLoading] = useState(false)


    let handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const res = await authSignup(username, password, email)
            localStorage.setItem("flash", "Signup successful!")
            window.location = "/";
        } catch (err) {
            console.log(err || "No Internet")
            toast.error("Signup failed! " + (err.msg || "No Internet"))
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        // bootstrap form validation
        const forms = document.querySelectorAll('.needs-validation');
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
    }, [])

    return (
        <div className="mt-4 mb-4 row mt-3">

            <div className="col-12 col-md-6 offset-md-3 add-listing">
                    <ProgressDialog open={loading} message="Adding listing…" />
                <h1 >SignUp on Marriage Hall</h1>
                <form noValidate className="needs-validation" onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="username" className="form-label">username :</label>
                        <input type="text" className="form-control" id="username" required onChange={(e) => setUsername(e.target.value)} placeholder="username"/>
                        <div className="valid-feedback">Loosk Good!</div>
                    </div>


                    <div className="mb-3 form-group">
                        <label htmlFor="email" className="form-label">email :</label>
                        <input type="email" className="form-control" id="email" required onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="password" className="form-label">password :</label>
                        <input type={showPassword ? "text" : "password"} className="form-control" id="password" required onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn eye-btn btn-link position-absolute  translate-middle-y me-2 p-0"

                        >
                            {showPassword ? <IoMdEyeOff size={18} /> : <IoEye size={18} />}
                        </button>

                    </div>

                    <button className="btn btn-success ">SignUp</button>
                </form>

            </div>
        </div>
    )
}