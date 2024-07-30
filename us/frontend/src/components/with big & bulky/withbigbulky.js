import React from 'react'
import "./withbigbulky.scss";

function Withbigbulky() {
  return (
    <div className='littleThingSection'>
    <div className='container'>
         <h2 style={{color:"#70C6F0"}}>with big & bulky,</h2>
         <h2 style={{color:"#fff"}}>the little things count.</h2>
         <div className='col-12 towmen'><img src={process.env.PUBLIC_URL + "/images/twomen.png"} alt="" /></div>
          </div>

 </div>
  )
}

export default Withbigbulky;
