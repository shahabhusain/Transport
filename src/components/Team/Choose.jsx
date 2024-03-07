import React from 'react'
import main from '../../assets/Team.png'
import icon from '../../assets/Ic1.png'
import icon1 from '../../assets/Ic2.png'
const Choose = () => {
  return (
    <div className=' flex items-center justify-between w-[80%] mx-auto gap-12 mt-32'>
        <img className=' w-[50%]' src={main} alt="" />
        <div className=' flex flex-col gap-5'>
            <h2 className='text-[16px] font-medium bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 text-black'>About Us</h2>
            <h1 className=' text-[44px] font-bold'>Why Choose Us</h1>
            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
            <div className=' flex items-center gap-4'>
                <div>
                    <img src={icon} alt="" />
                    <h1 className=' text-[22px] font-medium'>Our Vission</h1>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy foster.</p>
                </div>

                <div>
                    <img src={icon1} alt="" />
                    <h1 className=' text-[22px] font-medium'>Estimate Shipping</h1>
                    <p>Leverage agile frameworks to provide a robust synopsis for strategy foster.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose