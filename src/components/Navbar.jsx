import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar(){
      return(
           
            <div className="container">
            
            
            <Link className="navbar-brand logo-image" href="/"><img src="images/logo.svg" alt="alternative"/></Link>  

            

            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <HashLink className="nav-link page-scroll" to="/#header">Home <span className="sr-only">(current)</span></HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link page-scroll" href="/#about">About</HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink className="nav-link page-scroll" smooth to="/#services">Services</HashLink>
                    </li>
                    <li className="nav-item dropdown">
                        <HashLink className="nav-link dropdown-toggle" smooth to="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Drop</HashLink>
                        <div className="dropdown-menu" aria-labelledby="dropdown01">
                            <Link className="dropdown-item page-scroll" to="/privacy">Privacy Policy</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        {/* <HashLink className="nav-link page-scroll" smooth to="/#contact">Contact</HashLink> */}
                    </li>
                </ul>
                <span className="nav-item social-icons">
                    <span className="fa-stack">
                        <HashLink smooth to="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x"></i>
                        </HashLink>
                    </span>
                    <span className="fa-stack">
                        <HashLink smooth to="#your-link">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-twitter fa-stack-1x"></i>
                        </HashLink>
                    </span>
                </span>
            </div>
        </div>
)}

export default Navbar;