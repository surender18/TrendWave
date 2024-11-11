import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Component = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5d87ce93-b5d7-4db2-b48e-4cb1bbe3570a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">

            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@trendwave.in</li>
                <li><img src={phone_icon} alt="" />+91 999995555</li>
                <li><img src={location_icon} alt="" />18,Rajouri Garden ,Delhi</li>
            </ul>
        </div>
        <div className="contact-col">

          <form onSubmit={onSubmit}>
            <label >Your name</label>
            <input type="text" name='name' placeholder='Enter Your name' required/>
            <label >Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your contact number' required />
            <label >Write your messages here</label>
            <textarea name="message " rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
          </form>
          <span> {result}</span>
        </div>
      
    </div>
  )
}

export default Component
