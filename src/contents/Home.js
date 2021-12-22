import React from 'react'
import './Home.css'
import ReactTypingEffect from 'react-typing-effect'

const Home = () => {
    return (
        <section id='home' className='home'>
            <div className='max-width'>
                <div className='box-content'>
                    <div className='box-text'>
                        <div className='text-1'>Hell<span>o</span>,</div>
                        <div className='text-2'>I'<span>m</span> Kantapon Klinkulab</div>
                    </div>
                    <ReactTypingEffect text="Front End Developer" speed={80} className="text-3" />
                </div>
            </div>
        </section>
    )
}

export default Home
