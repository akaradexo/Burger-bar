import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaHamburger} from 'react-icons/fa';


const Navbar = () => {
    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <Link to="/" className="brand-logo"> <FaHamburger  size="15" style={{color: "red",display:"inline-flex", margin:"0 10px"}}/>Burger Bar</Link>
                <ul className="right">
                        <li><Link to="/" className="link">Shop</Link></li>
                        <li><Link to="/cart" className="link">My cart</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
