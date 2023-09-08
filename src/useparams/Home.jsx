import React from "react";

import {
    Link
} from 'react-router-dom';


function Home(){
    return(
        <div className="homee">
            <img src="https://scopeindia.org/images/snowpark-logo-new.png" alt="" ></img>
         <div className="container-xxl position-relative p-0">
            <nav  className="navbar navbar-expand-lg px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0 ">
                    <img src="https://scopeindia.org/images/scope-india-logo-bird.png" style={{ textAlign: 'center' }} alt="SCOPE INDIA"></img> <span style={{ color: "white", fontSize: "35px",fontStyle:"oblique" }}> SCOPE <span > INDIA</span></span>

                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                           <Link to="/About" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"><h4 style={{ color: "white" }} >About</h4></Link>
                        <Link to="/login" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"><h4 style={{ color: "white" }}>Login</h4></Link>
                        <Link to="/Course" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"><h4 style={{ color: "white" }}>Courses</h4></Link>

                        <div className="nav-item dropdown">

                            <div className="dropdown-menu m-0">
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>

                    </div>


                </div>
            </nav> 
            
           <div className="container-xxl py-5 bg-primary hero-header mb-5">
                <div className="container my-5 py-5 px-lg-5">
                    <div className="row g-5 py-5">
                        <div className="col-lg-6 text-center text-lg-start"> 
                             <img className="img-fluid" src="https://scopeindia.org/images/snowpark-home-slider-logo-new.png" alt="" /> 

                            <Link to="/Registration" className="btn btn-outline-light  py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Register Now</Link>
                            <Link to="/Contact" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid" src="https://scopeindia.org/images/snowpark-logo-new.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="searchModal" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content" style={{ background: "rgba(29, 29, 39, 0.7)" }}>
                    <div className="modal-header border-0">
                        <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body d-flex align-items-center justify-content-center">
                        <div className="input-group" style={{ maxWidth: "40px" }}>
                            <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword" />
                            <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        
                        <div className="d-flex align-items-center mt-4">
                            <a className="btn btn-outline-primary btn-square me-3" href="#123" style={{background:"white"}}><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="#123" style={{background:"white"}}><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-primary btn-square me-3" href="#123" style={{background:"white"}}><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-primary btn-square" href="#123" style={{background:"white"}}><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="https://scopeindia.org/images/scope-india-logo-bird.png" alt="about" />
                    </div>
                </div>
            </div>
        </div>
        <div>
         {/* <Link to="/"> <img  className="bird" src="https://scopeindia.org/images/scope-india-logo-bird.png"  style={{borderImageWidth:"5px"}} alt="go to home page"></img></Link>
       
        <img className= "iks"src="https://scopeindia.org/images/snowpark-home-slider-logo-new.png" alt="SCOPE INDIA"></img>    */}
       <div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container px-lg-5">
                <div className="row align-items-center" style={{ height: "250px" }}>
                    <div className="col-12 col-md-6">
                     <h3 className="text-white">Ready to get started</h3>
                        <h4 className="text-white">Start Your Career WIth Scope India.</h4>
                        
                    </div>
                    <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                        <img className="img-fluid mt-5" style={{ height: "250px" }} alt="letter" src="img/newsletter.png" />
                    </div>
                </div>
            </div> 
        </div>

        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6  style={{color:"white"}}>Our Services</h6>
                    <h2 className="mt-2" style={{color:"white"}}>What Solutions We Provide</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Software programming</h5>
                            <p>Software programming a profession within the computer technology field that primarily deals with writing code. Read on to get a programming and software development definition as well as a computer software programmer job description</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#123">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Mobile App Developement</h5>
                            <p>Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#123">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                           </div>
                            <h5 className="mb-3">Software Testing</h5>
                            <p>Software testing is the act of examining the artifacts and the behavior of the software under test by validation and verification. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation</p>
                            <a className="btn px-3 mt-auto mx-auto" href="#123">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Networking,Server & Cloud</h5>
                            <p>A computer network is a set of computers sharing resources located on or provided by network nodes.
                                Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user
                            </p>
                            <a className="btn px-3 mt-auto mx-auto" href="#123">Read More</a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                               
                                <Link to="/"   className="fa fa-home fa-2x"></Link>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4" style={{color:"white"}}>Our Projects</h6>
                    <h2 className="mt-2" style={{color:"white"}}>Recently Launched Projects</h2>
                </div>
                
                <div className="row g-4 portfolio-container">
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" />
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="#123">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt="" />
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="#123">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt="" />
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="#123">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt="" />
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="#123">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-07/future-artificial-intelligence.png" alt="" />
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2022-07/future-artificial-intelligence.png" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="#123">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                        <div className="position-relative rounded overflow-hidden">
                            <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt="" />
                            <div className="portfolio-overlay">
                                <a className="btn btn-light" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                <div className="mt-auto">
                                    <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                    <a className="h5 d-block text-white mt-1 mb-0" href="#123">Project Name</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="owl-carousel testimonial-carousel">
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="abc" src="img/testimonial-1.jpg" style={{ width: "50px", height: "50px" }} />
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="abc" src="img/testimonial-2.jpg" style={{ width: "50px", height: "50px" }} />
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="abc1" src="img/testimonial-3.jpg" style={{ width: "50px", height: "50px" }} />
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-transparent border rounded text-white p-4">
                        <i className="fa fa-quote-left fa-2x mb-3"></i>
                        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                        <div className="d-flex align-items-center">
                            <img className="img-fluid flex-shrink-0 rounded-circle" alt="abc2" src="img/testimonial-4.jpg" style={{ width: "50px", height: "50px" }} />
                            <div className="ps-3">
                                <h6 className="text-white mb-1">Client Name</h6>
                                <small>Profession</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              
              
              
               <i className="fa fa-home fa-2x"></i>
                  


        <div className="container-xxl py-5">
            <div className="container px-lg-5">
                <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="position-relative d-inline text-primary ps-4">Our Team</h6>
                    <h2 className="mt-2" style={{color:"white"}}>Meet Our Team Members</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{ width: "75px" }}>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#123"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#123"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#123"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#123"><i className="fab fa-linkedin-in"></i></a>
                                <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Jacob Abraham</h5>
                                <small>Network Engineer

                                    Suffix E Solutions, Kochi</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{ width: "75px" }}>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src="https://scopeindia.org/placement-students/2022/feb/rahul.jpg" alt="" />
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Rahul Raj N</h5>
                                <small>Software Developer

                                    Suffix E Solutions, Kochi</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="team-item">
                            <div className="d-flex">
                                <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{ width: "75px" }}>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#231"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#231"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#231"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square text-primary bg-white my-1" href="#231"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                                <img className="img-fluid rounded w-100" src="https://scopeindia.org/placement-students/2022/feb/varsha.jpg" alt="" />
                            </div>
                            <div className="px-4 py-3">
                                <h5 className="fw-bold m-0">Varsha R</h5>
                                <small>Software Developer

                                    Suffix E Solutions, Kochi</small>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item">
                <div className="d-flex">
                    <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style={{ width: "75px" }}>
                        <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-square text-primary bg-white my-1" href="#321"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <img className="img-fluid rounded w-100" src="https://scopeindia.org/placement-students/2022/feb/rahul.jpg" alt="" />
                </div>
                <div className="px-4 py-3">
                    <h5 className="fw-bold m-0">Antony  </h5>
                    <small>Software Developer

                        Suffix E Solutions, Kochi</small>
                </div>
            </div>
        </div>    </div>
                                <img className="img-fluid rounded w-100" src="https://scopeindia.org/placement-students/2022/feb/jacob.jpg" alt="" />
                            </div>
                        

        <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt me-3"></i> TC 25/1403/3, Athens Plaza, SS Kovil Road, Thampanoor, Trivandrum, Kerala 695001
                            Lo</p>
                        <p><i className="fa fa-phone-alt me-3"></i> 9745936073</p>
                        <p><i className="fa fa-envelope me-3"></i>info@scopeindia.org</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href="#123"><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#123"><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#123"><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#123"><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href="#123"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Popular Link</h5>
                        <Link to="/About" className="btn btn-link"> About Us</Link>
                        <Link to="/Contact" className="btn btn-link">Contact Us</Link>
                        <a className="btn btn-link" href="#123">Privacy Policy</a>
                        <a className="btn btn-link" href="#123">Terms & Condition</a>
                        <a className="btn btn-link" href="#123">Career</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <h5 className="text-white mb-4">Project Gallery</h5>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-1.jpg" alt="img" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-2.jpg" alt="img" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-3.jpg" alt="img" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-4.jpg" alt="img" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-5.jpg" alt="img" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src="img/portfolio-6.jpg" alt="img" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#123">Scope India,</a>, All Right Reserved.

                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to= "/">Home</Link>
                                <a href="#123">Cookies</a>
                                <a href="#123">Help</a>
                                <a href="#123">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#123" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up"></i></a>
        </div>
    </div>

        
    </div>
    )
}

export default Home;