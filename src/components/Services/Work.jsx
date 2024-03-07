import React from 'react'
import icon from '../../assets/iconn.png'
import main from '../../assets/main.png'
const Work = () => {
    const WorkItem = [
        {
            img: icon,
            title:"Warehousing Services",
            subtitle:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking"
        },

        {
            img: icon,
            title:"Warehousing Services",
            subtitle:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking"
        },

        {
            img: icon,
            title:"Warehousing Services",
            subtitle:"Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking"
        },

    ] 
  return (
    <div className=' mt-20 w-[80%] mx-auto'>
        <div className=' flex-col flex items-center justify-center'>
        <h2 className='text-[16px] font-medium bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 text-black'>Our Goodness</h2>
        <h1 className=' text-[44px] font-bold'>How We Works</h1>
        </div>
        <div className=' flex items-center justify-around gap-12 mt-16'>
            <img className=' w-[50%]' src={main} alt="" />
         <div className=' flex flex-col gap-3 w-[50%]'>
         {
            WorkItem.map((item)=>(
                <div className=' flex items-center gap-3'>
                <img src={item.img} alt="" />
                <div>
                    <h1 className=' text-[22px] font-medium'>{item.title}</h1>
                    <p>{item.subtitle} </p>
                </div>
            </div>
            ))
           }
         </div>
        </div>
    </div>
  )
}

export default Work