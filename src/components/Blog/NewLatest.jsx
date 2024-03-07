import React from 'react'
import main from "../../assets/Pho.png";
import calender from "../../assets/Date.png";
const NewLatest = () => {
    const newItem = [
        {
          img: main,
          img1: calender,
          title: "Inland freight a worthy solution for your business",
          subtitle:
            "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
          subtitle1:
            "Urgent transport solutions Reliable & experienced staffs Urgent transport solutions Reliable & experienced staffs",
        },
    
        {
          img: main,
          img1: calender,
          title: "Inland freight a worthy solution for your business",
          subtitle:
            "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
          subtitle1:
            "Urgent transport solutions Reliable & experienced staffs Urgent transport solutions Reliable & experienced staffs",
        },
    
        {
          img: main,
          img1: calender,
          title: "Inland freight a worthy solution for your business",
          subtitle:
            "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
          subtitle1:
            "Urgent transport solutions Reliable & experienced staffs Urgent transport solutions Reliable & experienced staffs",
        },

        {
            img: main,
            img1: calender,
            title: "Inland freight a worthy solution for your business",
            subtitle:
              "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
            subtitle1:
              "Urgent transport solutions Reliable & experienced staffs Urgent transport solutions Reliable & experienced staffs",
          },

          {
            img: main,
            img1: calender,
            title: "Inland freight a worthy solution for your business",
            subtitle:
              "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
            subtitle1:
              "Urgent transport solutions Reliable & experienced staffs Urgent transport solutions Reliable & experienced staffs",
          },

          {
            img: main,
            img1: calender,
            title: "Inland freight a worthy solution for your business",
            subtitle:
              "We are dedicated in creating added value for our customers by implementing modern technology in our work.",
            subtitle1:
              "Urgent transport solutions Reliable & experienced staffs Urgent transport solutions Reliable & experienced staffs",
          },
      ];
    
  return (
    <div className=' w-[80%] mx-auto'>
         {newItem.map((item) => (
          <>
          <div className=" flex items-center gap-12 mt-16">
            <div className=" flex gap-4 ">
              <img src={item.img} alt="" />
              <div className=" flex gap-5">
                <div>
                  <img className="" src={item.img1} alt="" />
                </div>
                <div className=" w-[2px] h-full bg-[#c4c3c3]"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-4 w-[40%]">
              <h1 className=" text-[33px] font-medium">{item.title}</h1>
              <p>{item.subtitle}</p>
              <div>
                <p>{item.subtitle1}</p>
              </div>
            </div>
            
          </div>
           <div className=" h-[2px] w-full bg-[#c4c3c3] mt-4"></div>
           </>
        ))}
    </div>
  )
}

export default NewLatest