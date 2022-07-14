import React from 'react'
import logo from "../images/logo.png"

function Nav() {
    return (
        <>
        <nav className="navbar navbar-expand-md">
            <img className="logo" src={logo} /> <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Movies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contribute</a>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}
export default Nav

// NavBar should include Home, Movies, and Contribute buttons to the right of the logo
// NavBar should include the SearchBar