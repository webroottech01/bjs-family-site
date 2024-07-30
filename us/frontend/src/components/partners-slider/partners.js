import React from 'react';
import "./partners.scss";
import Slider from "react-slick";

const Partners = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="partnerslider">
      <Slider {...settings}>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/richersounds.png"} alt="Richer Sounds" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/oliverbonas.png"} alt="Oliver Bonas" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/wayfair.png"} alt="Wayfair" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/tikamoon.png"} alt="Tikamoon" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/sweeek.png"} alt="Sweeek" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/richersounds.png"} alt="Richer Sounds" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/oliverbonas.png"} alt="Oliver Bonas" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/wayfair.png"} alt="Wayfair" className='partnerMainlogo' />
        </div>
        <div className='partnersLogo'>
          <img src={process.env.PUBLIC_URL + "/images/tikamoon.png"} alt="Tikamoon" className='partnerMainlogo' />
        </div>
      </Slider>
    </div>
  );
}

export default Partners;
