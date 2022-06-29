import "../styles/auth.css"
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";


const Signup = () =>{
return (
<div className="App">
    <Navbar />
    <main class="form-main align-justify-center margin-30">

        <div class="form-container align-justify-center">

            <form action="" class="signup-form">
                <h2 class="form-head">SignUp Form</h2>
                <label for="fname" class="label-inp">Name*</label>
                <input type="text" class="input" id="fname" required autofocus />
                <label for="email" class="label-inp">Email address*</label>
                <input type="text" class="email-id-input input" id="email" required />
                <label for="password" class="label-inp">Password*</label>
                <input type="password" class="input" id="password" required />
                <label for="">
                    <input type="checkbox" id="t-c" required />
                    I accept all the terms and conditions.
                </label>
                <div>
                    <Link to="/homepage">
                    <button class="submit-btn btn primary-btn">Signup</button>
                    </Link>
                </div>
                <Link to="/login" className="link-style link-color-primary">
                <button class="new-ac button read-btn"> Already have an account</button>
                </Link>
            </form>
        </div>
    </main>
</div>
);
};

export {Signup};