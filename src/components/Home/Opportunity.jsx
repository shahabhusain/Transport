import React from "react";
import opportunity from "../../assets/Image (5).png";
import icon from "../../assets/iconn.png";
const Opportunity = () => {
  const opporItem = [
    {
      img: icon,
      title:"Safe Package"
    },
    {
      img: icon,
      title:"Safe Package"
    },
    {
      img: icon,
      title:"Safe Package"
    },
    {
      img: icon,
      title:"Safe Package"
    },
    {
      img: icon,
      title:"Safe Package"
    },
    {
      img: icon,
      title:"Safe Package"
    },
  ]
  return (
    <div className=" flex items-center justify-center mt-32 bg-[#F4F4F4] ">
      <img className=" w-[50%]" src={opportunity} alt="" />
      <div className=" w-[50%] mx-12 flex flex-col gap-5">
        <h2 className="text-[16px] font-medium text-black bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500">
          Why Choose
        </h2>
        <h1 className=" text-[34px] font-bold">
          We create opportunity to reach potential
        </h1>
        <p>
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value
          proposition.{" "}
        </p>
         <div className=" grid grid-cols-2 gap-4">
         {
          opporItem.map((item)=>(
            <div className=" flex items-center gap-3">
          <img src={item.img} alt="" />
          <h1>{item.title}</h1>
        </div>
          ))
         }
         </div>
      </div>
    </div>
  );
};

export default Opportunity;
