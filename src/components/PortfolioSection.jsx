import React from 'react'
import mgs from "./images/mgs.png";
import smra from "./images/smra.svg";
import spices from "./images/spices.png";
import portfolio from "./images/portfolio.png";
const PortfolioSection = () => {
    return (
        <section className="container d-grid align-items-center" id='portfolio'>
            <div className='mb-5'>
                <div className="mb-5">
                    <h2 className='text-center mt-4'>Portfolio</h2>
                    <p className='text-center'>Most recent works</p>
                </div>
                {/*<div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <a href="https://reactjs-filter.netlify.app/" target="_blank" rel="noreferrer"><img src={filter} className="d-block w-100" alt="filter" /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>React JS Filter</h5>
                                <p>Learning about map, filter and components.</p>
                                <a href="https://reactjs-filter.netlify.app/" target="_blank" rel="noreferrer"><button className='btn'>Demo</button></a>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <a href="https://aiart-427b9.web.app/" target="_blank" rel="noreferrer"> <img src={aiart} className="d-block w-100" alt="aiart" /></a>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Ai Art using React and Node JS</h5>
                                <p>Learning about How to upload images and show the images.</p>
                                <a href="https://aiart-427b9.web.app/" target="_blank" rel="noreferrer"><button className='btn'>Demo</button></a>
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
                </div> */}
                <div className="projects">
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={mgs} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Mobile Gadget System</h5>
                            <p className="card-text">Easy to find accessories, Manage Stock and when stock is less then notify, Show sells and profit.</p>
                            <p className=""><b>Technology: </b> HTML, CSS, JS, React JS, Node JS, Express JS, MongoDB</p>
                            <a href='https://github.com/Hiten07/Gadget_System_Hackathon' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated 2 day ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={smra} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Social media Rest API</h5>
                            <p className="card-text">Create account and login, Account detail update and delete, Follow and Unfollow, Post create, read, update and delete, Comment and Like on post</p>
                            <p className=""><b>Technology: </b> Node JS, Express JS, MongoDB</p>
                            <a href='https://social-media-backend-nkz6.onrender.com/api/v1/' className='portfolio-btn'>Demo</a> <a href='https://github.com/DeepMakhasana/socialmedia_webapp' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated 3 week ago</small></p>
                        </div>
                    </div>

                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={spices} className="card-img-top" alt="spices" />
                        <div className="card-body">
                            <h5 className="card-title">Condiment Spices</h5>
                            <p className="card-text">Condiment sector landing page, About Section, Product details, Case Stuies, Contact page.</p>
                            <p className=""><b>Technology: </b> HTML, CSS, JS, React JS</p>
                            <a href='https://condiment-spices.netlify.app/' className='portfolio-btn'>Demo</a> <a href='https://github.com/DeepMakhasana/condiment_sector_site-spices' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on Mar 20</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={portfolio} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Portfolio website</h5>
                            <p className="card-text">Introduction, About Section, Skill Section, Qualification Section, Portfolio Section, Contact Section.</p>
                            <p className=""><b>Technology: </b> HTML, CSS, JS, Bootstarp</p>
                            <a href='https://deepmakhasana.netlify.app/' className='portfolio-btn'>Demo</a> <a href='https://github.com/DeepMakhasana/Portfolio' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on May 13</small></p>
                        </div>
                    </div>
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
