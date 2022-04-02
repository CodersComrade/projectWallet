import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top main-nav">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><h4 className='logo fw-bold'><span className='logo-color'>Pay</span>Cube</h4></NavLink>
                    <div className='ms-auto'>
                        <button className='btn btn-bg fw-bold'>Login / Register</button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;