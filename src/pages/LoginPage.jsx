import { useState } from "react"
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { login } from "../controller/authController";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";


export default function LoginPage() {

    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [flash, setFlash] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await login(username, password)
            setPassword('')
            setUsername('')

            setTimeout(() => setFlash(""), 3000);
            localStorage.setItem("flash", "Login successful!")
            window.location = "/";

            //yaha par tere ko kuchh karna hai shayad

        } catch (err) {
            console.error(err.message)
            toast.error("Login failed! Please check your credentials." + err.message)
        }


    }

    return (
        <div className="mt-4 mb-4 row mt-3">

            <div className="col-12 col-md-6 offset-md-3 add-listing">
                <h1>Login on Marriage Hall</h1>
            
                <form noValidate className="needs-validation" onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        <label htmlFor="username" className="form-label">username :</label>
                        <input type="text" className="form-control" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username" />
                        <div className="valid-feedback">Loosk Good!</div>
                    </div>

                    <div className="mb-3 form-group">
                        <label htmlFor="password" className="form-label">password :</label>
                        <input type={showPassword ? "text" : "password"} className="form-control" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password"/>
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="btn eye-btn btn-link position-absolute  translate-middle-y me-2 p-0"

                        >
                            {showPassword ? <IoMdEyeOff size={18} /> : <IoEye size={18} />}
                        </button>

                    </div>

                    <button className="btn btn-success">SignUp</button>
                </form>

            </div>
        </div>
    )
}