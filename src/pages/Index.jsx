import { Link } from "react-router-dom";
import Footer from "../components/Footer";

import { HashLink } from "react-router-hash-link";
import Contacts from "../components/Contacts";

function Index() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
          {/* <Link className="navbar-brand logo-image" to="/">
            <img src="images/logo.svg" alt="alternative" />
          </Link> */}

          <Link className="navbar-brand logo-text page-scroll" to="/">
            Eugenia Dzadu
          </Link>

          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <HashLink className="nav-link page-scroll" smooth to="#header">
                  Home <span className="sr-only">(current)</span>
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link page-scroll" smooth to="#about">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink
                  className="nav-link page-scroll"
                  smooth
                  to="#services"
                >
                  Services
                </HashLink>
              </li>
              {/* <li className="nav-item dropdown">
                <HashLink
                  className="nav-link dropdown-toggle"
                  smooth
                  to="#"
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Drop
                </HashLink>
                <div className="dropdown-menu" aria-labelledby="dropdown01">
                  <Link className="dropdown-item page-scroll" to="/privacy">
                    Privacy Policy
                  </Link>
                </div>
              </li> */}
              <li className="nav-item">
                <HashLink className="nav-link page-scroll" smooth to="#contact">
                  Contact
                </HashLink>
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
      </nav>

      <header id="header" className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h1 className="h1-large">
                  I love to create beautiful and efficient websites
                </h1>
                <HashLink
                  className="btn-solid-lg page-scroll"
                  smooth
                  to="#about"
                >
                  Discover
                </HashLink>
                <HashLink
                  className="btn-outline-lg page-scroll"
                  smooth
                  to="#contact"
                >
                  <i className="fas fa-user"></i>Contact Me
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="about" className="basic-1 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-container first">
                <h2 style={{ fontSize: '20px' }}>Hi there I'm Eugenia,</h2>
                <p style={{ fontSize: '18px' }}>
                  And I love to create beautiful and efficient websites for my
                  customers. I love going through the entire process with the
                  customer from concept, to design and then development and
                  launch
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-container second">
              <div className="time" style={{ fontSize: '18px' }}>2022 - PRESENT</div>
                <h6 style={{ fontSize: '20px' }}> A Passionate Frontend Developer</h6>
                <p style={{ fontSize: '18px' }}>Currently working independently on various web projects.</p>
                <p style={{ fontSize: '18px' }}>Successfully delivered a high-impact project for a major digital agency.</p>
                <p style={{ fontSize: '18px' }}>Gained experience as a Junior Web Designer for a small web agency and several e-commerce firms.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div id="services" className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Offered services</h2>
              <p className="p-heading">
                Web development have been my bread and butter for
                more 3 years. During that time I've discovered that I can
                help startups and companies with the following services
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="text-box">
                <i className="far fa-gem"></i>
                <h4>DESIGN</h4>
                <p>
                  Successful online projects start with good design. It
                  establishes a solid foundation for future development and
                  allows for long term growth
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-box">
                <i className="fas fa-code"></i>
                <h4>DEVELOPMENT</h4>
                <p>
                  I can code my own designs or even use the customer's design as
                  base. My focus is to generate clean code that's well
                  structured for reliability
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="split">
        <div className="area-1"></div>
        <div className="area-2 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container">
                  <h2>Why Work With Me</h2>
                  <p>
                    I am a great communicator and love to invest the necessary
                    time to understand the customer's problem very well
                  </p>
                  <br />
                  <br />
                  <br />
                  
                  <h5>DEVELOPMENT SKILLS</h5>
                  <p>
                    I am familiar and work on a daily basis with HTML, CSS,
                    JavaScript, Bootstrap and other modern frameworks
                  </p>

                  
                  <br />
                  <br />


                  <div
  className="icons-container"
  style={{
    padding: '20px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  }}
>
  <i
    className="fa-brands fa-react fa-2xl"
    style={{ color: '#61DBFB' }} // React color
  ></i>
  <i
    className="fab fa-html5 fa-2xl"
    style={{ color: '#E34F26' }} // HTML5 color
  ></i>
  <i
    className="fa-brands fa-css3 fa-2xl"
    style={{ color: '#264de4' }} // CSS3 color
  ></i>
  <i
    className="fa-brands fa-bootstrap fa-2xl"
    style={{ color: '#563d7c' }} // Bootstrap color
  ></i>
  <i
    className="fa-brands fa-js fa-2xl"
    style={{ color: '#F7DF1E' }} // JavaScript yellow color
  ></i>
  <i
    className="fa-brands fa-vuejs fa-2xl"
    style={{ color: '#42b883' }} // Vue.js color
  ></i>
  <img
    src="images/details ejs-icon.png"
    alt="alternative"
    style={{ width: '50px', height: '50px', marginTop: '-20px'}}
  />
</div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="basic-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Delivered projects</h2>
              <p className="p-heading">
                Listed below are some of the most representative projects I've
                worked on. They range from basic web design for presentation
                sites to advanced web development for online shops
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/Fruitables.png"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Fruits and vegetables, <strong>Project:</strong> web
                  design fruits vendors for
                  marketing campaigns{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div>
              {/* <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/project-2.jpg"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Carsrepo, <strong>Project:</strong>{" "}
                  designed and developed modern platform for purchasing second
                  hand cars online{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div> */}
              {/* <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/project-3.jpg"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Truevideo, <strong>Project:</strong>{" "}
                  created a custom video editing and upload web app for this
                  awesome team{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div> */}
              {/* <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/project-4.jpg"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Evolosim, <strong>Project:</strong>{" "}
                  complete redesign of their corporate website and platform
                  update for their online shop{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="basic-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/Furnitures.png"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Zigoland, <strong>Project:</strong>{" "}
                  started a new website from ground up for a new product{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/Tictactoe.png"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Visodream, <strong>Project:</strong>{" "}
                  developed a new forum for the Visodream community{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/XQUISYTE DELICIOSA.png"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Primoday, <strong>Project:</strong>{" "}
                  complete redesign of their corporate website and platform{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <div className="col-lg-4">
              <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/work-4.jpg"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Nextlite, <strong>Project:</strong>{" "}
                  created a custom video editing and upload web app{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div>
            </div> */}
            {/* <div className="col-lg-4">
              <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/work-5.jpg"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Syncnow, <strong>Project:</strong> web
                  design for their corporate websites and landing pages{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div>
            </div> */}
            {/* <div className="col-lg-4">
              <div className="text-container">
                <div className="image-container">
                  <Link to="/project">
                    <img
                      className="img-fluid"
                      src="images/work-6.jpg"
                      alt="alternative"
                    />
                  </Link>
                </div>
                <p>
                  <strong>For:</strong> Shifter, <strong>Project:</strong>{" "}
                  started a new website from ground up for a new product{" "}
                  <Link className="blue" to="/project">
                    details
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <hr className="section-divider" />
          </div>
        </div>
      </div>

      <div className="accordion-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="h2-heading">Frequent questions</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <button
                      className="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      How can I contact you and quickly get a quote for my
                      online project?
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      The best way to reach me is through the contact form of by
                      messaging me on my social media accounts. For a fast quote
                      make sure your provide many project details
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you create designs from the ground up or you are using
                      themes?
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      The best way to reach me is through the contact form of by
                      messaging me on my social media accounts. For a fast quote
                      make sure your provide many project details
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Will I receive any included maintenance or warranty after
                      project delivery?
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      The best way to reach me is through the contact form of by
                      messaging me on my social media accounts. For a fast quote
                      make sure your provide many project details
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      If something goes wrong with the project can I have my
                      money back?
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      The best way to reach me is through the contact form of by
                      messaging me on my social media accounts. For a fast quote
                      make sure your provide many project details
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFive">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What's your preferred method of payment and do you need an
                      advance?
                    </button>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      The best way to reach me is through the contact form of by
                      messaging me on my social media accounts. For a fast quote
                      make sure your provide many project details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

       <Contacts />
      <Footer />
    </>
  );
}

export default Index;
