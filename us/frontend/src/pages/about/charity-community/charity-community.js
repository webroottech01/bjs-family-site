
import React from 'react';
import "./charity-community.scss";
import DifferentTechnology from '../../../components/differenttechnology/differenttechnology';
import Partners from '../../../components/partners-slider/partners';

const CharityCommunity = () => {
  return (
  <div className="charity">
    <div className='underSky'>
        <div className="container p-0">
            <h2 className='pageTittle'>Charity & Community</h2>
            <div className='row'>
                <div className='col-md-5 text-start pe-4 colmLeft'>
                    <img src={process.env.PUBLIC_URL + "/images/underOne-sky.png"} alt="image" />
                    <h3>BJS are proud supporting partners of</h3>
                    <p>This wonderful not-for-profit organisation are committed to ending homelessness once and for all.</p>
                    <p>In keeping with the compassionate values that form the foundations of the company, BJS seek to demonstrate the viability and necessity of employing those who are currently without a home in order to greatly reduce homelessness in the UK - and are part of an Under One Sky programme that offers employment opportunities and support to get people off the streets.</p>
                    <div className='learn-btn'>
                        <a href="#"><button>Learn more about Under One Sky</button></a>
                    </div>
                </div>
                <div className='col-md-7 text-end'>
                    <img src={process.env.PUBLIC_URL + "/images/community.png"} alt="image" />
                </div>
            </div>
        </div>
    </div>
    <div className='educate'>
        <div className='container p-0'>
            <h2>Educate Out Prejudice</h2>
            <p>BJS Haulage are also proud to show their support for PRIDE, creating a bespoke rainbow truck to help educate out prejudice and make LGBT+ people, in all their rich diversity, visible.</p>
            <img src={process.env.PUBLIC_URL + "/images/prejudice-bjs.jpg"} alt="image" />
        </div>
    </div>

    <DifferentTechnology
        layout="layout1"
        title="Our story"
        content="BJS is a family run distribution and logistics business based in the Midlands. We provide the very best customer service at every stage so that your products, reputation, clients and peace of mind really are safe in our hands. "
        link="/our-story"
        imageUrl1="/images/OurStory.jpg"
      />
      {/* Include DifferentTechnology Component */}

    <div className='partnersMAin'>
      <div className='newsPartners'>
        <h2 className='text-center'>Our Partners</h2>
        <Partners />
      </div>
    </div>


  </div>
  )
}
export default CharityCommunity; 