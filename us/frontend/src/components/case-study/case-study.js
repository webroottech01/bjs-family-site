import React from 'react';
import "./case-study.scss";
import Slider from "react-slick";





const CaseStudy = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="caseStudy-main">
        <Slider {...settings}>
        <div className='caseColm'>
            <div className='row align-items-center colm1'>
                <div className='col-md-2 text-start ps-0'>
                    <img className='w-100' src={process.env.PUBLIC_URL + "/images/Julian-Bowen.png"} alt="" /> 
                </div>
                <div className='col-md-7 text-start weUsed'>
                    <p>"We used to have our own delivery fleet service and drivers, but the service BJS offered was a perfect fit for us in terms of coverage and automation. Outsourcing delivery to a specialist company was a logical decision and the best thing we’ve ever done."</p>
                    <p className='explain'>explains Emmett Lenaghan, Managing Director at Julian Bowen.</p>
                </div>
                <div className='col-md-3 text-end'>
                    <h3>"We’ve partnered with BJS for over <br></br>3 years now"</h3>
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-md-5'>
                    <img className='w-100' src={process.env.PUBLIC_URL + "/images/julian.jpg"} alt="" /> 
                </div>
                <div className='col-md-7 text-start ps-4'>
                    <img src={process.env.PUBLIC_URL + "/images/caseFrame.png"} alt="" /> 
                    <h4>I first saw one of the BJS vans when they made a delivery to our office </h4>
                    <p>It’s not just that BJS Home Delivery look fantastic, their coverage is great too and the automation side of things – with choice for the our customers and tracking portals – has really helped our business to grow.</p>
                    <p className='mb-4'>We have daily collections from our warehouse and with great Google reviews from our happy customers we know we are getting quality and quantity in our deliveries. </p>
                    <a href="#">www.julian-bowen.co.uk</a>
                </div>
            </div>
        </div>

        <div className='caseColm'>
            <div className='row align-items-center colm1'>
                <div className='col-md-2 text-start ps-0'>
                    <img className='w-100' src={process.env.PUBLIC_URL + "/images/Julian-Bowen.png"} alt="" /> 
                </div>
                <div className='col-md-7 text-start weUsed'>
                    <p>"We used to have our own delivery fleet service and drivers, but the service BJS offered was a perfect fit for us in terms of coverage and automation. Outsourcing delivery to a specialist company was a logical decision and the best thing we’ve ever done."</p>
                    <p className='explain'>explains Emmett Lenaghan, Managing Director at Julian Bowen.</p>
                </div>
                <div className='col-md-3 text-end'>
                    <h3>"We’ve partnered with BJS for over <br></br>3 years now"</h3>
                </div>
            </div>

            <div className='row align-items-center'>
                <div className='col-md-5'>
                    <img className='w-100' src={process.env.PUBLIC_URL + "/images/julian.jpg"} alt="" /> 
                </div>
                <div className='col-md-7 text-start ps-4'>
                    <img src={process.env.PUBLIC_URL + "/images/caseFrame.png"} alt="" /> 
                    <h4>I first saw one of the BJS vans when they made a delivery to our office </h4>
                    <p>It’s not just that BJS Home Delivery look fantastic, their coverage is great too and the automation side of things – with choice for the our customers and tracking portals – has really helped our business to grow.</p>
                    <p className='mb-4'>We have daily collections from our warehouse and with great Google reviews from our happy customers we know we are getting quality and quantity in our deliveries. </p>
                    <a href="#">www.julian-bowen.co.uk</a>
                </div>
            </div>
        </div>
        </Slider>
      </div>

    </>
  )
}
export default CaseStudy;