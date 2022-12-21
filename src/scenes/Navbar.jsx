import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink 
            className={`${selectedPage === lowerCasePage ? "selected-nav" : "not-selected "} selected-nav-link`}
            href={`#${lowerCasePage}`}
            onClick= {() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({selectedPage, setSelectedPage}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <div className="container flex-lg-column">
                <a className="navbar-brand mx-lg-auto" href="#">
                    <span className="h3 fw-bold d-block d-lg-none heading mb-0"><span className="mel">M</span><span className="mangco">M</span></span>
                    <img
                        src="./assets/images/person.jpg"
                        className="d-none d-lg-block rounded-circle"
                        alt=""
                    />
                </a>
                <button
                    className="navbar-toggler collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="toggler-icon top-bar"></span>
                    <span className="toggler-icon middle-bar"></span>
                    <span className="toggler-icon bottom-bar"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto flex-lg-column text-lg-center">
                        <li className="nav-item pt-lg-3">
                            <Link 
                                page = "Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </li>
                        <li className="nav-item pt-lg-3">
                            <Link 
                                page = "Services"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </li>
                        <li className="nav-item pt-lg-3">
                            <Link 
                                page = "About"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </li>
                        <li className="nav-item pt-lg-3">
                            <Link 
                                page = "Projects"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </li>
                        <li className="nav-item pt-lg-3">
                            <Link 
                                page = "Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                            />
                        </li>
                         <li className="nav-item pt-lg-3">
                            <div className="social-icons">
                                <a href="https://web.facebook.com/meljohn7" target="_blank"><i class="lab la-facebook"></i></a>
                                <a href="https://github.com/meljohnmangco" target="_blank"><i class="lab la-github"></i></a>
                                <a href="https://www.linkedin.com/in/meljohn-mangco-a37b77253/" target="_blank"><i class="lab la-linkedin"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;