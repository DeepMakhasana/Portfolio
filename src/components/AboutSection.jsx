import React from 'react'
import pic from './images/about.jpg'
import download from './DeepMakhasana.pdf'

const AboutSection = () => {
    return (
        <div className='container height-100vh' id='about'>
            <div className="about">
                <div className="mb-4">
                    <h2 className='text-center'>About Me</h2>
                    <p className='text-center'>My Introduction</p>
                </div>
                <div className="row">
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 about-img'>
                        <img src={pic} className="img-fluid" alt="about" />
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6 about-info'>
                        <div>
                            <p>Hello, I am Deep Makhasana and I am Full stack developer. Currently study in GEC, Rajkot in computer Engineering department and completed diploma from GP, Valsad. I enjoy working with Web technology as a Frontend and Backend developer.</p>
                            <a href={download} download className='btn'>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutSection
