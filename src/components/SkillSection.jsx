import React from 'react'
import html from './images/html.svg';
import css from './images/css.svg';
import js from './images/js.svg';
import react from './images/react.svg';
import tailwindcss from './images/tailwindcss.svg';
import node from './images/node.svg';
import redis from './images/redis.svg';
import github from './images/github.svg';
import next from './images/next.svg';
import express from './images/expressjs.svg';
import mongodb from './images/mongodb.svg';
import postgresql from './images/postgresql.svg';

const SkillSection = () => {
    return (
        <div className='container-50 d-grid align-items-center' id='skill'>
            <div className='mb-5'>
                <div className="mb-5">
                    <h2 className='text-center'>Skill</h2>
                    <p className='text-center'>My Technical Level</p>
                </div>
                <div className="row skill justify-content-center align-items-center" >
                    <div className="col-6 col-md-3 my-4 flex-column d-flex justify-content-center align-items-center">
                        <div className='my-4' ><img src={html} alt="HTML" /></div>
                        <div className='my-4' ><img src={react} alt="react" /></div>
                        <div className='my-4' ><img src={mongodb} alt="mongodb" /></div>
                    </div>
                    <div className="col-6 col-md-3 my-4 d-flex flex-column justify-content-center align-items-center">
                        <div className='my-4'><img src={css} alt="CSS" /></div>
                        <div className='my-4'><img src={next} alt="next" /></div>
                        <div className='my-4'><img src={github} alt="github" /></div>
                    </div>
                    <div className="col-6 col-md-3 my-4 d-flex flex-column justify-content-center align-items-center">
                        <div className='my-4'><img src={js} alt="JS" /></div>
                        <div className='my-4'><img src={node} alt="node" /></div>
                        <div className='my-4'><img src={postgresql} alt="postgresql" /></div>
                    </div>
                    <div className="col-6 col-md-3 my-4 d-flex flex-column justify-content-center align-items-center">
                        <div className='my-4'><img src={tailwindcss} alt="tailwindcss" /></div>
                        <div className='my-4'><img src={express} alt="express" /></div>
                        <div className='my-4'><img src={redis} alt="redis" /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SkillSection
