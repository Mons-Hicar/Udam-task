import '../App.css';
import React from 'react'
import logo from '../img/logo.png'

export default function Header() {
  return (
    <>
   
    <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status" ></div>
    </div>
    


    
    <div className="container-fluid  text-white d-none d-lg-flex">
        <div className="container py-3">
            <div className="d-flex align-items-center">
                <a href="index.html">
                    {/* <h2 className="text-white fw-bold m-0">GrowMark</h2> */}
                    <img src={logo} alt='' />
                </a>
                <div className="nav-text ms-auto d-flex align-items-center">
                    <small className="ms-4">Home</small>
                    <small className="ms-4">About</small>
                    <small className="ms-4">Blogs</small>
                    <small className="ms-4">Blogs</small>
                    <div className="ms-3 d-flex">
                        <a className="btn user-link" href=""><i class="fa-solid fa-user"></i>User</a>
                        <a className="btn user-link" href="">Register</a>
                        
                        {/* <a className="btn btn-sm-square btn-light text-primary rounded-circle ms-2" href=""><i
                                className="fab fa-linkedin-in"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    


   
    <div className="container-fluid bg-white sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-white navbar-light p-lg-0">
                <a href="index.html" className="navbar-brand d-lg-none">
                    <h1 className="fw-bold m-0">GrowMark</h1>
                </a>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <a href="index.html" className="nav-item nav-link active">Study Abroad</a>
                        <a href="about.html" className="nav-item nav-link">University</a>
                        <a href="service.html" className="nav-item nav-link">Scholarships</a>
                        <a href="project.html" className="nav-item nav-link">Courses Guid</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu bg-light rounded-0 rounded-bottom m-0">
                                <a href="feature.html" className="dropdown-item">Features</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                <a href="quote.html" className="dropdown-item">Quotation</a>
                                <a href="404.html" className="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">Apply</a>
                    </div>
                    <div className="ms-auto d-none d-lg-block">
                        <a href="" className="btn btn-primary rounded-pill py-2 px-3"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
    
   
  )
}
