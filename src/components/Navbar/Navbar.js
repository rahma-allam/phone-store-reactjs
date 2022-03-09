import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';
import styles from './Navbar.module.css';

const Navbar = () =>{
    return(
        <>
        <nav className={ ` ${styles.nav} navbar navbar-expand-sm navbar-dark px-sm-5`}>
        {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */}
            <Link to="/" className='navbar-brand'>
                <img src={logo} alt="logo " />
            </Link>
            <ul className='navbar-nav align-items-center '>
                <li className='nav-item ms-5'>
                    <Link to="/" className={`${styles.navLink} nav-link`}>
                        products
                    </Link>
                </li>
            </ul>
            <Link to="cart" className='ms-auto' >
            <button className={styles.button} >
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                    <span className='ms-2'>my cart</span>
            </button>
            </Link>
        </nav>

    

        </>
    )
}

export default Navbar;