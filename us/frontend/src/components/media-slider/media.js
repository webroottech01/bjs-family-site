import React from 'react';
import "./media.scss";
import Slider from "react-slick";





const Media = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="mediaslidercompo">
        <Slider {...settings}>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <div>
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </div>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
          <div className='mediaLogo d-flex'>
            <img src='./images/media1.png' alt="" className='mediaMainlogo' />
            <dic className="">
              <h3>New SDC trailers ordered</h3>
              <p>West Midlands based BJS Haulage has confirmed an order for 80 new SDC Freespan Curtainsiders in response...</p>
              <div className='d-flex justfy-content-start align-items-center gap-2'>
                <img src='./images/enterNext.png' alt="" className='enterNextlogo' />
                <a href="#">Global Trailer Mag</a>
              </div>
            </dic>
          </div>
        </Slider>
      </div>
    </>
  )
}
export default Media;