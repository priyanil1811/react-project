import React from 'react'
import {Link} from 'react-router-dom'
import 'css/header.css'

const Header = () => {

	return (
		<header className="page-header">
            <Link to="/" className="logo">FASHION</Link>

            <input type="checkbox" id="check" />
                <label htmlFor="check" className="nav-toggle">
                <i className="fas fa-bars"></i>
                <i className="fas fa-times"></i>
                </label>

            <nav aria-label="Primary" className="navigation">
                <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Women's Lehenga</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>

            <form></form>

            <ul className="your-products">
                <li><a href="#"><i className="far fa-heart"></i></a></li>
                <li><a href="#"><i className="fas fa-shopping-bag"></i></a></li>
            </ul>
        </header>
    )
}

export default Header