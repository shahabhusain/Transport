import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactStars from 'react-stars';
import icon from '../../assets/icon22.png';
import men from '../../assets/User.png';

const Client = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
    // Add your logic for handling the rating change here
  };

  return (
   <div className=" w-[80%] mx-auto  mt-12">
    <h1 className="text-[16px] font-medium text-black bg-[#09124228] py-2 px-2 w-fit  border-l-[6px] border-yellow-500 my-4">Testimonial</h1>
    <h2 className=" text-[33px] font-bold">What Our Customer Say</h2>
     <div className="slider-container mt-16">
      <Slider {...settings}>
        <div className="bg-[#F4F4F4] py-3 px-4">
          <div className="flex  items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={men} alt="" />
              <div>
                <h1 className=" text-[22px] font-bold">Kathleen Smith</h1>
                <h1>Fuel Company</h1>
              </div>
            </div>
            <img src={icon} alt="" />
          </div>
          <p className=" text-[#666C89] italic mt-4">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
        </div>

        <div className="bg-[#091242] py-3 px-4">
          <div className="flex  items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={men} alt="" />
              <div>
                <h1 className="text-[22px] font-bold text-white">Kathleen Smith</h1>
                <h1 className=" text-white">Fuel Company</h1>
              </div>
            </div>
            <img src={icon} alt="" />
          </div>
          <p className="italic mt-4 text-white">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
        </div>


        <div className="bg-[#F4F4F4] py-3 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={men} alt="" />
              <div>
                <h1 className="text-[22px] font-bold ">Kathleen Smith</h1>
                <h1 >Fuel Company</h1>
              </div>
            </div>
            <img src={icon} alt="" />
          </div>
          <p className="italic mt-4">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            color2={'#ffd700'} />
        </div>
      </Slider>
    </div>
   </div>
  );
};

export default Client;
