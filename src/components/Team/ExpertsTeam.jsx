import React from 'react'
import main from "../../assets/Photo (3).png";
import main1 from "../../assets/Photo (2).png";
import main2 from "../../assets/photo (1).png";
import main3 from "../../assets/Pho1.png";
import main4 from "../../assets/Pho2.png";
import main5 from "../../assets/Pho3.png";
const ExpertsTeam = () => {
    const expertItem = [
        {
          img: main,
          title: "Kathleen Smith",
          subtitle: "Designer",
        },
    
        {
          img: main1,
          title: "Kathleen Smith",
          subtitle: "Designer",
        },
    
        {
          img: main2,
          title: "Kathleen Smith",
          subtitle: "Designer",
        },

        {
            img: main3,
            title: "Kathleen Smith",
            subtitle: "Designer",
          },

          {
            img: main4,
            title: "Kathleen Smith",
            subtitle: "Designer",
          },

          {
            img: main5,
            title: "Kathleen Smith",
            subtitle: "Designer",
          },
    ]
  return (
    <div className=' grid md:grid-cols-3 grid-cols-1 gap-12 w-[80%] mx-auto mt-32'>
         {expertItem.map((item) => (
          <div className="">
            <img className=' w-full' src={item.img} alt="" />
            <div className=" bg-[#1C1F35] py-4 ">
              <div className=" pl-4">
                <h1 className=" md:text-[22px] text-[18px]  whitespace-nowrap font-bold text-white">
                  {item.title}
                </h1>
                <h2 className=" text-white">{item.subtitle}</h2>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ExpertsTeam