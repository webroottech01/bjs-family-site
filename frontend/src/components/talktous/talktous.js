import React from "react";
import "./talktous.scss";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import TTusCards from "./talktous-cards/ttus-cards";

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
                    <form>
                      <div className="row name">
                        <div className="col-md-4 your-name">
                          <label>Your Name *</label>
                          <input type="name" name="Your Name" required />
                        </div>
                        <div className="col-md-8 company">
                          <label>Company Name*</label>
                          <input type="name" name="Company Name" required />
                        </div>
                      </div>
                      <div className="number-address row">
                        <div className="col-md-4 number">
                          <label>Telephone Number *</label>
                          <input
                            type="tel"
                            name="telphone"
                            pattern="[0-9]{10}"
                            title="Ten digits code"
                            required
                          />
                        </div>
                        <div className="col-md-4 email">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                          />
                        </div>
                        <div className="col-md-4 code">
                          <label>Post Code</label>
                          <input
                            type="text"
                            pattern="[0-9]{5}"
                            title="Five digit zip code"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                    
                        <div className="serviceselect col-md-4">
                          <label>service *</label>
                          <select>
                            <option value="oneman" defaultChecked>
                              Select All
                            </option>
                            <option value="1man">1 Man</option>
                            <option value="2man">2 Man</option>
                            <option value="Collections">Collections</option>
                            <option value="nextday">Next Day</option>
                            <option value="assembly">Assembly</option>
                            <option value="recycle">Recycle</option>
                            <option value="unpack">Unpack</option>
                            <option value="packagingdisposal">Packaging disposal</option>
                            <option value="chatfirst">Let's chat first</option>
                          </select>
                        </div>
                        <div className="serviceselect col-md-4">
                          <label>type of product(s)*</label>
                          <select>
                            <option value="oneman" defaultChecked>
                              Select All
                            </option>
                            <option value="homefurniture">Home Furniture</option>
                            <option value="entertainment&electronics">Home entertainment & electronics</option>
                            <option value="gardenfurniture">Garden furniture</option>
                            <option value="whitegoods">White goods</option>
                            <option value="lighting">Lighting</option>
                            <option value="mirrors">Mirrors</option>
                            <option value="gymequiptment">Gym equiptment</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                      <label>Expected weekly volume*</label>
                      <input name="expected weekly volume" label="expected weekly volume" type="number" min="0" required="" value="0" aria-labelledby="expected weekly volume" class="sc-cxpRKc Cyisf" />
                        </div>
                      </div>

                      <div className="row">
                      
                        <div className="col-lg-6 agree">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="agree"
                            name="agree"
                            value="policy"
                          />
                          <label className="form-check-label" htmlFor="agree">
                            I agree to the BJS Privacy Policy
                          </label>
                        </div>
                        <div className="col-lg-6 text-lg-right submit-btn">
                          <input type="submit" value="Submit Quote" />
                        </div>
                      </div>
                    </form>
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
