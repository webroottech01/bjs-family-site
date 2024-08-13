import React from 'react';
import "./testimonials.scss";
import Slider from "react-slick";





const Testimonials = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="testimonialslider">
        <Slider {...settings}>
          <div className='testimonialMain text-start'>
            <div className='testimonialContent'>
              <div className='starRating'>
                <img src={process.env.PUBLIC_URL + "/images/starRating.png"} alt="" className='iconMain' />
              </div>
              <h3 className='testimonialTitle'>Top delivery and service throughout...</h3>
              <p className='testimonialDescription'>Excellent communication throughout, delivery guys were amazing. Friendly, helpful, and very polite. I would definitely use BJS again! Thank you, Team 46.</p>
              <p className='testimonialAuthor'>Allison - Wednesbury</p>
            </div>
            <div className='trustpilot text-end'>
            <img src={process.env.PUBLIC_URL + "/images/tp.svg"} alt="tp Logo" />
              <p>TrustScore <strong>4.6</strong> | <strong>29,473</strong> Reviews</p>
            </div>
          </div>
          <div className='testimonialMain text-start'>
            <div className='testimonialContent'>
              <div className='starRating'>
                <img src={process.env.PUBLIC_URL + "/images/starRating.png"} alt="" className='iconMain' />
              </div>
              <h3 className='testimonialTitle'>Top delivery and service throughout...</h3>
              <p className='testimonialDescription'>Excellent communication throughout, delivery guys were amazing. Friendly, helpful, and very polite. I would definitely use BJS again! Thank you, Team 46.</p>
              <p className='testimonialAuthor'>Allison - Wednesbury</p>
            </div>
            <div className='trustpilot text-end'>
              <img src={process.env.PUBLIC_URL + "/images/tp.svg"} alt="tp Logo" />
              <p>TrustScore <strong>4.6</strong> | <strong>29,473</strong> Reviews</p>
            </div>
          </div>
        </Slider>
      </div>

    </>
  )
}
export default Testimonials;