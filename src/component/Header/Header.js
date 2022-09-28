import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
       <nav className='header'>
        <img src={logo} alt=""></img>
        <div>
            <a href="/Order">Order</a>
            <a href="/orderReview">Order Review</a>
            <a href="/ManageInventory">Manage Inventory</a>
            <a href="/login">Login</a>
        </div>
       </nav>
    );
};

export default Header;