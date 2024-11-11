import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about '>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>

        <div className="about-right">
      <h3>ABOUT CODECRAFT</h3>
      <h2>Craft Your Future in Coding and Technology</h2>
      <p>At CodeCraft, we empower learners with the skills to build the future of technology. Whether you're just beginning or enhancing your coding expertise, our platform provides the tools, resources, and community to help you succeed in the tech world.</p>
      <p>We believe coding is an art, and every learner is a creator. Our courses are tailored to every skill level, offering hands-on projects, expert guidance, and interactive learning modules. </p>
      <p>From web development and data science to AI and machine learning, our course catalog covers all in-demand technologies. With real-world projects and self-paced learning, you’ll gain the skills employers are looking for, all while building a portfolio that stands out.</p>
    </div>
    </div>
  )
}

export default About
