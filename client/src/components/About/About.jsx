import React from 'react'
import logo from '../../assets/about.jpeg';
import './About.css';

function About() {
  return (
    <div>
    <div className="about-section">
    <h1>About Us Page</h1>
    <img className='image' src={logo} alt="Logo" />
    <br></br>
    <p 
    style={{color:'white'}}>To inspire girls at a young age 
    we want to create a platform that transforms the way
    girls perceive code education and software engineering. The game is designed
    to teach girls practical, real-world coding skills via highly gamified, story-driven gameplay.
    This game should be able to teach basics of programming and development languages </p>
    <br>
    </br>
  </div>
  
  </div>
  )
}

export default About