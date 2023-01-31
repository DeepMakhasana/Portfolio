import React from 'react'

const SkillSection = () => {
    return (
        <div className='container-50 height-100vh d-grid align-items-center' id='skill'>
            <div className='mb-5'>
                <div className="mb-5">
                    <h2 className='text-center'>Skill</h2>
                    <p className='text-center'>My Technical Level</p>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               <b>Frontend Technology</b> 
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body py-4">
                                <div className='flex'>
                                    <span>HTML </span>
                                    <span>CSS </span>
                                    <span>JavaScript </span>
                                    <span>React JS </span>
                                    <span>Bootstrap </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                               <b>Backend Technology</b> 
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body py-4">
                            <div className='flex'>
                                    <span>Node JS</span>
                                    <span>Express JS </span>
                                    <span>PHP </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                               <b>Database</b> 
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body py-4">
                                <div className="flex">
                                    <span>MongoDB</span>
                                    <span>MySQL </span>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SkillSection
