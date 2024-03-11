import React from "react";
import { Link } from "react-router-dom";
import { newItem } from "../../Data/Constant";
const NewLatest = () => {
  return (
    <div className=" w-[80%] mx-auto">
      {newItem.map((item) => (
        <>
          <div className=" md:flex-row flex flex-col items-center gap-12 mt-16">
            <div className=" flex gap-4 ">
              <div className="container">
                <img src={item.img} alt="" />
                <div className="overlay">
                  <div className="content">
                    <Link to={`/blog-single/${item.id}`}>Read More</Link>
                  </div>
                </div>
              </div>
              <div className=" flex gap-5">
                <div>
                  <img className="" src={item.img1} alt="" />
                </div>
                <div className=" w-[2px] h-full bg-[#c4c3c3]"></div>
              </div>
            </div>
            <div className=" flex flex-col gap-4 md:w-[40%]">
              <h1 className=" md:text-[33px] text-[25px] font-medium">{item.title}</h1>
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
  );
};

export default NewLatest;
