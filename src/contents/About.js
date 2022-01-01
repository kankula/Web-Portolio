import React from 'react'
import './About.css'
import BoxProfile from '../components/BoxProfile'
import Educational from '../components/Educational'
import Contact from '../components/Contact'
const About = () => {
    return (
        <section id='about' className='about'>
            <div className='max-width'>
                <div className='box-content'>
                    <BoxProfile />
                    <div>
                        <Educational />
                        <Contact />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About
