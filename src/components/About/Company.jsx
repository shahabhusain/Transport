import React from 'react'
import com from '../../assets/Image (10).png'
const Company = () => {
  return (
    <div className=' flex items-center mt-32 justify-around w-[80%] mx-auto'>
        <img className=' w-[50%]' src={com} alt="" />
        <div className=' flex flex-col w-[40%] gap-4'>
            <h2 className='text-[16px] font-medium bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 text-black'>About Us</h2>
            <h1 className=' text-[33px] font-bold'>Our Company Overview</h1>
            <p>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</p>
            <div className=' flex gap-4 items-center'>
                <button className=' bg-[#F4F4F4] py-3 px-6'>Our Approch</button>
                <button className=' bg-[#F4F4F4] py-3 px-6'>Our Approch</button>
                <button className=' bg-[#F4F4F4] py-3 px-6'>Our Approch</button>
            </div>
            <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem quia voluptassit.</p>
            <button className=' bg-[#1F2A69] py-3 px-6 text-white w-fit'>Learn More</button>
        </div>
    </div>
  )
}

export default Company