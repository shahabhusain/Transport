import React, { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import logo from "../assets/Logo.png";
import icon from "../assets/Icon.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [openMenuItems, setOpenMenuItems] = useState({});

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const header = [
    {
      img: icon,
      title: "Mon - Sat 9.00 - 18.00",
      subtitle: "Sunday Closed",
    },
    {
      img: icon1,
      title: "Email",
      subtitle: "contact@logistics.com",
    },
    {
      img: icon2,
      title: "Call Us",
      subtitle: "(00) 112 365 489",
    },
  ];

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Project", link: "/project" },
    { name: "Blog", link: "/blog" },
    { name: "Team", link: "/team" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleMenuItem = (index) => {
    setOpenMenuItems((prevOpenMenuItems) => {
      const newOpenMenuItems = {};
  
      // Close all menu items
      Object.keys(prevOpenMenuItems).forEach((key) => {
        newOpenMenuItems[key] = false;
      });
  
      // Toggle the clicked menu item
      newOpenMenuItems[index] = !prevOpenMenuItems[index];
  
      return newOpenMenuItems;
    });
  };

  return (
    <>
      <div className="xl:block fixed hidden bg-[#091242] w-full py-4 z-[100]">
        <div className="flex items-center justify-between mx-24">
          <img src={logo} alt="Logo" />
          <div className="flex flex-wrap items-center gap-8">
            {header.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <img src={item.img} alt={item.title} />
                <div>
                  <h1 className="text-white text-sm">{item.title}</h1>
                  <h1 className="text-white text-sm">{item.subtitle}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
      className={`${
        isActive ? "bg-[#0000009d]" : "bg-[#2e43bd28]"
      } md:block hidden py-5 z-[100] md:fixed w-full mt-24 relative`}
    >
      <div className="flex items-center justify-between mx-24">
        <ul className="flex items-center gap-6">
          {menuItems.map((item, index) => (
            <div key={index}>
              <Link
                onClick={() => toggleMenuItem(index)}
                to={item.link}
                className={`text-md  cursor-pointer ${
                  openMenuItems[index] ? "border-b-yellow-500 text-yellow-500 font-bold border-b-[2px] " : " text-white"
                }`}
              >
                {item.name}{" "}
                {!openMenuItems[index] && (
                  <span className="border-[#fff] border-l-[2px] ml-2 rounded-full"></span>
                )}
              </Link>
            </div>
          ))}
        </ul>
        <button className="bg-white py-4 px-6 text-black font-semibold">
          Request Quote
        </button>
      </div>
    </div>

      <div className="bg-[#09124228] md:hidden block py-5 z-[100] absolute w-full">
        <div className="flex items-center justify-between mx-4">
          <img src={logo} alt="Logo" />
          <span className="text-white text-[22px]">
            <IoMdMenu />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
