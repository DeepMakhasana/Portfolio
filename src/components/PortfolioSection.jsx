import React from 'react'
import filter from "./images/filter.png";
import aiart from "./images/aiart.png";
import portfolio from "./images/portfolio.png";
const PortfolioSection = () => {
    return (
        <section className="container d-grid align-items-center" id='portfolio'>
            <div className='mb-5'>
                <div className="mb-5">
                    <h2 className='text-center mt-4'>Portfolio</h2>
                    <p className='text-center'>Most recent works</p>
                </div>
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <a href="https://reactjs-filter.netlify.app/"  target="_blank" rel="noreferrer"><img src={filter} className="d-block w-100" alt="filter" /></a> 
                            <div className="carousel-caption d-none d-md-block">
                                <h5>React JS Filter</h5>
                                <p>Learning about map, filter and components.</p>
                                <a href="https://reactjs-filter.netlify.app/"  target="_blank" rel="noreferrer"><button className='btn'>Demo</button></a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <a href="https://aiart-427b9.web.app/"  target="_blank" rel="noreferrer"> <img src={aiart} className="d-block w-100" alt="aiart"/></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Ai Art using React and Node JS</h5>
                                <p>Learning about How to upload images and show the images.</p>
                                 <a href="https://aiart-427b9.web.app/"  target="_blank" rel="noreferrer"><button className='btn'>Demo</button></a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <a href="#home"><img src={portfolio} className="d-block w-100" alt="Deep Makhasana" /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Portfolio Website using React JS</h5>
                                <p>My Portfolio site.</p>
                                <a href='#home' className='btn'>Demo</a>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className='my-5 p-4 text-center'>
                <h3>You have a new project?</h3>
                <p>Contact me now and get discounts on your Web development projects.</p>
                <a href='#contact' className='btn'>Contact me</a>
            </div>
        </section>
    )
}

export default PortfolioSection
