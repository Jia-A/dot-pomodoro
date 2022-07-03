import { Link } from "react-router-dom";
import "../styles/navbar.css"
import { useTheme } from "../context/theme-context";

const Navbar = () =>{

    const { theme, setTheme } = useTheme();

    return(
  <div class="nav-con">
      <nav class="nav-bar">
         <div class="brand-name-center">
            <Link to = "/" className="link-style link-color-primary">
             <h2 class="website-name">On Time</h2>
             </Link>
         </div>                   
         <div class="nav-btn">
            { theme === "light" ? 
                (  <button className="btn icon-only-btn" onClick={()=> setTheme("dark")}><i class="fas fa-moon"></i></button> ) : 
                (  <button className="btn icon-only-btn" onClick={()=> setTheme("light")}><i class="fas fa-sun"></i></button> )
            }
          </div>
      </nav>
    </div>

    );
}

export { Navbar }