import React from 'react';
import param from './images/paramComputer.png';
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
                <div className="projects">
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={param} className="card-img-top" alt="Param Computer Classes" />
                        <div className="card-body">
                            <h5 className="card-title">Param Computer Classes</h5>
                            <p className="card-text">Param Computer classes is a classes website that show course offer and author services by param classes.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, Next JS, Google API.</p>
                            <a href='https://www.paramcadcenter.com/' className='portfolio-btn'>Live site</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on July 28</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={mgs} className="card-img-top" alt="Mobile Gadget System" />
                        <div className="card-body">
                            <h5 className="card-title">Mobile Gadget System</h5>
                            <p className="card-text">Easy to find accessories, Manage Stock and when stock is less then notify, Show sells and profit.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, React JS, Node JS, Express JS, MongoDB</p>
                            <a href='https://github.com/Hiten07/Gadget_System_Hackathon' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated  on April 16</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={smra} className="card-img-top" alt="Social media Rest API" />
                        <div className="card-body">
                            <h5 className="card-title">Social media Rest API</h5>
                            <p className="card-text">Create account and login, Account detail update and delete, Follow and Unfollow, Post create, read, update and delete, Comment and Like on post</p>
                            <p><b>Technology: </b> Node JS, Express JS, MongoDB</p>
                            <a href='https://social-media-backend-nkz6.onrender.com/api/v1/' className='portfolio-btn'>Demo</a> <a href='https://github.com/DeepMakhasana/socialmedia_webapp' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on Mar 28</small></p>
                        </div>
                    </div>

                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={spices} className="card-img-top" alt="Condiment Spices" />
                        <div className="card-body">
                            <h5 className="card-title">Condiment Spices</h5>
                            <p className="card-text">Condiment sector landing page, About Section, Product details, Case Stuies, Contact page.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, React JS</p>
                            <a href='https://condiment-spices.netlify.app/' className='portfolio-btn'>Demo</a> <a href='https://github.com/DeepMakhasana/condiment_sector_site-spices' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on Mar 20</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={portfolio} className="card-img-top" alt="DeepMakhasana Portfolio website" />
                        <div className="card-body">
                            <h5 className="card-title">Portfolio website</h5>
                            <p className="card-text">Introduction, About Section, Skill Section, Qualification Section, Portfolio Section, Contact Section.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, Bootstarp</p>
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
