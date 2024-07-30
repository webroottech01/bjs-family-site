import React from "react";
import "./md-message.scss"; 

function MdMessage() {
    return (
        <div className="md-message">
        <div className="container-md">
          <div className="row align-items-center">
            <div className="col-lg-3 md-quote">
              <img src={process.env.PUBLIC_URL + "/images/Path 741.png"} alt="Path 741 Logo" />
              <h3>I believe in a divine flow and I believe in our team. </h3>
            </div>
            <div className="col-lg-6 md-xm-mid">
              <p>Who we are as people, our values and emotional needs, shouldn’t be ignored within the world of work. 
                There is no division in our hearts before you start work and after you sit at your desk or the cab of a truck or van.<br></br><br></br> 
                By respecting our team and treating them with compassion and kindness they are better able to continue 
                that conduct to the benefit of everyone they encounter, including my customers. It is what has set us apart 
                as a business.</p>
            </div>
            <div className="col-lg-3 md-info">
                <img src={process.env.PUBLIC_URL + "/images/Harry MH1_2044_CMYK.jpg"} alt="Harry MH1 2044 CMYK Logo" />
                <div className="md-profile">
                  <h5><b>Harinder Singh</b></h5>
                <h5>Managing Director</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MdMessage;