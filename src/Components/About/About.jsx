import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about '>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>

        <div className="about-right">
      <h3>ABOUT TRENDWAVE</h3>
      <h2>Your Social Media Strategy, Amplified</h2>
      <p>TrendWave is your go-to platform for turning social media data into actionable insights. Our mission is to empower brands, influencers, and businesses with real-time analytics that simplify decision-making and fuel engagement. With an intuitive interface and features like trend tracking, content performance metrics, and audience analysis, TrendWave helps you understand what resonates and why. We’re more than just numbers—we’re your partner in building a smarter, stronger social media strategy. Whether you're aiming to grow your audience, boost engagement, or stay ahead of trends, TrendWave is here to make it happen.</p>
    </div>
    </div>
  )
}

export default About
