import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
      <Program />
      <About/>
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus />
      <Title subTitle='TESTIMONIALS' title='what Student Says' />
      <Testimonial />
      <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact />
      <Footer />


      </div>
    </div>
  )
}
 
export default App
