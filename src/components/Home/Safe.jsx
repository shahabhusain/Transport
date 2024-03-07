import React from "react";
import safe from '../../assets/safe.png'
import safe1 from '../../assets/safe1.png'
import safe2 from '../../assets/safe2.png'
import safe3 from '../../assets/safe3.svg'
const Safe = () => {
  const sateItem = [
    {
      img: safe,
      title:"Sea Transport Services",
      subtitle:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
      img: safe1,
      title:"Sea Transport Services",
      subtitle:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
      img: safe2,
      title:"Sea Transport Services",
      subtitle:"Following the quality of our service thus having gained trust of our many clients."
    },
    {
      img: safe3,
      title:"Sea Transport Services",
      subtitle:"Following the quality of our service thus having gained trust of our many clients."
    },
  ]
  return (
    <div className=" md:mx-24 mx-4 md:flex block items-center gap-14 md:pt-20 pt-[38rem]">
      <div>
        <p className="text-[16px] font-medium text-black bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500"> What We Do</p>
      <h1 className=" text-[42px] font-bold">Safe & Reliable Cargo Solutions</h1>
      </div>
    <div className=" grid md:grid-cols-2 grid-cols-1 gap-24 md:mt-0 mt-11">
    {
      sateItem.map((item)=>(
        <div className=" flex items-center gap-12">
        <img src={item.img} alt="" />
        <div>
          <h1 className=" text-[23px] font-semibold">{item.title}</h1>
          <h1 className=" text-[16px] font-medium">{item.subtitle}.</h1>
        </div>
      </div>
      ))
     }
    </div>
    </div>
  );
};

export default Safe;
