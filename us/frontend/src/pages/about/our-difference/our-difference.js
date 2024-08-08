import React from "react";
import "./our-difference.scss";
import DifferentTechnology from "../../../components/differenttechnology/differenttechnology";
import Partners from "../../../components/partners-slider/partners";

const testimonials = [
  {
    imgSrc: "/images/Image 25.png",
    partnerLogo: "/images/partnerLogos_SVG_CotswoldCo 1.png",
    quote: "Flexible approach and strong relationship we have built together",
    description: "As an online retailer the final mile is perhaps the most crucial event in our customer journey and we have full confidence in BJS to always deliver the service our customers expect from us providing clear and regular communication to both us and our customers all the way through the process. As a business partner over many years we have particularly valued the flexible approach and strong relationship we have built together.",
    name: "Philippe Chainieux",
    title: "CEO"
  },
  {
    imgSrc: "/images/Image 25 (1).png",
    partnerLogo: "/images/partnerLogos_SVG_RicherSounds.png",
    quote: "We are a demanding client and they keep us very happy",
    description: "BJS have given us consistently excellent service over a number of years. They handle our most important customers nationally… a vital role that must be carried out to the highest possible standard. We are a demanding client and they keep us very happy.",
    name: "Julian Richer",
    title: "Founder & Managing Director"
  }
];

const teamTestimonials = [
  {
    imgSrc: "/images/image 36.jpg",
    quote: "The service BJS offered was a perfect fit for us in terms of coverage and automation",
    description: "We used to have our own delivery fleet service and drivers, but the service BJS offered was a perfect fit for us in terms of coverage and automation. Outsourcing delivery to a specialist company was a logical decision and the best thing we’ve ever done. Choice for our customers, and tracking portals – has really helped our business to grow.",
    name: "Julian Bowen",
    title: "Operations Team",
    logo: "/images/partnerLogos_SVG_JulianBowen.png"
  },
  {
    imgSrc: "/images/image 37.jpg",
    quote: "Exceptional & consistent service every time with helpful delivery options",
    description: "BJS provides Happy Beds with exceptional and consistent service every time with helpful delivery options. Happy Beds' customers are always complimenting the friendly and polite delivery drivers, so we couldn't be happier!",
    name: "Happy Beds",
    title: "Operations Team",
    logo: "/images/image 39.png"
  },
  {
    imgSrc: "/images/image 38.jpg",
    quote: "The efficiency and professional nature of our deliveries does us proud",
    description: "BJS has been our go-to delivery partner for a couple of years. Why? Because we trust them like our own staff. Being a small but growing business, customer services needs to be at the heart of everything we do.",
    name: "Stewart Daniels",
    title: "Operations Director",
    logo: "/images/image 40.png"
  }
];

const Testimonial = ({ imgSrc, partnerLogo, quote, description, name, title, columnClass }) => (
  <div className={`col-md-6 ${columnClass}`}>
    <div className="differ-colum-two align-items-center">
      <div className="profile-img">
        <img src={process.env.PUBLIC_URL + imgSrc} alt={`${name} Logo`} className="profile-image" />
        <img src={process.env.PUBLIC_URL + partnerLogo} alt={`${name} Partner Logo`} className="partenrs-logo" />
      </div>
      <div className="sec-content">
        <h3>{quote}</h3>
        <p>{description}</p>
        <h5><b>{name}</b></h5>
        <h5>{title}</h5>
      </div>
    </div>
  </div>
);


const TeamTestimonial = ({ imgSrc, quote, description, name, title, logo, customClass, teamSecClass }) => (
  <div className={`col-md-4 team-sec ${teamSecClass}`}>
    <div className="team-quote">
      <img src={process.env.PUBLIC_URL + imgSrc} alt={`${name} Logo`} className="profile-image" />
      <h3>{quote}</h3>
    </div>
    <p>{description}</p>
    <div className={`profile-xmlogo ${customClass}`}>
      <div className="info">
        <h5><b>{name}</b></h5>
        <h5>{title}</h5>
      </div>
      <div className="logo">
        <img src={process.env.PUBLIC_URL + logo} alt={`${name} Logo`} />
      </div>
    </div>
  </div>
);




const OurDifference = () => {
  return (
    <div className="our-difference">
      <div className="difference-secfull">
        <div className="container-xy">
          <h2 className="about-title">Our Difference</h2>
          <p>We thought we would let our customers tell you what makes BJS different...</p>
          <div className="row two-column-sec">
            {testimonials.map((testimonial, index) => {
              let columnClass = '';
              if (index === 0) {
                columnClass = 'left-column';
              } else if (index === 1) {
                columnClass = 'right-column';
              }
              return <Testimonial key={index} {...testimonial} columnClass={columnClass} />;
            })}
          </div>
        </div>
      </div>

        <section className="our-team">
            <div className="container-xy">
              <div className="row">
                {teamTestimonials.map((teamTestimonial, index) => {
                  let teamSecClass = '';
                  let customClass = '';
                  if (index === 1) {
                    teamSecClass = 'mid-column';
                    customClass = 'xm2';
                  } else if (index === 2) {
                    teamSecClass = 'right-column';
                    customClass = 'xm2';
                  }
                  return (
                    <TeamTestimonial
                      key={index}
                      {...teamTestimonial}
                      teamSecClass={teamSecClass}
                      customClass={customClass}
                    />
                  );
                })}
              </div>
            </div>
          </section>

        <DifferentTechnology
          layout="layout1"
          title="training academy"
          content="The life size training academy is a unique way for teams to hone their home delivery skills; meaning that when it comes to crossing thresholds for real, they are confident at tight corners and awkward spaces which is why we have a less than .5% damage rate and consistently high client feedback scores upwards of 97%."
          link="/training-academy"
          imageUrl1="/images/Uplift Feature.jpg" 
          customClass="blue-bg"
        />
        <div className='partnersMAin'>
          <div className='newsPartners'>
            <h2 className='text-center'>Our Partners</h2>
            <Partners />
          </div>
        </div>
      
    </div>
  );
}

export default OurDifference;
