import React from 'react';
import '../App.css';

export default function Rooms() {
  return (
    <>
    <div className="roomsBack " >
       <h1 className='text-light text-center pt-5 pb-5' style={{fontFamily:' Agency FB', fontWeight:'bold'}}> Rooms</h1>

       <div className=" container bg-light " style={{height:'2700px', marginTop:'120px'}}>

        <h2  style={{marginBottom:'130px',paddingTop:'50px', fontFamily:'verdana'}}> Rooms</h2>
         
         <div className='sicDiv'>
        <img className ='w-50' style={{float:'left'}} src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80" alt="economy room" />
        <img  style={{clear:'both', width:'120px',  marginTop:'40px'}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwr0ItqX4sRdfO_XkoEKUd8I6OJ3emZEPuTFkVpR79eSfsA0tV" alt="economy small"  />
        </div>
        <h3  style={{ clear:'right', marginTop:'30px', fontFamily:'Lato' }}> Economy Room</h3>
        <p  style={{ clear:'right' , marginTop:'30px', marginBottom:'60px'  }} >Spacious, with washrooms & 1 Twin Bed that offers all <br></br> the comfort one needs. Room  size is 16 sqm. The room <br></br>has a small balcony where you can enjoy the scenery <br></br> of this green sector.</p>
         <div className='sicDiv'>
        <img  className ='w-50' style={{float:'right', marginTop:'10px'}} src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        <img style={{width:'100px', marginTop:'50px'}}  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT_o97iFCViDQ89IzgGdr6KUEQoSnRWid9pbc76ijkvZ_uPu6r6" alt="delux" />
        </div>
        <h2 style={{ fontFamily:'Lato' }}> Deluxe Room</h2>
        <p >Spacious, with washrooms & Queen Size bed that offers <br></br> all the comfort one needs. Room size is 20 sqm. The<br></br>  room has a small balcony where you can enjoy the <br></br> scenery of this green sector.</p>
         <div className='sicDiv'>
        <img className ='w-50'  style={{float:'left', marginTop:'120px'}} src="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="economy room" />
        <img style={{clear:'both', width:'120px', marginTop:'130px'}} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQqoXc5qX4u4J5WLAg4rmUHKsBD3eV0OCOoXz8n9nqP7I9fvfKI" alt="economy small"  />
        </div>
        <h3 style={{ clear:'right', marginTop:'20px', fontFamily:'Lato' }}>Family Room</h3>
        <p style={{ clear:'right' , marginTop:'30px' }} >Spacious, with washrooms & 1 single bed and 1 Queen<br></br> size Bed that offers all the comfort one needs. Room <br></br>size is 26 sqm. The room has a small balcony where<br></br>you can enjoy the scenery of this green sector.</p>
        <div className='sicDiv'>
        <img  className ='w-50' style={{float:'right', }} src="https://images.unsplash.com/photo-1521783988139-89397d761dce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80" alt="" />
        <img style={{width:'100px',  marginTop:'40px'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyP98QnrYeQ1KzTzlW0you1n2sUtSRaDcoLUszNTzzHRkhjax" alt="delux" />
        </div>
        <h2 style={{fontFamily:'Lato'}}> Business Class</h2>
        <p style={{ marginBottom:'300px'}}>Spacious, with high standard washrooms & 2 <br></br> single Size bed that offers all the comfort one<br></br> needs. Room size is 30 sqm. The room has a<br></br> balcony, AC, TV and dedicated service where <br></br>you can enjoy the scenery of this green sector.</p>
       

        <div class="container">
    <div class="row">
        <div class="col-md-9offset-md-2 "> 
        <iframe className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60559.23663083017!2d71.89515526257577!3d34.75791318244926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dbf37536b7c9ef%3A0x989c44d16ae1d945!2sDir%20Lower%2C%20Lower%20Dir%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2sae!4v1694373137171!5m2!1sen!2sae"    style={{border:'0px' ,height:'450px' , loading:'lazy'}} ></iframe>
            
            
        </div>
    </div>
</div>
        </div>
    </div>
    
    </>
  )
}
