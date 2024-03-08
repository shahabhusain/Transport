import React from "react";
import { IoOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ProjectItem } from "../../Data/Constant"; 

const ProjectOverview = () => {
  return (
    <div className="grid grid-cols-3 gap-12 w-[80%] mx-auto mt-32">
      {ProjectItem.map((item) => (
        <div
          className="container hover:scale-[1.1] transition-all duration-300 ease-in-out"
          key={item.id}
        >
          <img className="cursor-pointer" src={item.img} alt="" />
          <div className="overlay">
            <div className="content">
              <Link to={`/project-single/${item.id}`} className="text-[42px]">
                <IoOpenOutline />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectOverview;
