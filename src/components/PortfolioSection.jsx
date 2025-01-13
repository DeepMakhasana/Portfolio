import React from 'react';
import car from './images/car-lerners.png';
import param from './images/paramComputer.png';
import mgs from "./images/mgs.png";
import smra from "./images/smra.svg";
import spices from "./images/spices.png";
import courseLearnify from "./images/course-learnify.png";
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
                        <img src={courseLearnify} className="card-img-top" alt="video course platform" />
                        <div className="card-body">
                            <h5 className="card-title">Course Learnify</h5>
                            <p className="card-text">Developed Course Learnify, a full-stack web platform for creator to selling video courses. <b>Technology: </b> Next.js - Typescrip, Tailwind CSS, shadcn/ui, React.js, Electron, Express.js, Prisma, PostgreSQL</p>
                            <div className='flex gap-0 flex-wrap gap-2 justify-content-start'>
                                <a target="_blank" href='https://www.paramcadcenter.com/learn' className='portfolio-btn'>Learner side</a>
                                <a target="_blank" href='https://github.com/DeepMakhasana/vcp-autoupdater/releases/tag/1.0.2' className='portfolio-btn'>Creator side</a>
                                <a target="_blank" href='https://github.com/DeepMakhasana/vcp-client' className='portfolio-btn'>Frontend</a>
                                <a target="_blank" href='https://github.com/DeepMakhasana/vcp-server' className='portfolio-btn'>Backend</a>
                            </div>

                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on Jan 13, 2025</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={param} className="card-img-top" alt="Param Computer Classes" />
                        <div className="card-body">
                            <h5 className="card-title">Param Computer Classes</h5>
                            <p className="card-text">Param Computer classes is a classes website that show course offer and author services by param classes.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, Next JS, Google API.</p>
                            <a target="_blank" href='https://www.paramcadcenter.com/' className='portfolio-btn'>Live site</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on July 28</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={car} className="card-img-top" alt="Param Computer Classes" />
                        <div className="card-body">
                            <h5 className="card-title">Car Learner's - <small className="text-body-secondary" style={{ color: "#818181" }}>Currently Under development</small></h5>
                            <p className="card-text">Full solution for who want to learn driving and also for driving school.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, ReactJS, Next JS, Typescript, NodeJS, ExpressJS, PostgreSQL.</p>
                            <div className='flex gap-0 flex-wrap gap-2 justify-content-start'>
                                <a target="_blank" href='https://car-learners-frontend.vercel.app/' className='portfolio-btn'>Live site</a>
                                <a target="_blank" href='https://www.figma.com/file/X0oeoYFLDFftUDQxY2yZIX/car-ui?type=design&node-id=0-1&mode=design&t=AEU7YUGBJGrSFIoC-0' className='portfolio-btn mr-2'>Design</a>
                                <a target="_blank" href='https://github.com/DeepMakhasana/car-learners-frontend' className='portfolio-btn'>Code</a>
                            </div>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on April 12</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={mgs} className="card-img-top" alt="Mobile Gadget System" />
                        <div className="card-body">
                            <h5 className="card-title">Mobile Gadget System</h5>
                            <p className="card-text">Easy to find accessories, Manage Stock and when stock is less then notify, Show sells and profit.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, React JS, Node JS, Express JS, MongoDB</p>
                            <a target="_blank" href='https://github.com/Hiten07/Gadget_System_Hackathon' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated  on April 16</small></p>
                        </div>
                    </div>
                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={smra} className="card-img-top" alt="Social media Rest API" />
                        <div className="card-body">
                            <h5 className="card-title">Social media Rest API</h5>
                            <p className="card-text">Create account and login, Account detail update and delete, Follow and Unfollow, Post create, read, update and delete, Comment and Like on post</p>
                            <p><b>Technology: </b> Node JS, Express JS, MongoDB</p>
                            <a target="_blank" href='https://social-media-backend-nkz6.onrender.com/api/v1/' className='portfolio-btn'>Demo</a> <a target="_blank" href='https://github.com/DeepMakhasana/socialmedia_webapp' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on Mar 28</small></p>
                        </div>
                    </div>

                    <div className="card mb-3 col-12 col-lg-5">
                        <img src={spices} className="card-img-top" alt="Condiment Spices" />
                        <div className="card-body">
                            <h5 className="card-title">Condiment Spices</h5>
                            <p className="card-text">Condiment sector landing page, About Section, Product details, Case Stuies, Contact page.</p>
                            <p><b>Technology: </b> HTML, CSS, JS, React JS</p>
                            <a target="_blank" href='https://condiment-spices.netlify.app/' className='portfolio-btn'>Demo</a> <a target="_blank" href='https://github.com/DeepMakhasana/condiment_sector_site-spices' className='portfolio-btn'>Code</a>
                            <p className="card-text mt-2"><small className="text-body-secondary" style={{ color: "#818181" }}>Last updated on Mar 20</small></p>
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
