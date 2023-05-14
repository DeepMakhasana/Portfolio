import React from 'react'
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";

const ContactSection = () => {
    return (
        <div className='container my-5 d-flex align-items-center justify-content-center' id="contact">
            <div>
                <div>
                    <h2 className='text-center'>Contact me</h2>
                    <p className='text-center'>Get in touch</p>
                </div>
                <div className='row px-4'>
                    <div className='col-12 my-3'>
                        <div className='d-flex align-items-center'>
                            <span className='h3 pe-2' style={{ color: "#e84d2e" }}><AiOutlinePhone /></span>
                            <h5 style={{ letterSpacing: "2px" }}>Call me</h5>
                        </div>
                        <p style={{ letterSpacing: "2px" }}>(+91) 7043447395</p>
                    </div>
                    <div className='col-12 mb-3'>
                        <div className='d-flex align-items-center'>
                            <span className='h3 pe-2' style={{ color: "#e84d2e" }}><AiOutlineMail /></span>
                            <h5 style={{ letterSpacing: "2px" }}>E-mail</h5>
                        </div>
                        <p className='w-100' style={{ letterSpacing: "2px" }}>deepmakhasana1013@gmail.com</p>
                    </div>
                    <div className='col-12 mb-3'>
                        <div className='d-flex align-items-center'>
                            <span className='h3 pe-2' style={{ color: "#e84d2e" }}><AiOutlineEnvironment /></span>
                            <h5 style={{ letterSpacing: "2px" }}>Location</h5>
                        </div>
                        <p style={{ letterSpacing: "2px" }}>Vapi, Gujarat, India</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
