import React from 'react'
import icon from "../../assets/Icon2.png";
import icon1 from "../../assets/Icon1.png";
import icon2 from "../../assets/Icon.png";
import back from '../../assets/Client Logo.png'
const Call = () => {
    const contact = [
        {
          img: icon,
          title: "Email contact@logistics.com",
        },
        {
          img: icon1,
          title: "Email contact@logistics.com",
        },
        {
          img: icon2,
          title: "Email contact@logistics.com",
        },
      ];
  return (
    <div className="  bg-[#172363] pt-12 w-full ">
    <div className=" flex flex-col items-center  justify-center">
      <div className=" w-[50%] flex flex-col gap-3">
       <div className=' flex flex-col items-center justify-center gap-3'>
       <h2 className="text-[16px] font-medium text-black bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 text-white">
          Contact
        </h2>
        <h1 className=" text-[33px] font-bold text-white">
          Get in touch with us
        </h1>
        <p className=" text-white text-center">
          Leverage agile frameworks to provide a robust synopsis for strategy
          foster collaborative thinking to further the overall value.
        </p>
       </div>

      <div className=" flex  items-center">
      {contact.map((item) => (
          <div className=" flex items-center gap-7">
            <img src={item.img} alt="" />
            <h1 className=" text-white">{item.title}</h1>
          </div>
        ))}
      </div>
      </div>
      <div className=" flex flex-col gap-3 w-[50%] mt-8">
        <div className=" grid grid-cols-2 gap-3">
          <input
            className=" bg-transparent border-[2px] border-[#4E5683] text-white py-3 px-4 rounded-sm"
            type="text"
            placeholder="Name"
          />
          <input
            className=" bg-transparent border-[2px] border-[#4E5683] text-white py-3 px-4 rounded-sm"
            type="text"
            placeholder="Email"
          />
          <input
            className=" bg-transparent border-[2px] border-[#4E5683] text-white py-3 px-4 rounded-sm"
            type="text"
            placeholder="Phone"
          />
          <input
            className=" bg-transparent border-[2px] border-[#4E5683] text-white py-3 px-4 rounded-sm"
            type="text"
            placeholder="City"
          />
        </div>
        <textarea
          className=" bg-transparent border-[2px] border-[#4E5683] text-white px-4 py-3 rounded-sm"
          placeholder="Message"
          rows="8"
        ></textarea>
        <button className=" mt-5  bg-[#FFB629] py-3 px-6">
          Submit Message
        </button>
      </div>
    </div>
    <img className=" w-full pt-24" src={back} alt="" />
  </div>
  )
}

export default Call