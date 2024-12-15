import React from 'react'

export default function Gallery() {
  return (
    <>
    <div className="galleryback">
    <h1 className='text-light text-center pt-5 pb-5' style={{fontFamily:' Agency FB',fontWeight:'bold'}}> Gallery</h1>
     

     <div className="container bg-light" style={{height:'190px', marginTop:'120px'}}>
       <h2  style={{marginBottom:'13px',paddingTop:'30px', fontFamily:'verdana'}}> Gallery</h2>
       <img src="https://media3.giphy.com/media/IwSG1QKOwDjQk/200w.webp?cid=ecf05e471e509td4m6hhsmvx3bps7xg29ryogpqk2qqcj5yd&ep=v1_gifs_search&rid=200w.webp&ct=g" alt=""
       style={{width:'100%' , border:' 12px solid #0a2e2c  ', height:'70px' }} />
       </div>
     </div>
    </>
  )
}
