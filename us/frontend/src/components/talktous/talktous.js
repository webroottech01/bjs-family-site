import React from "react";
import "./talktous.scss";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

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
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Woohoo, you are reading this text in a modal!
            <div className="container ">
              <div className="talkus">
                <div className="row">
                  <div className="col-lg-12 p-0">
                    <h2>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/phone-talkus.png"
                        }
                        alt=""
                      />
                      Talk To Us
                    </h2>
                    <p>
                      Contact us to discuss your requirements, obtain a quote,
                      or to join the BJS family...
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bjs-twoman.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <ul>
                        <li>
                          <a href="tel:01922324090">01922 324 090</a>
                        </li>
                        <li>Send us an email</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bjsextra.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <ul>
                        <li>
                          <a href="tel:01922308093">01922 308 093</a>
                        </li>
                        <li>Send us an email</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        src={process.env.PUBLIC_URL + "/images/bjshaulage.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <ul>
                        <li>
                          <a href="tel:03333441172">0333 344 1172</a>
                        </li>
                        <li>Send us an email</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Construct.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-lg-8">
                      <ul>
                        <li>
                          <a href="tel:0333 880 1504">0333 880 1504</a>
                        </li>
                        <li>Send us an email</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="booking-quote container">
              <h2>Booking Quote</h2>
              <p>
                We know forms can be tedious but the more you tell us the faster
                we’ll be able to help – it’ll be worth it, we promise!
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <form>
                    <div className="name">
                      <div className="your-name">
                        <label>Your Name *</label>
                        <input type="name" name="Your Name" required />
                      </div>
                      <div className="company">
                        <label>Company Name*</label>
                        <input type="name" name="Company Name" required />
                      </div>
                    </div>
                    <div className="number-address">
                      <div className="number">
                        <label>Telephone Number *</label>
                        <input
                          type="tel"
                          name="telphone"
                          pattern="[0-9]{10}"
                          title="Ten digits code"
                          required
                        />
                      </div>
                      <div className="email">
                        <label>Email Address *</label>
                        <input type="email" id="email" name="email" required />
                      </div>
                    </div>
                    <div className="post-code">
                      <div className="code">
                        <label>Collection Post Code</label>
                        <input
                          type="text"
                          pattern="[0-9]{5}"
                          title="Five digit zip code"
                          required
                        />
                      </div>
                      <div className="code">
                        <label>Delivery Post Code</label>
                        <input
                          type="text"
                          pattern="[0-9]{5}"
                          title="Five digit zip code"
                          required
                        />
                      </div>
                      <div className="code">
                        <label>Collection Date</label>
                        <input
                          type="date"
                          id="datemin"
                          name="datemin"
                          min="2000-01-02"
                        />
                      </div>
                      <div className="code">
                        <label>Delivery Date</label>
                        <input
                          type="date"
                          id="datemin"
                          name="datemin"
                          min="2000-01-02"
                        />
                      </div>
                    </div>
                    <div className="vehicle-type">
                      <label>
                        Required Vehicle Type(s)<span> (Optional)</span>
                      </label>
                      <div className="row">
                        <div className="form-check">
                          <input
                            type="radio"
                            className="btn-check"
                            name="crane"
                            id="crane"
                            autocomplete="off"
                            checked
                          />
                          <label className="btn btn-secondary" for="crane">
                            Articulated Crane
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="btn-check"
                            name="drawbar"
                            id="drawbar"
                            autocomplete="off"
                            checked
                          />
                          <label className="btn btn-secondary" for="drawbar">
                            Drawbar Crane
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="btn-check"
                            name="extender"
                            id="extender"
                            autocomplete="off"
                            checked
                          />
                          <label className="btn btn-secondary" for="extender">
                            Closed Extender Crane
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="btn-check"
                            name="rigid"
                            id="rigid"
                            autocomplete="off"
                            checked
                          />
                          <label className="btn btn-secondary" for="rigid">
                            Rigid Crane
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            className="btn-check"
                            name="flatbed"
                            id="flatbed"
                            autocomplete="off"
                            checked
                          />
                          <label className="btn btn-secondary" for="flatbed">
                            Articulated Curtainsider/Flatbed
                          </label>
                        </div>
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
                        <label className="form-check-label" for="agree">
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Talktous;
