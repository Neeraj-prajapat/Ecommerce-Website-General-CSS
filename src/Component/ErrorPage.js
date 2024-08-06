import React from 'react'
import {Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className='container my-5'>
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <h2 className='text-center'>404</h2>
        <h2 className='text-center my-3 fw-normal'>UH OH! You're lost</h2>
        <h3 className='text-center'>Page is not found...</h3>
        <p className='text-center'>Click the Button below to go back to the homepage.</p>

        <div className="text-center mt-3">
          <Link to="/" className="btn btn-primary px-4"> Go Back to Home</Link>
        </div>

      </div>
    </div>
  )
}
