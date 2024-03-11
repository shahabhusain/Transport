import React from 'react'

const Pricing = () => {
  return (
   <div className=' flex items-center justify-center flex-col mt-32 '>
    <h2 className='text-[16px] font-medium bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 text-black '>Pricing</h2>
    <h1 className=' md:text-[44px] text-[33px] font-bold'>Our Best Pricing</h1>
     <div className=' flex flex-col md:flex-row items-center justify-around mx-24 mt-16 '>
      <div className=' bg-[#F4F4F4] py-24 px-20 flex flex-col gap-4'>
            <h1 className=' text-[16px] font-medium'>Basics</h1>
            <h2 className=''><span className=' text-[53px] font-bold'>$39</span>/month</h2>
            <div className=' flex flex-col gap-3'>
            <p className=' border-b-[1px] border-[#aeadad]'>Single Truck</p>
            <p className=' border-b-[1px] border-[#aeadad]'>Full Insurance</p>
            <p className=' border-b-[1px] border-[#aeadad]'>500 Km</p>
            <p className=' border-b-[1px] border-[#aeadad]'>Real-time rate shopping</p>
        </div>
            <button className=' bg-[#1F2A69] py-3 px-6 text-white'>Choose Plane</button>
         </div>

         <div className=' bg-[#1F2A69] py-24 px-20 flex flex-col gap-4'>
            <h1 className=' text-[16px] text-white font-medium'>Basics</h1>
            <h2 className=' text-white'><span className=' text-[53px] font-bold'>$39</span>/month</h2>
            <div className=' flex flex-col gap-3 text-white'>
            <p className=' border-b-[1px] border-[#aeadad]'>Single Truck</p>
            <p className=' border-b-[1px] border-[#aeadad]'>Full Insurance</p>
            <p className=' border-b-[1px] border-[#aeadad]'>500 Km</p>
            <p className=' border-b-[1px] border-[#aeadad]'>Real-time rate shopping</p>
        </div>
            <button className=' bg-yellow-600 py-3 px-6 text-white'>Choose Plane</button>
         </div>


         <div className=' bg-[#F4F4F4] py-24 px-20 flex flex-col gap-4'>
            <h1 className=' text-[16px] font-medium'>Basics</h1>
            <h2 className=''><span className=' text-[53px] font-bold'>$39</span>/month</h2>
            <div className=' flex flex-col gap-3'>
            <p className=' border-b-[1px] border-[#aeadad]'>Single Truck</p>
            <p className=' border-b-[1px] border-[#aeadad]'>Full Insurance</p>
            <p className=' border-b-[1px] border-[#aeadad]'>500 Km</p>
            <p className=' border-b-[1px] border-[#aeadad]'>Real-time rate shopping</p>
        </div>
            <button className=' bg-[#1F2A69] py-3 px-6 text-white'>Choose Plane</button>
         </div>

        
    </div>
   </div>
  )
}

export default Pricing