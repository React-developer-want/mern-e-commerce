import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import { checkUserLoggedIn, userLogout } from '../utils/checkLogin';

const Header = () => {
    const location = useLocation();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(checkUserLoggedIn());

    useEffect(()=> {
        setIsUserLoggedIn(checkUserLoggedIn());
    }, [location]);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bold" to="/">APPLE MART</NavLink>
                    {isUserLoggedIn ? (
                        <button type="button" className="btn btn-outline-danger ms-auto" onClick={()=> userLogout()}>
                            <span className="fa fa-sign-out me-1"></span> Logout
                        </button>
                    ) : (
                        <>
                            <Login/>
                            <Signup/>
                        </>
                    )}
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
