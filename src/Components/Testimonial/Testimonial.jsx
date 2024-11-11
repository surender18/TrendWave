import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonial = () => {
  const slider = useRef();
  let tx=0;
  const slideforward=()=>{
    if(tx>-50){
      tx-=25
    }
    slider.current.style.transform=`translateX(${tx}%)`

  }
  const slidebackward=()=>{
    if(tx<0){
      tx+=25
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }


  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn' onClick={slideforward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slidebackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Negi</h3>
                  <span>Delhi,India</span>
                </div>
              </div>
              <p>TrendWave has completely transformed the way we approach social media. The real-time analytics make it easy to see what’s working and adjust our strategy on the go. We’ve been able to double our engagement by understanding exactly what our audience loves. It’s like having a team of social media experts right at our fingertips!"

              </p>
            </div>
          </li>
          
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Rohit Merotha</h3>
                  <span>Delhi,India</span>
                </div>
              </div>
              <p>"As a small business, we always struggled with complex analytics tools that were hard to understand. TrendWave is so user-friendly, yet incredibly powerful. Now, we can see the trends and numbers that actually matter, helping us make smarter decisions and connect more effectively with our audience. Highly recommend it to anyone looking to boost their social impact."

              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Cherry</h3>
                  <span>Delhi,India</span>
                </div>
              </div>
              <p>"TrendWave doesn’t just give you numbers—it gives you insight. The real-time tracking and performance metrics have been invaluable in shaping our content strategy. We love how easy it is to track our top-performing posts and understand why they work. TrendWave has become an essential part of our toolkit."

              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Alia </h3>
                  <span>Delhi,India</span>
                </div>
              </div>
              <p>"As a content creator, it’s crucial to stay ahead of trends, and TrendWave makes it effortless. I can now monitor my content’s performance live, see what my audience engages with most, and refine my approach. Thanks to TrendWave, I’ve seen a significant increase in followers and interactions, and I feel more connected to my community than ever."

              </p>
            </div>
          </li>


        </ul>

      </div>
    </div>
  )
}

export default Testimonial
// 1:45:00