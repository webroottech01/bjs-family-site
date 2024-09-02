import React from "react";
import "./ttus-cards.scss";

const TTusCards = () => {
  return (
    <>
      <div className="ttus-cards">
        <div className="row">
          <div className="ttus-card">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/homedelivery.png"} alt=""
              />  
            </div>
            <div className="ttcard-phone d-flex">
                <img src={process.env.PUBLIC_URL + '/images/phonebjs.png'} alt="" />
              <a href="tel:01922 324 090">01922 324 090</a>
            </div>
            <button shape="rounded" type="button">
              Request quote
            </button>
            <div className="ttcard-email d-flex">
            <img src={process.env.PUBLIC_URL + '/images/mailbjs.png'} alt="" />
              <a href="mailto:sales@bjshomedelivery.com">Send us an email</a>
            </div>
            <div className="ttcard-location d-flex">
            <img src={process.env.PUBLIC_URL + '/images/locationbjs.png'} alt="" />
              <div>
                <div>BJS House, Unit 2, Bull Lane,</div>
                <div>Western Way,</div>
                <div>Wednesbury</div>
                <div>WS10 8RR</div>
                
              </div>
            </div>
            <a className="ttus-map" href="https://goo.gl/maps/wNk9KocP4Q3baBuC8" target="_blank">
                  <span>
                    <img src={process.env.PUBLIC_URL + '/images/locationgoogle.png'} alt="" />
                  </span>
                  <span>View on Google Maps</span>
                </a>
          </div>
          <div className="ttus-card">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/bjsextratt.png"} alt=""
              /> 
            </div>
            <div className="ttcard-phone d-flex">
                <img src={process.env.PUBLIC_URL + '/images/phonebjs.png'} alt="" />
              <a href="tel:01922 308 093">01922 308 093</a>
            </div>
            <button shape="rounded" type="button">
              Request quote
            </button>
            <div className="ttcard-email d-flex">
            <img src={process.env.PUBLIC_URL + '/images/mailbjs.png'} alt="" />
              <a href="mailto:extra@bjsfamily.com">Send us an email</a>
            </div>
            <div className="ttcard-location d-flex">
            <img src={process.env.PUBLIC_URL + '/images/locationbjs.png'} alt="" />
              <div>
                <div>BJS House, Unit 2, Bull Lane,</div>
                <div>Western Way,</div>
                <div>Wednesbury</div>
                <div>WS10 8RR</div>
                
              </div>
            </div>
            <a className="ttus-map" href="https://goo.gl/maps/wNk9KocP4Q3baBuC8" target="_blank">
                  <span>
                    <img src={process.env.PUBLIC_URL + '/images/locationgoogle.png'} alt="" />
                  </span>
                  <span>View on Google Maps</span>
                </a>
          </div>
          <div className="ttus-card">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/bjshaulagett.png"} alt=""
              /> 
            </div>
            <div className="ttcard-phone d-flex">
                <img src={process.env.PUBLIC_URL + '/images/phonebjs.png'} alt="" />
              <a href="tel:0333 344 1172">0333 344 1172</a>
            </div>
            <button shape="rounded" type="button">
              Request quote
            </button>
            <div className="ttcard-email d-flex">
            <img src={process.env.PUBLIC_URL + '/images/mailbjs.png'} alt="" />
              <a href="mailto:sales@bjshaulage.com">Send us an email</a>
            </div>
            <div className="ttcard-location d-flex">
            <img src={process.env.PUBLIC_URL + '/images/locationbjs.png'} alt="" />
              <div>
                <div>Boxworks, Unit 7</div>
                <div>Western Way,</div>
                <div>Wednesbury</div>
                <div>WS10 7BW</div>
                
              </div>
            </div>
            <a className="ttus-map" href="https://goo.gl/maps/AaeWVJd96Nq7iJTh7" target="_blank">
                  <span>
                    <img src={process.env.PUBLIC_URL + '/images/locationgoogle.png'} alt="" />
                  </span>
                  <span>View on Google Maps</span>
                </a>
          </div>
          <div className="ttus-card">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/images/constructtt.png"} alt=""
              /> 
            </div>
            <div className="ttcard-phone d-flex">
                <img src={process.env.PUBLIC_URL + '/images/phonebjs.png'} alt="" />
              <a href="tel:0333 880 1504">0333 880 1504</a>
            </div>
            <button shape="rounded" type="button">
              Request quote
            </button>
            <div className="ttcard-email d-flex">
            <img src={process.env.PUBLIC_URL + '/images/mailbjs.png'} alt="" />
              <a href="mailto:info@construct-IT.com">Send us an email</a>
            </div>
            <div className="ttcard-location d-flex">
            <img src={process.env.PUBLIC_URL + '/images/locationbjs.png'} alt="" />
              <div>
                <div>Boxworks, Unit 7</div>
                <div>Western Way,</div>
                <div>Wednesbury</div>
                <div>WS10 7BW</div>
                
              </div>
            </div>
            <a className="ttus-map" href="https://goo.gl/maps/AaeWVJd96Nq7iJTh7" target="_blank">
                  <span>
                    <img src={process.env.PUBLIC_URL + '/images/locationgoogle.png'} alt="" />
                  </span>
                  <span>View on Google Maps</span>
                </a>
          </div>
        </div>
      </div>
    </>
  );
}; 

export default TTusCards;
