import React from 'react'
import logo from '../assets/Logo.png'
const Footer = () => {
  return (
   <div className=' bg-[#091242] pt-14 pb-7 mt-32'>
     <div className=' md:mx-32 mx-12'>
      <div className=' md:items-center justify-between flex flex-col md:flex-row gap-3'>
      <div className=' text-white '>
      <img src={logo} alt="" />
      <h1>About Us</h1>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
     </div>
     <div className=' text-white '>
     <h1  className=' text-[22px] font-bold'>Pages</h1>
      <h1>About Us</h1>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
     </div>
     <div className=' text-white '>
     <h1  className=' text-[22px] font-bold'>Utility</h1>
      <h1>About Us</h1>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
     </div>

     <div className=' text-white '>
     <h1  className=' text-[22px] font-bold'>Subscribe</h1>
      <h1>About Us</h1>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
      <p>Project</p>
     </div>
      </div>
    </div>
   </div>
  )
}

export default Footer