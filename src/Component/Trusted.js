import React from 'react'
import { BsBox2Fill, BsUnity } from 'react-icons/bs'
import { FaAndroid, FaApple, FaBuyNLarge,  } from 'react-icons/fa6'
import { GiBank } from 'react-icons/gi'

export default function trusted() {
  return (
    <div className="container trusted-companies trusted-bg">
      <h3 className='trustedHeading text-center mb-4 fs-4 fw-bold'>Trusted by 1000+ Companies</h3>
      <div className="row g-3">

        <div className="col-lg-2 col-md-4 col-6 ">
          <div className="d-flex justify-content-center align-items-center">
            <BsUnity className='trusted-icons' size={70}/>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-6">
          <div className="d-flex justify-content-center align-items-center">
          <FaApple className='trusted-icons' size={70}/>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-6">
          <div className="d-flex justify-content-center align-items-center">
            <FaAndroid className='trusted-icons' size={70}/>
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-6">
          <div className="d-flex justify-content-center align-items-center">
          <FaBuyNLarge className='trusted-icons' size={70}/>         
          </div>
        </div>

        <div className="col-lg-2 col-md-4 col-6">
          <div className="d-flex justify-content-center align-items-center">
            <BsBox2Fill className='trusted-icons' size={70}/>
          </div>
        </div>

        <div className="col-lg-2 col-md-4  col-6">
          <div className="d-flex justify-content-center align-items-center">
             <GiBank className='trusted-icons' size={70}/>
          </div>
        </div>

        
      </div>
    </div>
  )
}
