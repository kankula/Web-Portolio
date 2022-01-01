import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <section id='projects' className='projects'>
            <div className='max-width'>
                <div className='box'>
                    <h1>My Project</h1>
                    <div className='box-content'>
                        <div className='box-item'>
                            <div className='imgIm'>
                                <img src='https://via.placeholder.com/400x300'></img>
                            </div>
                            <div className='btn'>
                                <button>Open Web</button>
                                <button>Open Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
