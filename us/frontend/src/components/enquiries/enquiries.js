import React from 'react';
import "./enquiries.scss";



const Enquiries = () => {
  return (
    <>

    <div className='enquiry'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-6 col-md-6 col-sm-12 sec-leftone'>
            <h2>Enquiries</h2>
            <h3>01922 645 650</h3>
            <p>7 Days: 8am - 6pm</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h2>Sales</h2>
            <h3>01922 324 090</h3>
            <p>Weekdays: 9am - 5pm</p>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
export default Enquiries;