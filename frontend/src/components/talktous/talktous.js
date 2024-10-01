import React from "react";
import "./talktous.scss";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import TTusCards from "./talktous-cards/ttus-cards";
import TTusform from "./talktous-form/ttus-form";

const Talktous = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="talktousfull">
        <button className="talktousbtn" onClick={handleShow}>
          Talk to us
        </button>

        <Modal
          show={show}
          onHide={handleClose}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="talktousmodal"
        >
          <Modal.Body>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>

            <div className="row">
              <div className="col-md-3 talkus">
                <div className="col-lg-12 p-0">
                  <h2>
                    <img
                      src={process.env.PUBLIC_URL + "/images/phone-talkus.png"}
                      alt=""
                    />
                    Talk To Us
                  </h2>
                  <p>
                    Contact us to discuss your requirements, obtain a quote, or
                    to join the BJS family...
                  </p>
                </div>
                <div className="ttus-card">
                  <img
                    src={process.env.PUBLIC_URL + "/images/homedelivery.svg"}
                    alt=""
                  />

                  <div className="ttcard-phone d-flex">
                    <img
                      src={process.env.PUBLIC_URL + "/images/phonebjs.png"}
                      alt=""
                    />
                    <a href="tel:+16194523931">+16194523931</a>
                  </div>
                  {/* <button shape="rounded" type="button">
                    Request quote
                  </button> */}
                  <div className="ttcard-email d-flex">
                    <img
                      src={process.env.PUBLIC_URL + "/images/mailbjs.png"}
                      alt=""
                    />
                    <a href="mailto:sales@bjshomedelivery.com">
                      Send us an email
                    </a>
                  </div>
                  <div className="ttcard-location d-flex">
                    <img
                      src={process.env.PUBLIC_URL + "/images/locationbjs.png"}
                      alt=""
                    />
                    <div>
                      <div>7435 W Sunnyview Ave D/E</div>
                      <div>Visalia </div>
                      <div>CA 93291</div>
                      <div>USA</div>
                    </div>
                  </div>
                  <a
                    className="ttus-map"
                    href="https://goo.gl/maps/wNk9KocP4Q3baBuC8"
                    target="_blank"
                  >
                    <span>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/locationgoogle.png"
                        }
                        alt=""
                      />
                    </span>
                    <span>View on Google Maps</span>
                  </a>
                </div>
              </div>

              <div className="booking-quote col-md-9">
                <h2>Get a quote for your final mile</h2>
                <p>
                  We know forms can be tedious but the more you tell us the
                  faster we’ll be able to help – it’ll be worth it, we promise!
                </p>
                <div className="row booking-form">
                  <div className="col-lg-12">
                    <TTusform />
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Talktous;
