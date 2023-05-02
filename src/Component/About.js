import '../App.css';
import React from 'react'

export default function About() {
  return (
    <div>
      <div className="container-xxl about my-5">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-6">
                    <div className="h-100 d-flex align-items-center justify-content-center" >
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/watch?v=RGKi6LSPDLU&t=3078s" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 pt-lg-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="bg-white rounded-top p-5 mt-lg-5">
                        <p className="fs-5 fw-medium text-primary">About Us</p>
                        <h1 className="display-6 mb-4">Welcome to our Uhdam consultancy</h1>
                        <p className="mb-4">Uhdam specializes in providing educational advice and guidance to students who wish to study abroad. We have a team of highly qualified and experienced consultants who are dedicated to helping students select the right course, university, and country that best suits their academic aspirations.</p>
                        <div className="row g-5 pt-2 mb-5">
                            <div className="col-sm-6">
                                <img className="img-fluid mb-4" src="img/icon/icon-5.png" alt=""/>
                                <h5 className="mb-3">Managed Services</h5>
                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
                            </div>
                            <div className="col-sm-6">
                                <img className="img-fluid mb-4" src="img/icon/icon-2.png" alt=""/>
                                <h5 className="mb-3">Dedicated Experts</h5>
                                <span>Clita erat ipsum et lorem et sit sed stet lorem</span>
                            </div>
                        </div>
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
