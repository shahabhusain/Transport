import React from 'react'
import main from '../../assets/10.png'
import main1 from '../../assets/11.png'
import main2 from '../../assets/12.png'
import main3 from '../../assets/13.png'
import main4 from '../../assets/14.png'
import main5 from '../../assets/15.png'
const ProjectOverview = () => {
  return (
    <div className=' grid grid-cols-3 gap-12 w-[80%] mx-auto mt-32'>
        <img className=' cursor-pointer' src={main} alt="" />
        <img className=' cursor-pointer' src={main1} alt="" />
        <img className=' cursor-pointer' src={main2} alt="" />
        <img className=' cursor-pointer' src={main3} alt="" />
        <img className=' cursor-pointer' src={main4} alt="" />
        <img className=' cursor-pointer' src={main5} alt="" />
    </div>
  )
}

export default ProjectOverview