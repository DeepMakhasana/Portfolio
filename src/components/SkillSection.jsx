import React from 'react'
import html from './images/html.svg';
import css from './images/css.svg';
import js from './images/js.svg';
import react from './images/react.svg';
import bootstrap from './images/bootstrap.svg';
import node from './images/node.svg';
import php from './images/php.svg';
import github from './images/github.svg';
import next from './images/next.svg';
import express from './images/expressjs.svg';
import mongodb from './images/mongodb.svg';
import mysql from './images/mysql.svg';

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
                        <div className='my-4'><img src={github} alt="mysql" /></div>
                    </div>
                    <div className="col-6 col-md-3 my-4 d-flex flex-column justify-content-center align-items-center">
                        <div className='my-4'><img src={js} alt="JS" /></div>
                        <div className='my-4'><img src={node} alt="node" /></div>
                        <div className='my-4'><img src={mysql} alt="mysql" /></div>
                    </div>
                    <div className="col-6 col-md-3 my-4 d-flex flex-column justify-content-center align-items-center">
                        <div className='my-4'><img src={bootstrap} alt="JS" /></div>
                        <div className='my-4'><img src={express} alt="express" /></div>
                        <div className='my-4'><img src={php} alt="php" /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SkillSection
