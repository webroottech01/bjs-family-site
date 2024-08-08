import React from 'react';
import "./technology.scss";
import MdMessage from '../../../components/md-message/md-message';
import DifferentTechnology from '../../../components/differenttechnology/differenttechnology';
import Withbigbulky from '../../../components/big-bulky/withbigbulky';
import Partners from '../../../components/partners-slider/partners';

const partners = [
  { src: "/images/lightfootLogo-removebg-preview.png", alt: "Lightfoot Logo" },
  { src: "/images/Twilio-removebg-preview.png", alt: "Twilio Logo" },
  { src: "/images/what3words_Logo_Horizontal_Red_2020.png", alt: "What3Words Logo" },
  { src: "/images/Group 11521.png", alt: "Group 11521 Logo" },
  { src: "/images/I.Can.Prove.IT.png", alt: "I Can Prove IT Logo" },
];

const Technology = () => {
  return (
    <div className="about-technology">
      <div className="our-technology">
        <div className="container-py">
          <h2 className="about-title">Our Technology</h2>
          <p className='jt-p'>
            BJS powers its logistics, distribution, and warehousing operations with cutting edge technology.
          </p>
          <p className='sm-p'>
            So whether it’s route planning, order tracking, warehouse scanning, or getting proof-of-delivery on glass, it’s our bespoke technology that powers the whole customer journey.
          </p>
          <div className="our-patners">
            <h3 className='xm-title'>OUR PARTNERS</h3>
            <div className="patners-logo">
              {partners.map((partner, index) => (
                <img 
                  key={index} 
                  src={process.env.PUBLIC_URL + partner.src} 
                  alt={partner.alt} 
                />
              ))}
            </div>
          </div>
        </div>      
      </div>
      <MdMessage />
      <DifferentTechnology
        layout="layout1"
        title="What Makes BJS Different"
        content="We provide the very best customer service at every stage of the delivery process, putting customers at the heart of everything we do – so that your products, reputation, customers and peace of mind really are safe in our hands."
        link="/our-difference"
        imageUrl1="/images/Clip path group_11zon.jpg"
        customClass="blue-bg"
      />
      <Withbigbulky></Withbigbulky>
      
      <div className='partnersMAin'>
      <div className='newsPartners'>
        <h2 className='text-center'>Our Partners</h2>
        <Partners />
      </div> 
      </div></div>
  );
}

export default Technology;
