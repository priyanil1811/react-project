import React from 'react'

const Header = () => {

	return (
		<header className="page-header">
            <a href="index.html" className="logo">FASHION</a>

            <input type="checkbox" id="check" />
                <label htmlFor="check" className="nav-toggle">
                <i className="fas fa-bars"></i>
                <i className="fas fa-times"></i>
                </label>

            <nav aria-label="Primary" className="navigation">
                <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Women's Lehenga</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>

            <form className="search">
                <input type="search" name="find" id="find" placeholder="Search products" />
                <button type="button"><i className="fas fa-search"></i></button>
            </form>

            <ul className="your-products">
                <li><a href="#"><i className="far fa-heart"></i></a></li>
                <li><a href="#"><i className="fas fa-shopping-bag"></i></a></li>
            </ul>
        </header>
    )
}

export default Header