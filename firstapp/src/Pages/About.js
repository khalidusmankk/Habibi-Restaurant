import React from 'react'

export default function About() {
  return (
    <>
      <div className=" container-fluid text-center    " style={{backgroundColor:'#0a2e2c' , color:'whitesmoke' , height:'260px', fontFamily:'Agency FB', fontWeight:'bold'}}>
        <h1 className='pt-5'> About Us</h1>
      </div>
      <div className="imgWidth">
     <a href=''>  <img className='float-end me-5 '  src="https://www.chinarresthouse.com/wp-content/uploads/2020/10/hotel-in-kumrat.jpg"  alt="chinar" style={{width:'600px' , marginTop:'70px'}} /></a> </div>
      <p style={{fontSize:'30px', marginTop:'70px',marginLeft:'60px'}}> Our History</p>
      <p style={{ marginLeft:'60px'}}> Welcome to CHINAR REST HOUSE</p>
      <p style={{ marginLeft:'60px', marginBottom:'30px'}}> experience like never before, <br></br>combining restaurants, cafes, rooms <br></br> and entertainment all under one roof.</p>
       
       
      <h3 style={{ marginLeft:'60px'}}> Main Facilities</h3>
      <ul style={{ marginLeft:'60px'}}>
        <li> 24-hour room Service</li>
        <li> 24-hour front desk Service</li>
        <li> Air conditioned room</li>
        <li> Daily housekeeping/cleaning</li>
        <li> Self-serve laundry</li>
        <li> Dining room</li>
        <li> Free newspaper in the lobby</li>
        <li> Luggage storage</li>
        <li> LCD TV</li>
        <li> Free self parking</li>
        <li> Free on-the-go breakfast</li>
        <li> Free Wifi</li>
        <li> Free parking</li>
        
      </ul>


    </>
  )
}
