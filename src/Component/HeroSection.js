import React from 'react'

export default function HeroSection(props) {

    // const imgStyle = {
    //     minWidth: "10rem",
    //     height: "10rem",
    // };
    // style={imgStyle}


  return (
    <div className="container hero-section">
    <div className="row mb-5">
        <div className="order-lg-0 order-1 col-12 col-md-12 col-lg-6 text-center text-lg-start mt-5 mt-lg-0  d-flex flex-column justify-content-center ">
            <h1 className='text-capitalize fw-bold' >Thapa {props.heading} </h1>
            <p className='mt-3 mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas maiores unde quae harum. 
             Hic quibusdam soluta nam,deleniti, quas ratione quam molestiae laboriosam illo voluptatibus,
             consequuntur repudiandae porro.</p>

             <div className='text-center w-100 text-md-start'>
               <button type="button" className="btn btn-primary" data-bs-toggle="tooltip" title="Default tooltip">Shop Now</button>
             </div>                 
        </div>



        <div className=" order-lg-1 order-0 col-12 col-md-12 col-lg-6 text-center text-lg-start hero-section-img">
            <figure>
                <img src="./images/hero.jpg" alt="" className='img-style img-fluid' />
            </figure>
        </div>
    </div>
</div>
  )
}

