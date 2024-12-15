import React from 'react'

export default function Services() {
  return (
    <>
      <div className="servicesBack" >
       <h1 className='text-light text-center pt-5' style={{fontFamily:' Agency FB', fontSize:'90px'}}> Services</h1>

       <div className="container bg-light" style={{height:'1370px', marginTop:'100px'}}>
       <h2  style={{marginBottom:'130px',paddingTop:'50px', fontFamily:'verdana'}}> Services</h2>




       <div className="sicDiv container row justify-content-around mb-5" style={{backgroundColor:'beige'}}>

        <div className="col-lg-4 col-md-6 mb-5 bg-light mt-3" >
            <img className=' mb-1 rounded-circle' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROWTxqdcTPBediPTqXHTtYSz72zNZaa62teEbAXcC512W46uXL" alt="mosque"
            style={{width:'90px' }} />
            <h3  style={{fontFamily:'Agency FB'}}>Birthday Parties</h3>
            <p  >We provide Services for Birthday Parties at Discounted prices, where your friends can join you .</p>
            <button className='bg-primary rounded-pill text-light'> View Products</button>
        </div>

        <div className="col-lg-4 col-md-6 mb-5 bg-light mt-3 pt-2">
            <img className=' mb-2 rounded-circle' src="https://t2.gstatic.com/images?q=tbn:ANd9GcSj1VX6yuiS5JlMMI0deZfHkYStnp2t_VesJMiixb56u-vt8CZX" alt="events"
            style={{width:'55px'}} />
            <h3 style={{fontFamily:'Agency FB'}}>Special Events</h3>
            <p >We have a spacious garden when you can enjoy your gatherings and functions with your friends. </p>
            <button className='bg-primary  rounded-pill text-light'> View Products</button>
        </div>

        <div className="col-lg-4 col-md-6 mb-5 bg-light mt-3">
            <img className='rounded-circle' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSHYxjLC3hD_obp-7CqdQXtrlU8KSX0eEgj6NZwy7Suzn9Yw95h" alt="small house"
            style={{width:'70px'}} />
            <h3 style={{fontFamily:'Agency FB'}}>Breakfast</h3>
            <p >We provide Breakfast on Request. Expert Cook is available, you can order anything you want even from outside.</p>
            <button className='bg-primary  rounded-pill text-light'> View Products</button>
        </div>
          
           <div className=" col-lg-4 col-md-6 mb-5 bg-light">
            <img className='rounded-circle' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQcAX1oCoF0ygzQRh_7Byuy-AzW2jiNeAcEIVIWjyFil-Hxiful" alt="tv"
            style={{width:'65px'}} />
            <h3  style={{fontFamily:'Agency FB'}}> Free Wifi/Parking</h3>
            <p >Wifi is available in all rooms, also in lounge. You can get the passcode from the reception. Parking is Free and inside the resthouse.</p>
            <button className='bg-primary  rounded-pill text-light'> View Products</button>
        </div>

        <div className="col-lg-4 col-md-6 mb-5 bg-light">
            <img className='rounded-circle' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSh-7DvHoe5vdBmsneQQRlQLXcS-JwjdFvaePnVtXiyYdtiHkQv" alt="car"
            style={{width:'70px'}} />
            <h3  style={{fontFamily:'Agency FB'}}> Restaurants</h3>
            <p >We are linked with all the restaurants of Timergara, and if you want lunch or dinner, we can provide it for you.</p>
            <button className='bg-primary  rounded-pill text-light'> View Products</button>
        </div>

        <div className="col-lg-4 col-md-6 bg-light mb-5">
            <img className='rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebAORYIO6c4PEgj1r-1p9C7p_Bi6jGIZtdHQnGXDg5wKBjeJ9" alt="leaf"
            style={{width:'60px'}} />
            <h3  style={{fontFamily:'Agency FB'}}> Guide</h3>
            <p >If you are on trip to Chitral or Kumrat, we can provide complete guidance and also if you need a local guide, we can provide you.</p>
            <button className='bg-primary  rounded-pill text-light'> View Products</button>
        </div>

       </div>

      
        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="bgl"
        style={{width:'100%',height:'500px'}} />
        <h1 className='  text-center 'style={{ marginTop:'-200px' ,fontFamily: 'Agency FB', color:'white', fontSize:'40px', fontWeight:'bold' }}>Best Tourist Spot to Stay</h1>
        <p  style={{zIndex:'1' ,fontFamily: 'Agency FB' , textAlign:'center', color:'white', fontSize:'40px'}} >We provide the best service to Tourists especially to Intenational tourists.</p>
       
        
       
       </div>
       </div>
    </>
  )
}
