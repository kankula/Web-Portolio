import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-content'>
            <div className="icon-social">
                <a href="https://web.facebook.com/masato.yuki.967/" target="_blank"><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/krapowgaikailatte/" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://github.com/kankula" target="_blank"><i className="fab fa-github"></i></a>
            </div>
            <div className="sub-contact">
                <h2>Phone: <span>(+66)063-3151153</span></h2>
                <h2>Line: <span>kan_kkb</span></h2>
                <h2>Email: <span>kiri0944@gmail.com</span></h2>
            </div>
        </div>
    )
}

export default Contact
