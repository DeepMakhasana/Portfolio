import React from 'react'
import pic from './images/about.jpg'
import download from './DeepMakhasana.pdf'

const AboutSection = () => {
    return (
        <div className='container height-100vh mb-5' id='about'>
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
                        <div className='px-1'>
                            <p>Hello, I am Deep Makhasana, a Full Stack Developer. I am currently studying at GEC, Rajkot, in the Computer Engineering department, and I have completed a diploma from GP, Valsad. I enjoy working with web technologies as a React.js, Next.js, and Node.js developer.</p>
                            <a href={download} download className='btn'>Download CV</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutSection
