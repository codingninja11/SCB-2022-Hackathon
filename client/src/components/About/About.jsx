import React from 'react'
import logo from '../../assets/about.jpeg';
import './About.css';

function About() {
  return (
    <div>
    <div class="about-section">
    <h1>About Us Page</h1>
    <img src={logo} alt="Logo"  class="responsive"/>
    <br></br>
    <p>To inspire girls at a young age </p>
    <p>we want to create a platform that transforms the way</p>
    <p>girls perceive code education and software engineering. The game is designed</p>
    <p>to teach girls practical, real-world coding skills via highly gamified, story-driven gameplay.</p>
    <p>This game should be able to teach basics of programming and development languages</p>
    <br>
    </br>
  </div>
  </div>
  )
}

export default About