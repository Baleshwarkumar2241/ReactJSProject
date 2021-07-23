import React from "react" 
import { NavLink } from "react-router-dom";

const Navbar = () =>{ 
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 my-0  shadow fixed-top">
        <div className="container-fluid ms-5">
            <a className="navbar-brand ml-4 mt-0 pt-0" href="#">
                <div className='pt-0 mt-0 logo2'>
                    <small className='sig p-0 m-0'>ATLASSIAN</small>
                    <h1 className="fs-4 m-0 p-0 text-dark">Bitbucket</h1>
                </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ms-3 ">                    
                    <li className="nav-item dropdown drop ">
                        <a className="nav-link dropdown-toggle text-info fs-5 fw-normal" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Why Bitbucket</a>
                        <ul className="dropdown-menu mt-2 drop1"aria-labelledby="navbarScrollingDropdown">
                            <li><a className="dropdown-item fw-bold" href="#">FEATURES</a></li>
                            <li><a className="dropdown-item" href="#">CI/CD</a></li>
                            
                            <li><a className="dropdown-item" href="#">Cloud Security</a></li>
                            <li><a className="dropdown-item" href="#">Code review </a></li>
                            <li>
                                <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item fw-bold" href="#">INTEGRATIONS </a></li>
                            <li><a className="dropdown-item" href="#">Jira integrations </a></li>
                            <li><a className="dropdown-item" href="#">Trello integrations </a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown drop">
                        <a className="nav-link dropdown-toggle text-info fs-5 fw-normal" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Product Guide</a>
                        <ul className="dropdown-menu mt-2 drop1 "aria-labelledby="navbarScrollingDropdown">
                            <li><a className="dropdown-item" href="#">GET STARTED</a></li>
                            <li><a className="dropdown-item" href="#">Brief overview of Bitbucket</a></li>
                            <li><a className="dropdown-item" href="#">Meet the Bitbucket interface</a></li>
                            <li><a className="dropdown-item" href="#">Four starting steps</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-info fs-5 fw-normal" aria-current="page" href="#">Self Hosting</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-info fs-5 fw-normal" href="#">Pricing</a>
                    </li>
                    
                </ul>
                <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll me-2">
                    <li className="nav-item">
                        <a className="nav-link text-info  fs-5 fw-normal px-3" href="#">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5 fw-normal badge bg-primary mt-2 get ml-3" href="#">Get in free</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </> 
    );
};
export default Navbar;