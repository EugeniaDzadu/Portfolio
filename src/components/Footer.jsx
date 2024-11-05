import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
          <div className="footer bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="social-container">
                        <span className="fa-stack">
                            <a href="https://github.com/EugeniaDzadu">
                                {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                                {/* <i className="fab fa-facebook-f fa-stack-1x"></i> */}
                                <i className="fa-brands fa-github fa-xl" style={{color: "#fffafa"}}></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <Link to="http://www.linkedin.com/in/EugeniaDzadu">
                                {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                                {/* <i className="fab fa-twitter fa-stack-1x"></i> */}
                                <i className="fa-brands fa-linkedin fa-xl" style={{color: "#fffafa"}}></i>
                                
                            </Link>
                        </span>
                        <span className="fa-stack">
                            <Link to="#your-link">
                                {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                                {/* <i className="fab fa-pinterest-p fa-stack-1x"></i> */}
                                <i className="fa-brands fa-pinterest fa-xl" style={{color: "#fffafa"}}></i>
                            </Link>
                        </span>
                        <span className="fa-stack">
                            <Link href="#https://www.instagram.com/just_xquisyte/">
                                {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                                <i className="fa-brands fa-instagram fa-xl" style={{color: "#fffafa"}}></i>
                            </Link>
                        </span>
                        <span className="fa-stack">
                            <Link href="http://www.X.com/_exornam_fr">
                                {/* <i className="fas fa-circle fa-stack-2x"></i> */}
                                <i className="fa-brands fa-x fa-xl" style={{color: "#fffafa"}}></i>
                            </Link>
                        </span>
                    </div> 
                </div> 
            </div>
        </div>
    </div>  
    


    
    <div className="copyright bg-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">Copyright © <a className="no-line" href="#your-link">Eugenia Dzadu</a></p>
                </div> 
            </div> 
        </div> 

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p className="p-small">My Email <a className="no-line" href="https://themewagon.com/">edzadu6@gmail.com</a></p>
                </div> 
            </div>
        </div> 
        
    </div> 
    
    
    	
    
    <script src="./js/jquery.min.js"></script> 
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/jquery.easing.min.js"></script> 
    <script src="./js/scripts.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        </>

    )

}

export default Footer;