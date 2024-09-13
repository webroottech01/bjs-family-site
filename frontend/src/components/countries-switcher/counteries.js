import React, { useState } from "react";
import "./counteries.scss";
import Modal from "react-bootstrap/Modal";

const CounteriesSwitcher = () => {
  const [show, setShow] = useState(false);

  const overlayClose = () => setShow(false);
  const overlayShow = () => setShow(true);

  return (
    <>
      <div className="cswitcher">
        <button
          id="switcherbtn"
          aria-expanded="true"
          className="dropdown-toggle show nav-link"
          href="#"
          onClick={overlayShow}
        >
          Us
        </button>
        <Modal
          show={show}
          onHide={overlayClose}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="switcherOverlay"
        >
          <div className="navbarsecond navbar-nav">
            <div className="flags dropdown">
              <div className="dropdownmenu" title="Us" id="basic-nav-dropdown">
                <h5>Choose your region</h5>
                <div className="regional-drop">
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "/images/uslogo.png"}
                      alt=""
                    />
                    <p className="region-title">United States</p>
                    <p>
                    For all things BJS in the US
                    </p>
                    <button className="currentregion" disabled>
                      Currently viewing
                    </button>
                  </div>
                  <div>
                    <img
                      src={process.env.PUBLIC_URL + "/images/uklogo.png"}
                      alt=""
                    />
                    <p className="region-title">United Kingdom</p>
                    <p>
                    For all things BJS in the UK
                    </p>
                    <a href="https://bjsfamily.com/" className="otherregion">
                      Switch to UK Site
                    </a>
                  </div>
                </div>
                <button onClick={overlayClose}>Close this window</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default CounteriesSwitcher;
