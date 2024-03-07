import React from "react";
import main from "../../assets/Photo (3).png";
import main1 from "../../assets/Photo (2).png";
import main2 from "../../assets/photo (1).png";
const Experts = () => {
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
  ];
  return (
    <div className="w-[80%] mx-auto">
      <div className=" flex flex-col items-center justify-center  mt-32">
        <h2 className="text-[16px] font-medium text-black bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 ">
          The Transporters
        </h2>
        <h1 className=" text-[44px] font-bold text-center">Meet Expert Team</h1>
      </div>
      <div className=" flex items-center gap-14 mt-16">
        {expertItem.map((item) => (
          <div className="">
            <img src={item.img} alt="" />
            <div className=" bg-[#1C1F35] py-4 pr-[12rem] w-fit">
              <div className=" pl-4">
                <h1 className=" text-[22px] font-bold text-white">
                  {item.title}
                </h1>
                <h2 className=" text-white">{item.subtitle}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experts;
