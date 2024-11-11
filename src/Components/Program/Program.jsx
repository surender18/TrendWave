import React from 'react'
import './Program.css'

import program_1 from'../../assets/program1.png'
import program_2 from'../../assets/program-2.jpeg'
import program_3 from'../../assets/program3.png'
import program_icon_1 from '../../assets/whatsapp.png'
import program_icon_2 from '../../assets/linkedin.png'
import program_icon_3 from '../../assets/twitter.png'
const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Whatsapp</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>LinkedIn</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Twitter(X)</p>
        </div>
      </div>
    </div>
  )
}

export default Program
