import React, { useState } from "react";
import "./ttus-form.scss";

const TTusform = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    telphone: "",
    email: "",
    zipCode: "",
    service: "",
    productType: "",
    expectedVolume: "",
    agree: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/contact`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        try {
          const jsonData = JSON.parse(data);
          console.log(jsonData);
          // Clear form on success
          setFormData({
            name: "",
            company: "",
            telphone: "",
            email: "",
            zipCode: "",
            service: "",
            productType: "",
            expectedVolume: "",
            agree: false,
          });
          setIsSubmitted(true);
        } catch (e) {
          console.error("Error parsing JSON:", e);
          console.error("Response data:", data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="ttus-form-inner">
        <div className="container">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank You!</h2>
              <p>Your request has been submitted successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} method="POST">
              <div className="row name">
                <div className="col-md-4 your-name">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-8 company">
                  <label>Company Name*</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="number-address row">
                <div className="col-md-4 number">
                  <label>Telephone Number *</label>
                  <input
                    type="tel"
                    name="telphone"
                    value={formData.telphone}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    title="Ten digits code"
                    required
                  />
                </div>
                <div className="col-md-4 email">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-4 code">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleChange}
                    pattern="^\d{5}(-\d{4})?$"
                    title="Five digits or ZIP+4 format (e.g., 12345 or 12345-6789)"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="serviceselect col-md-4">
                  <label>Service *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select All
                    </option>
                    <option value="1man">1 Man</option>
                    <option value="2man">2 Man</option>
                    <option value="Collections">Collections</option>
                    <option value="nextday">Next Day</option>
                    <option value="assembly">Assembly</option>
                    <option value="recycle">Recycle</option>
                    <option value="unpack">Unpack</option>
                    <option value="packagingdisposal">
                      Packaging disposal
                    </option>
                    <option value="chatfirst">Let's chat first</option>
                  </select>
                </div>
                <div className="serviceselect col-md-4">
                  <label>Type of product(s)*</label>
                  <select
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select All
                    </option>
                    <option value="homefurniture">Home Furniture</option>
                    <option value="entertainment&electronics">
                      Home entertainment & electronics
                    </option>
                    <option value="gardenfurniture">Garden furniture</option>
                    <option value="whitegoods">White goods</option>
                    <option value="lighting">Lighting</option>
                    <option value="mirrors">Mirrors</option>
                    <option value="gymequiptment">Gym equipment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="expectedVolume">
                    Expected Weekly Volume*
                  </label>
                  <input
                    type="number"
                    name="expectedVolume"
                    id="expectedVolume"
                    value={formData.expectedVolume}
                    onChange={handleChange}
                    min="0"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 agree">
                  <input
                    type="checkbox"
                    name="agree"
                    className="form-check-input"
                    id="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="agree">
                    I agree to the BJS Privacy Policy
                  </label>
                </div>
                <div className="col-lg-6 text-lg-right submit-btn">
                  <button type="submit">Submit request</button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default TTusform;
