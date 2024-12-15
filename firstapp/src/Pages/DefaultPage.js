import React from 'react'
import { Form, Link } from 'react-router-dom'
import Services from './Services'

export default function DefaultPage() {
   
  let items = document.querySelectorAll('.carousel .carousel-item')

  items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
      if (!next) {
          // wrap carousel by using first child
          next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
  }
})
    
  return (
    <>
    
      <div id="demo" className="carousel slide" data-bs-ride="carousel">


<div className="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="3" ></button>
 
</div>
<div className="carousel-inner " >
  <div className="carousel-item active "  >
    <img src="https://media.istockphoto.com/id/187363337/photo/modern-hotel-building-in-summer.jpg?s=612x612&w=0&k=20&c=eRVDcadZTKs5t2K-CEeXT6DiJQ68Fnbs6u9F-0S_v8Q=" alt="Hotel" className="d-block w-100 " style={{  height: '500px'}}/>
    <div class="carousel-caption ">
        <h1>Chinar Rest House</h1>
        <h2>The Best Place to Stay and rest in Lower Dir.</h2>
       <Link to="/services"><button style={{ backgroundColor:'#0a2e2c', color:'whitesmoke' , fontSize:'20px', width:'150px', borderRadius:'10px', height:'60px'}}>  View Services </button>
       </Link>
      </div>
  </div>

  <div className="carousel-item">
    <img src="https://assets.graydientcreative.com/files/outlets/platinum/images/marquis-3-min.jpg" alt="BedRoom" className="d-block " style={{height:'500px', width:'100%'}}/>
    <div class="carousel-caption  ">
        <h1>Chinar Rest House</h1>
        <h2>The Best Place to Stay and rest in Lower Dir.</h2>
        <Link to="/services"> <button style={{ backgroundColor:'#0a2e2c', color:'whitesmoke' , fontSize:'20px', width:'150px', borderRadius:'10px' , height:'60px'}}>  View Services</button> </Link>
      </div>

  </div>
  <div className="carousel-item">
    <img src="https://img.freepik.com/free-photo/beautiful-luxury-outdoor-swimming-pool-hotel-resort_74190-7433.jpg" alt="viewPic" className="d-block " style={{ height: '500px', width:'100%'}}/>
    <div class="carousel-caption ">
        <h1>Chinar Rest House</h1>
        <h2>The Best Place to Stay and rest in Lower Dir.</h2>
        <Link to="/services"> <button style={{ backgroundColor:'#0a2e2c', color:'whitesmoke' , fontSize:'20px', width:'150px', borderRadius:'10px', height:'60px'}}>  View Services</button> </Link>
      </div>
  </div>

  <div className="carousel-item">
    <img src="https://www.ca.kayak.com/rimg/kimg/c4/5c/7efe3591-5b12c6a3-6.jpg?width=1366&height=768&crop=true" alt="Bedrooms" className="d-block" style={{width:'100% ', height: '500px', width:'100%'}}/>
    <div class="carousel-caption ">
        <h1>Chinar Rest House</h1>
        <h2>The Best Place to Stay and rest in Lower Dir.</h2>
        <Link to="/services">  <button style={{ backgroundColor:'#0a2e2c', color:'whitesmoke' , fontSize:'20px', width:'150px', borderRadius:'10px', height:'60px'}}>  View Services</button> </Link>
      </div>
  </div>
  
</div>

 
<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

<div className=" container-fluid row text-light  text-center "style={{backgroundColor:'#162541'}} >
  <div className=" col-lg-12 col-md-12 col-sm-12">
    <h1> About Hotel Services</h1> <br></br>
    <p>Where You Get the Best Services</p>
  </div>

      <div className=" col-lg-4">
       <img src="https://cdn-icons-png.flaticon.com/512/4973/4973066.png" alt="jar" style={{width:'80px',height:'100px'}} />
        <h2>Restaurant</h2>
       <p>Where you get the best meal in your rooms or in the open air.</p></div>

      <div className="col-lg-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4aa-rFHgPI5yyHUm34Yua2856-IvPCXAsfaiKJbD756uw-CpkYDHPz5jj99z5mgzYpdQ&usqp=CAU" alt="wifi" style={{width:'80px'}}/>
       <h2> Free wi-fi</h2>
       <p>Fastest Internet Service in Bed Rooms, in Dining, in garden and in lawn</p>
      </div>

      <div className="col-lg-4">
      <img src="https://icon-library.com/images/car-icon-png/car-icon-png-1.jpg" alt="car" style={{width:'80px' ,height:'100px'}}/>
        <h2>Car Parking</h2>
        <p>Having a secure Car Parking Facility under 24/7 <br></br>
           CCTV surveillance.</p>
      </div>
      </div>

      <div className="continer-fluid text-center m-5 " >
        <h2 style={{color:'#02075d'}}>Book a <u>Quality</u></h2> <br></br>
        <p>A homely & relaxing environment combined with a wonderful location.</p>
      </div>


      <div className=" defaultPic container-fluid text-center  row">
        <div className=" col-lg-4">
          <img src="https://www.chinarresthouse.com/wp-content/uploads/2019/07/chinar-rest-house-timergara-Dir-Lower-kpk-11.jpg" alt="eco" style={{height:'250px'}} />
          <h5>Economy Room</h5>
          <p>Spacious, with washrooms & 1 Twin Bed that offers  all the comfort one needs. Room size is 16 sqm. The room has a small balcony where you can enjoy the scenery of this green sector.</p>
          <button  style={{backgroundColor:'#0a2e2c',color:'whitesmoke', width:'100px', height:'50px', borderRadius:'5px', marginBottom:'10px'}}>Book Now</button>
        </div>
          
        <div className=" col-lg-4 ">
          <img src="https://www.chinarresthouse.com/wp-content/uploads/2022/07/d0de5c2a-c02d-4a78-841a-3f4e6b6cd125-1.jpg" alt="del"  style={{height:'250px'}}/>
          <h5>Deluxe Room</h5>
          <p>Spacious, with washrooms & Queen Size bed that offers all the comfort one needs. Room size is 20 sqm. The room has a small balcony where you can enjoy the scenery of this green sector.</p>
         <button style={{backgroundColor:'#0a2e2c',color:'whitesmoke', width:'100px', height:'50px', borderRadius:'5px' , marginBottom:'10px'}}>Book Now</button>
        </div>

        <div className=" col-lg-4 ">
          <img src="https://www.chinarresthouse.com/wp-content/uploads/2022/07/cd6d5aec-d083-46e1-b04a-af4e03467376.jpg" alt="fam"  style={{height:'250px'}}/>
          <h5>Family Room</h5>
          <p>Spacious, with washrooms & 1 single bed and 1 Queen size Bed that offers all the comfort one needs. Room size is 26 sqm. The room has a small balcony where you can enjoy the scenery of this green sector.</p>
          <button style={{backgroundColor:'#0a2e2c',color:'whitesmoke', width:'100px', height:'50px', borderRadius:'5px', marginBottom:'10px' , marginBottom:'60px'}} >Book Now</button>
        </div>
      </div>






      <div class="container-fluid text-center my-3 mt-5">
    <h2 className=" mb-3 font-weight-light">Places To Visit</h2>
    <h4 className='mb-5'>Best Places to Visit in Dir Lower</h4>
    <div class="row mx-auto my-auto justify-content-center">
        <div id="recipeCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner " role="listbox">
                <div class="carousel-item active">
                    <div class="col-md-3 ">
                        <div class="card " style={{backgroundColor:'lightgray'}}>
                            <div class="card-img">
                                <img src="https://kptourism.com/uploads/images/attraction/1563300453.336.png" class="img-fluid"/>
                            </div>
                            <h4 className='mt-4'> <u style={{textDecorationColor:'skyblue'}}>Shen Ghar</u>  </h4>
                            <p className='mt-2'>Shenghar Lajbouk is one of beautiful and green mountainous peak. One of the… </p>
                            <button style={{backgroundColor:'#0a2e2c', color:'whitesmoke', width:'120px', height:'50px', borderRadius:'10px',margin:'auto'}}> Read More</button>
                          
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card" style={{backgroundColor:'lightgray'}}>
                            <div class="card-img">
                                <img src="https://www.visitswatvalley.com/images/Kumrat-Valley.jpg" class="img-fluid"/>
                            </div>
                            <h4 className='mt-4'> <u style={{textDecorationColor:'lightpink'}}>Komrat Valley </u></h4>
                            <p className='mt-2'> Kumrat valley is one of the most beautiful valleys in Pakistan. Kumrat Valley…</p>
                            <button style={{backgroundColor:'#0a2e2c', color:'whitesmoke', width:'120px', height:'50px', borderRadius:'10px',margin:'auto'}}> Read More</button>
                           
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card" style={{backgroundColor:'lightgray'}}>
                            <div class="card-img">
                                <img src="https://media.istockphoto.com/id/1633193048/photo/the-village-of-viscri-in-romania.jpg?s=612x612&w=0&k=20&c=Q7WPpu76u1XBVqgSQ1Aj2meYxhZ278lLwAO-bTT8x6A=" class="img-fluid"/>
                            </div>
                            <h4 className='mt-4'> <u style={{textDecorationColor:'blueviolet'}}>Lorham Top</u></h4>
                            <p className='mt-2'> Tourists, from all our KPK, majority of them children and youth, and families…</p>
                            <button style={{backgroundColor:'#0a2e2c', color:'whitesmoke', width:'120px', height:'50px', borderRadius:'10px',margin:'auto'}}> Read More</button>
                            
                        </div>
                    </div>
                </div>
                 <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card" style={{backgroundColor:'lightgray'}}>
                            <div class="card-img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Dir_Valley.jpg" class="img-fluid"/>
                            </div>
                          <h4 className='mt-4'> <u style={{textDecorationColor:'rebeccapurple'}}>Shahi Bin Shahi</u></h4>
                          <p className='mt-2'> Shahi bin shahi Samarbagh Afghanistan border. Shahi Rest house is located on border…</p>
                          <button style={{backgroundColor:'#0a2e2c', color:'whitesmoke', width:'120px', height:'50px', borderRadius:'10px',margin:'auto'}}> Read More</button>
                           
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card" style={{backgroundColor:'lightgray'}}>
                            <div class="card-img">
                                <img src="https://en.qantara.de/sites/default/files/uploads/2019-01/kalash3_0.jpg" class="img-fluid"/>
                            </div>
                            <h4 className='mt-4'> <u style={{textDecorationColor:'lightblue'}}>Chitral Kalash </u></h4>
                            <p className='mt-2'>The Kalasha Kalasha: Kaĺaśa; Nuristani: Kasivo;  or Kalash, also called Waigali…</p>
                            <button style={{backgroundColor:'#0a2e2c', color:'whitesmoke', width:'120px', height:'50px', borderRadius:'10px',margin:'auto'}}> Read More</button>
                            
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="col-md-3">
                        <div class="card"style={{backgroundColor:'lightgray'}}>
                            <div class="card-img">
                                <img src="https://live.staticflickr.com/4852/39726732863_529d75bcaf_b.jpg" class="img-fluid"/>
                            </div>
                            <h4> <u style={{textDecorationColor:'red'}}>Komrat Valley </u></h4>
                            <p className='mt-2'>Kumrat valley is one of the most beautiful valleys in Pakistan. Kumrat Valley… </p>
                            <button style={{backgroundColor:'#0a2e2c', color:'whitesmoke', width:'120px', height:'50px', borderRadius:'10px',margin:'auto', marginBottom:'10px'}}> Read More</button>
                            <div class="card-img-overlay">+</div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    </div>
   
</div>


  <div className="row pt-5 text-center pb-5 " style={{backgroundColor:'#0a2e2c', color:'whitesmoke'}}>
    <div className="col-lg-4">
      <img src="http://icon-park.com/imagefiles/location_map_pin_white10.png" alt="addrs" style={{height:'60px'}} />
      <h3> Address</h3>
      <p>Near Qadeemi kashmir bakery, Behind Sharjah Masjid, Timergara, District Lower Dir, Khyber Pakhtunkhwa Khyber Pakhtunkhwa, Pakistan 18300</p>
    </div>

    <div className="col-lg-4">
    <img className='rounded-pill' src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNuEF3Q2eXbl_5AaqWCwEzGgT9GxREKh619sgKa3nIrIX0298Z" alt="fon" style={{height:'60px'}} />
      <h3> Phone</h3>
      <p> +92 945 821562 | +92 317 8000 344</p>
    </div>

    <div className="col-lg-4">
    <img src="https://www.nicepng.com/png/full/826-8263933_email-icons-white-color-message-vector-png.png" alt="emel" style={{height:'60px'}} />
      <h3> Email</h3>
      <p> chinarresthouse@gmail.com</p>
    </div>
  </div>
     
    </>
  )
}
