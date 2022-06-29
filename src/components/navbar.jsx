import { Link } from "react-router-dom";
import "../styles/navbar.css"

const Navbar = () =>{
    return(
  <div class="nav-con">
      <nav class="nav-bar">
         <div class="brand-name-center">
            <Link to = "/" className="link-style link-color-primary">
             <h2 class="website-name">On Time</h2>
             </Link>
         </div>                   
         <div class="nav-btn">
                   <button class="btn icon-only-btn"><i class="fas fa-moon"></i></button>
                   <button class="btn icon-only-btn"><i class="fas fa-sign-out"></i></button>
          </div>
      </nav>
    </div>

    );
}

export { Navbar }