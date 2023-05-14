import React from 'react'
import { AiOutlineAlignRight } from "react-icons/ai";

const Navbar = () => {
    return (
        <header className='container my-3'>
            <h1>Deep<span className="logo"> Makhasana</span></h1>
            <nav>
                <div className="toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <AiOutlineAlignRight />
                </div>

                <div class="offcanvas offcanvas-end navbar-font" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel"><h3 style={{ fontSize: "2rem" }}>Deep<span className="logo">Makhasana</span></h3></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul id='ulList'>
                            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#home">Home</a></li>
                            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#about">About</a></li>
                            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#skill">Skill</a></li>
                            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#qualification">Qualification</a></li>
                            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#portfolio">Portfolio</a></li>
                            <li data-bs-dismiss="offcanvas" aria-label="Close"><a href="#contact">Contact me</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
