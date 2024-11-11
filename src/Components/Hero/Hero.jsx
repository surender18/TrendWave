import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Surf the Waves of Social Media Insights</h1>
            <p>In the fast-paced world of social media, knowing what’s trending is key to making an impact. TrendWave provides real-time analytics and insights that help you understand what resonates with your audience.</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
      
    </div>
  )
}

export default Hero
