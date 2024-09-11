import React from 'react'
import {Link} from "react-router-dom";


const PageNavigation = ({title}) => {
  return (
    <div className='pagination fs-4 ms-4 '>
      <Link to = "/">Home</Link>/ {title}
    </div>
  )
}

export default PageNavigation
