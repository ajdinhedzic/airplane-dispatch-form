import React from 'react';
import logo from '../cias_logo.png'

export const Navbar = () =>
    (<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="logo"  style={{height: '60px', width: '152px'}}/>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav mr-auto"></ul>
        </div>
    </nav>);