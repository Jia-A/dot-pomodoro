import "../styles/landing.css"
import { Link } from "react-router-dom";
import { Navbar } from "../components/navbar";


const Landing = () =>{
return(
<div className="App">
    <Navbar />
    <div className="body-div">

        <div className="content-side">
            <h1 className="home-brand">DOT on TIME</h1>
            <section className="home-content">
                <p className="home-para">Do your special task with an accurate stopwatch with <span
                        className="br-name">DOT on TIME</span> and be a person of punctuality ...
                </p>
                <div className="btn-div">
                    <Link to="/signup">
                    <button className="btn primary-btn">Join Now</button>
                    </Link>
                    <Link to="/login">
                    <button className="new-btn read-btn">Already have an account?</button>
                    </Link>
                </div>
            </section>
        </div>
        <div className="image-side">
            <img src="./clock.svg" alt="hero-img" className="home-img" />
        </div>
    </div>
</div>
);
}

export {Landing};