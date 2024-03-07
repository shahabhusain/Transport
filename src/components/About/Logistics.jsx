import React from 'react'
import logic from '../../assets/safe.png'
const Logistics = () => {
    const logicItem = [
        {
            img:logic,
            title:"Sea Transport Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients"
        },

        {
            img:logic,
            title:"Sea Transport Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients"
        },

        {
            img:logic,
            title:"Sea Transport Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients"
        },

        {
            img:logic,
            title:"Sea Transport Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients"
        },

        {
            img:logic,
            title:"Sea Transport Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients"
        },

        {
            img:logic,
            title:"Sea Transport Services",
            subtitle:"Following the quality of our service thus having gained trust of our many clients"
        },
    ]
  return (
    <div className=' w-[80%] mx-auto'>
        <div className=' flex flex-col items-center justify-center mt-32'>
        <h2 className='text-[16px] font-medium bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 text-black'>What We Do</h2>
        <h1 className=' text-[33px] font-bold'>Our Logistics Services</h1>
        </div>
       <div className=' grid grid-cols-3 gap-12 mt-16'>
        {
            logicItem.map((item)=>(
                <div>
                <img src={item.img} alt="" />
                <h1 className=' text-[22px] font-bold'>{item.title}</h1>
                <p>{item.subtitle}.</p>
            </div>
            ))
        }
        
       </div>
      <div className=' flex items-center justify-center mt-16'>
      <button className=' bg-[#1F2A69] py-3 px-6 text-white'>More Work</button>
      </div>
    </div>
  )
}

export default Logistics