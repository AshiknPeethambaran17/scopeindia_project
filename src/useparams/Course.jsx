import React from "react";

import {
    Link
} from 'react-router-dom';


function Course(){
    return(
<div>
<img className= "iks"src="https://scopeindia.org/images/snowpark-home-slider-logo-new.png" alt="SCOPE INDIA"></img>  
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
                    <h2  style={{color:"white"}}>Our Courses</h2>
                    <h1 className="mt-2" style={{color:"white"}}>Software programming Courses</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                        <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div className="service-icon flex-shrink-0">
                                <i className="fa fa-home fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Software programming Courses</h5>
                            <p className="btn px-3 mt-auto mx-auto">Java Full Stack Internship
Python Full Stack Internship
PHP Full Stack Internship
.Net Core Full Stack Internship
MERN Full Stack Internship
MEAN Full Stack Internship
Android/iOS Mobile App Course in Google Flutter
Android/iOS Mobile App Course in IONIC
Website Designing Course</p>
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

</div>


    )
}

 export default Course;