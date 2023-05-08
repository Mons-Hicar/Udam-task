import React from 'react'
import '../App.css';
import banner from "../img/banner.png";
import Header from "./Header";
import Footer from "./Footer";

export default function index() {
  return (
      <div>
        <Header/>
      <div className="banner container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={banner} alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7 text-start">
                                    <p className="fs-4 text-white animated slideInRight">Welcome to
                                        <strong> UHDAM</strong>
                                    </p>
                                    <h1 className="display-1 text-white mb-4 animated slideInRight">Your Education Consultancy</h1>
                                    <a href=""
                                        className="btn btn-primary rounded-pill py-3 px-5 animated slideInRight">Explore
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={banner} alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-lg-7 text-end">
                                    <p className="fs-4 text-white animated slideInLeft">Welcome to <strong> UHDAM</strong>
                                    </p>
                                    <h1 className="display-1 text-white mb-5 animated slideInLeft">Your Education Consultancy</h1>
                                    <a href=""
                                        className="btn btn-primary rounded-pill py-3 px-5 animated slideInLeft">Explore
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
   

    {/* dream hero text */}
    <div className='dream'>
      <h1 className='dreams-tittle'>Land at your dream college with uhdam</h1>
      <h3 className='best-guid'>Best guide for studying abroad</h3>
      <h5 className='achieve'>Achieve your dream of studying abroad with us</h5>
    </div>
    {/* dream hero text */}

    {/* about */}

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

    <Footer/>
    </div>
  )
}
