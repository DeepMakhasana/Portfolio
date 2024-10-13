import React from 'react'
import photo from './images/DeepMakhasana.png'

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const heroSection = () => {
    return (
        <section className='container' id='home'>
            <div className="row  hero-section">
                <div className="col col-md-6 col-lg-6 col-xl-6 hero-section-info">
                    <p>
                        Hello, I am
                    </p>
                    <h2>
                        Deep Makhasana
                    </h2>
                    <h4>
                        Full Stack Developer
                    </h4>
                    <p className='para'>
                        Intermediate level experience in Web development with quality work.
                    </p>
                    <a href='#contact' className='btn'>Contact</a>
                    <div className="socilmedia_icon">
                        <a href="https://www.github.com/deepmakhasana" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                        <a href="https://www.linkedin.com/in/deep-makhasana-769346163" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                    </div>
                </div>
                <div className="col col-md-6 col-lg-6 col-xl-6 hero-section-img">
                    <img src={photo} style={{ width: "300px", height: "300px" }} alt="Deep Makhasana" />
                </div>
            </div>
        </section>
    )
}

export default heroSection
