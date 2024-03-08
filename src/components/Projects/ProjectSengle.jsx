import React from "react";
import { ProjectItem } from "../../Data/Constant";
import { FaArrowRight } from "react-icons/fa6";
import back from "../../assets/Back.mp4";
const ProjectSengle = ({ id }) => {
  const selectedProject = ProjectItem.find((project) => project.id == id);

  return (
    <>
      <div className="bc1 h-[522px]">
        <div className="pt-60 pl-32">
          <h2 className="text-[16px] font-medium bg-[#09124228] py-2 px-2 w-fit border-l-[6px] border-yellow-500 text-white">
            Warehouse Transportation
          </h2>
          <h1 className="font-bold text-[44px] text-white">
            Air Cargo Transportation
          </h1>
        </div>
      </div>
      <div className=" mt-20">
        <div className=" flex items-center gap-14 ml-60 ">
          <img
            className=" w-[666px] h-[344px]"
            src={selectedProject?.img}
            alt=""
          />
          <div>
            <h1 className=" text-[33px] font-bold">Project Detail</h1>
            <div className=" flex flex-col gap-2 mt-4">
              <p className=" flex items-center gap-4">
                <span className=" text-[22px] font-medium">Costumer</span> :{" "}
                <span>David Manner</span>
              </p>
              <p className=" flex items-center gap-4">
                <span className=" text-[22px] font-medium">Category</span> :{" "}
                <span>Warehouse Transportaion</span>
              </p>
              <p className=" flex items-center gap-4">
                <span className=" text-[22px] font-medium">Date </span> :{" "}
                <span>12 December, 2022</span>
              </p>
              <p className=" flex items-center gap-4">
                <span className=" text-[22px] font-medium">Tags </span> :{" "}
                <span>Life Style Travel , Best Delivery</span>
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-12 mx-60">
          <h1 className=" text-[55px] font-bold">Wharehouse Transportation</h1>
          <p>
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id
            nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam
            leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit
            sed, faucibus vel elit Integer adipiscing erat eget risus
            sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada
            sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec
            tincidunt nunc posuere.
          </p>
          <div className=" flex flex-col gap-4 mt-12">
            <div className=" flex items-center gap-4 ">
              <span>
                <FaArrowRight />
              </span>
              <h1 className=" text-[16px] font-semibold">
                National Customer Service Center – 24 hours a day.
              </h1>
            </div>
            <div className=" flex items-center gap-4 ">
              <span>
                <FaArrowRight />
              </span>
              <h1 className=" text-[16px] font-semibold">
                National Customer Service Center – 24 hours a day.
              </h1>
            </div>
            <div className=" flex items-center gap-4 ">
              <span>
                <FaArrowRight />
              </span>
              <h1 className=" text-[16px] font-semibold">
                National Customer Service Center – 24 hours a day.
              </h1>
            </div>
            <div className=" flex items-center gap-4 ">
              <span>
                <FaArrowRight />
              </span>
              <h1 className=" text-[16px] font-semibold">
                National Customer Service Center – 24 hours a day.
              </h1>
            </div>
          </div>
        </div>

        <div className=" mx-60 mt-12">
          <h1 className=" text-[55px] font-bold">Our Project Transportation</h1>
          <p className=" mt-4">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
            Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit nec
            feugiat tempus.Phasellus at quam id elit hendrerit semper feugiat id
            nunc. Morbi quis justo velit. Duis semper lacus scelerisque, aliquam
            leo quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit
            sed, faucibus vel elit Integer adipiscing erat eget risus
            sollicitudin pellentesque non erat. Maecenas nibh dolor malesuada
            sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec
            tincidunt nunc posuere.
          </p>

          <div className=" mt-12">
            <video loop muted controls src={back}></video>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSengle;
