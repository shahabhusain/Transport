import React from "react";
import transport from "../../assets/1.png";
import transport1 from "../../assets/2.png";
import transport2 from "../../assets/3.png";
import transport3 from "../../assets/4.png";
import transport4 from "../../assets/5.png";
const Transport = () => {
  const transportItem = [
    {
      img: transport,
      title: "Liquid Transportation",
      subtitle: "Premium Tankers",
    },

    {
      img: transport1,
      title: "Liquid Transportation",
      subtitle: "Premium Tankers",
    },

    {
      img: transport2,
      title: "Liquid Transportation",
      subtitle: "Premium Tankers",
    },

    {
      img: transport3,
      title: "Liquid Transportation",
      subtitle: "Premium Tankers",
    },

    {
      img: transport4,
      title: "Liquid Transportation",
      subtitle: "Premium Tankers",
    },
  ];
  return (
    <div className=" md:mx-24 mx-4 md:mt-80 mt-[35rem] flex flex-col items-center justify-center">
      <h1 className=" md:text-[42px] text-[33px] font-bold text-center">
        Transport Across th World
      </h1>
      <div className=" md:flex block items-center gap-11 mt-24">
        {transportItem.map((item) => (
          <div className=" relative text-white">
            <img src={item.img} alt="" />
            <div className=" absolute md:top-[14rem] top-[20rem] md:left-[2.5rem] left-[5rem] flex flex-col items-center justify-center">
              <h1 className=" text-[16px] font-medium">{item.title}</h1>
              <p className=" text-[12px] font-normal text-[#FFB629] ">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className=" bg-[#1F2A69] text-white py-3 px-6 md:mt-24 mt-6">More Work</button>
    </div>
  );
};

export default Transport;
