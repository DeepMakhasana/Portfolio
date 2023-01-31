import React from 'react'
import { BsCalendarDate } from "react-icons/bs";

const QualificationSection = () => {
    return (
        <section className='container-50 height-100vh flex' id="qualification">
            <div className='mb-5' >
                <div className="mb-5">
                    <h2 className='text-center'>Qualification</h2>
                    <p className='text-center'>My personal journey</p>
                </div>
                <div className='row'>
                    <div className='mb-4 QualificationShadow p-4'>
                        <h5>10th</h5>
                        <p>Shree swaminarayan school, (salvav) vapi</p>
                        <span className='d-flex align-items-center'><BsCalendarDate /><b className='ps-2'>2018-2019</b></span>
                    </div>
                    <div className='mb-4 QualificationShadow p-4'>
                        <h5>Diploma in Mechanical Engineering</h5>
                        <p>Government polytechnic, Valasad</p>
                        <span className='d-flex align-items-center'><BsCalendarDate /><b className='ps-2'>2019-2022</b></span>
                    </div>
                    <div className='mb-4 QualificationShadow p-4'>
                        <h5>B-tech in Computer Engineering</h5>
                        <p>Government Engineering college, Rajkot</p>
                        <span className='d-flex align-items-center'><BsCalendarDate /><b className='ps-2'>2022-2025</b></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default QualificationSection
