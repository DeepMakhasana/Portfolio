import React from 'react'

const FooterSection = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <div className="container w-100 d-flex justify-content-center align-items-center">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#home" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link px-2 text-muted">About</a></li>
                    <li className="nav-item"><a href="#skill" className="nav-link px-2 text-muted">Skill</a></li>
                    <li className="nav-item"><a href="#qualification" className="nav-link px-2 text-muted">Qualification</a></li>
                    <li className="nav-item"><a href="#portfolio" className="nav-link px-2 text-muted">Portfolio</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link px-2 text-muted">Contact me</a></li>
                </ul>
                <p className="text-center text-muted">&copy; {year} Deep Makhasana</p>
            </footer>
        </div>
    )
}

export default FooterSection
