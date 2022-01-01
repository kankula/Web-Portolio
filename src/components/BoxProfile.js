import React from 'react'
import './BoxProfile.css'
import Profile from '../img/profile1.jpg'
const BoxProfile = () => {
    return (
        <div className='box-profile'>
            <div className='imgPro'>
                <img src={Profile} alt='../img/profile1.jpg' className={Profile}></img>
            </div>
            <div className='profileTitle'>
                <h3><span>Name:</span>Kantapon Klinkulab</h3>
                <h3><span>Age:</span>23</h3>
                <h3><span>Gender:</span>Male</h3>
                <h3><span>Birthday:</span>November 9, 1998</h3>
            </div>
        </div>
    )
}

export default BoxProfile
