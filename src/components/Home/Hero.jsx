import React from "react";

const Hero = () => {
  return (
    <div className="back absolute xl:top-[6rem] pb-20 ">
     <div className=" md:mt-[10rem] mt-[6rem] md:mx-24 mx-4 max-w-[750px] flex flex-col gap-6">
     <h2 className=" text-[16px] font-medium border-l-[6px] border-yellow-500 text-white bg-[#09124228] py-2 px-2 w-fit">Logistics & Supply Chain Solutions</h2>
      <h1 className=" md:text-[66px] text-[44px] font-bold text-white md:leading-[4.5rem] leading-[3rem]">Your Gateway to any Destination in the World</h1>
      <p className=" text-[16px] font-medium text-white">In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
      <button className=" text-[16px] font-medium bg-[#FFB629] py-3 px-6 w-fit">Explore More</button>
     </div>
    </div>
  );
};

export default Hero;
