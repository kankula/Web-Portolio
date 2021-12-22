import React from 'react'
import './Skills.css'
import { skills } from '../data/skillsData'
const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <div className='max-width'>
                <div className='box'>
                    <h1>My Skill</h1>
                    <div className='box-content'>
                        {skills.map(skill => <div key={skill.id} className='box-item'>
                            <i className={skill.icon}></i>
                            <div className='skillName'>{skill.title}</div>
                        </div>
                        )}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills
