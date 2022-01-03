import React from 'react'
import './Navbar.css'
import { navItem } from '../data/navData'

const Navbar = () => {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('nav');
        header.classList.toggle("sticky", window.scrollY > 0);
    });

    const menuToggle = () => {
        document.getElementById('nav-menu').classList.toggle('active')
    }
    const removeActive = () => {
        document.getElementById('nav-menu').classList.remove('active')
    }
    return (
        
        <nav id="navbar" className='navbar'>
            <div className='max-width'>
                <div className='logo'>
                    <a href='#home' onClick={removeActive}><h2>Portfoli<span>o</span></h2></a>
                </div>
                <i className="fas fa-align-justify" onClick={menuToggle}></i>
                <ul id='nav-menu' className='nav-menu'>
                {navItem.map(navItem => <li key={navItem.id}><a href={navItem.id} onClick={removeActive}>{navItem.title}</a></li>)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
