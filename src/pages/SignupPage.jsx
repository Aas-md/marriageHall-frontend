import { useEffect, useState } from "react"
import { IoEye } from "react-icons/io5"
import { IoMdEyeOff } from "react-icons/io"
import { authSignup } from "../controller/authController"


export default function SignupPage() {

    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    let handleSubmit = async (event) => {
        event.preventDefault()
        console.log(username,password,email)
        try {
            const res = await authSignup(username, password, email)
            console.log("Signup success:", res)
        } catch (err) {
            alert(err.message)
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
            <h1 className="col-6 offset-3">SignUp on Marriage Hall</h1>
            <div className=" col-6 offset-3">

                <form noValidate className="needs-validation" onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="username" className="form-label">username :</label>
                        <input type="text" className="form-control" id="username" required onChange={(e) =>setUsername( e.target.value)} />
                        <div className="valid-feedback">Loosk Good!</div>
                    </div>


                    <div className="mb-3 form-group">
                        <label htmlFor="email" className="form-label">email :</label>
                        <input type="email" className="form-control" id="email" required onChange={(e) => setEmail( e.target.value)} />
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="password" className="form-label">password :</label>
                        <input type={showPassword ? "text" : "password"} className="form-control" id="password" required onChange={(e) =>setPassword( e.target.value)} />
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