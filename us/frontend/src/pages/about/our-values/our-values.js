import React from 'react';
import "./our-values.scss";
import MdMessage from '../../../components/md-message/md-message';
import DifferentTechnology from '../../../components/differenttechnology/differenttechnology';
import Partners from '../../../components/partners-slider/partners';

const Ourvalues = () => {
  return (
  <div className="our-values">
    <div className='namedAfter'>
      <div className="container p-0">
        <h2 className='pageTittle'>OUR VALUES</h2>
        <div className='row'>
          <div className='col-md-5 p-0'> 
            <div className='namedMain d-flex'>
              <div className='imageSec'>
                <img src={process.env.PUBLIC_URL + "/images/babaJaswant.png"} alt="" />
              </div>
              <div className='textSec'>
                <h3 className='text-start'>BJS is named after</h3>
                <h4 className='text-start'><strong>B</strong>aba <strong>J</strong>aswant <strong>S</strong>ingh <br></br>Ji</h4>
              </div>
            </div>
          </div>
          <div className='col-md-7 rightCol'>
            <p className='text-start based'>Based in Punjab, India, BJS was the founder of a trust that runs projects for the welfare of humanity; provision of health care facilities, higher medical education and to show <i>‘the path of spiritual righteousness’, to ‘foster human values and welfare with esteemed devotion indeed’.</i></p>
            <p className='text-start'>While not an obvious fit to most Western business values this outlook has proven beneficial.</p>
          </div>
        </div>
      </div>
    </div>

    <div className='niceDay'>
      <div className='container p-0'>
        <div className='row'>
          <div className='col-md-9 text-start'>
            <img src={process.env.PUBLIC_URL + "/images/niceday-delivery.png"} alt="" />
          </div>
          <div className='col-md-3 text-start'>
            <img src={process.env.PUBLIC_URL + "/images/about-delivery.png"} alt="" />
          </div>
        </div>

      </div>
    </div>

    <MdMessage></MdMessage>
      <DifferentTechnology
        layout="layout2"
        title="our technology"
        content="As a fast-growing group of delivery business’ BJS needs a smooth road to run on. Ours is paved with cutting edge technology. By investing in IT we ensure we are driven by excellence from the inside out. "
        link="/technology"
        imageUrl2="/images/technology.jpg"
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
export default Ourvalues; 