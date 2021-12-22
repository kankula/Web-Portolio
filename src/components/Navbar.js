import React from 'react'
import './Navbar.css'
import { navItem } from '../data/navData'

const Navbar = () => {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('nav');
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    return (
        
        <nav id="navbar" className='navbar'>
            <div className='max-width'>
                <div className='logo'>
                    <a href='#home'><h2>Portfoli<span>o</span></h2></a>
                </div>
                <ul className='nav-menu'>
                {navItem.map(navItem => <li key={navItem.id}><a href={navItem.id}>{navItem.title}</a></li>)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
