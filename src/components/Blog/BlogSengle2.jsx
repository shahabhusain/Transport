import React from "react";
import { newItem } from "../../Data/Constant";

const BlogSengle2 = ({ id }) => {
  const selectedProject = newItem.find((project) => project.id == id);

  return (
    <>
      <div className=" bc3 h-[522px]">
        <div className=" pt-60 pl-32 ">
          <h2 className="text-[16px] font-medium bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 text-white ">
            Blog
          </h2>
          <h1 className=" font-bold text-[44px] text-white max-w-[644px]">
            How technology can help redraw the supply chain map
          </h1>
        </div>
      </div>

      <div className=" mx-60 mt-32">
        <div>
          <h1 className=" text-[44px] font-bold">Your Logistics Solutions</h1>
          <p className=" mt-4">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam hendrerit semper feugiat id nunc.
            Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
            quis, porttitor leo Fusce lectus ex pretium...
          </p>
          <p  className=" bg-[#091242] py-12 mt-4 px-6 text-center text-white text-[22px] font-medium">
            “Digitization within transport and logistics means seamless service
            to our customers, visibility in the supply chain, and driving a more
            efficient business.”
          </p>
          <h1 className=" text-[33px] font-bold mt-12">Safest Logistics Solutions Provider With Integrity</h1>
          <p className=" mt-4">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
            quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
            porttitor leo Fusce lectus ex pretium[...]
          </p>
          <img
            className=" w-full mt-12"
            src={selectedProject?.img}
            alt=""
          />
          <p className=" mt-4">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            attempus.Phasellus at quam hendrerit semper David Warner nunc. Morbi
            quis justo velit. Duis semper lacus scelerisque, aliquam leo quis,
            porttitor leo Fusce lectus ex pretium.
          </p>
          <p className=" mt-6">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapib libero vel porttitor. Nulla tempor elit nec
            feugiat tempus Phasellus atquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogSengle2;
