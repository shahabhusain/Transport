import React from "react";
import provide from "../../assets/provide.png";
const Provide = () => {
  return (
    <div className="relative mt-28">
      <div className="back1 py-56 "></div>
      <div className="md:mx-56 mx-4 md:flex block absolute top-[14rem] items-center justify-between bg-white px-12 py-7">
        <div className=" flex flex-col gap-4">
          <h1 className="text-[16px] font-medium text-black bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500">
            Why US
          </h1>
          <h2 className=" text-[33px] font-bold">
            We provide full range global logistics solution
          </h2>
          <p className=" text-[#666C89]">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition.{" "}
          </p>
          <p className="text-[#666C89]">
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>

          <div>
            <h1 className=" text-[19px] font-medium ">Delivery on Time</h1>
            <h1 className=" text-[19px] font-medium">Optimized Travel Cost</h1>
          </div>
        </div>
        <img src={provide} alt="" />
      </div>
      <div></div>
    </div>
  );
};

export default Provide;
