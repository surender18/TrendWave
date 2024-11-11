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
              <p>Choosing to pursue my degree at CodeCraft was One of the best decisions I've ever made. The Supporive community ,state of the art facilities and commitment to acedemic excellence have truly exceeded my expectations.

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
              <p>Choosing to pursue my degree at CodeCraft was One of the best decisions I've ever made. The Supporive community ,state of the art facilities and commitment to acedemic excellence have truly exceeded my expectations.

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
              <p>Choosing to pursue my degree at CodeCraft was One of the best decisions I've ever made. The Supporive community ,state of the art facilities and commitment to acedemic excellence have truly exceeded my expectations.

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
              <p>Choosing to pursue my degree at CodeCraft was One of the best decisions I've ever made. The Supporive community ,state of the art facilities and commitment to acedemic excellence have truly exceeded my expectations.

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