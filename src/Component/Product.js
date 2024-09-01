// import { Link } from "react-router-dom"

// const Product = (curElem) =>{
//     const {id, name, image, price, category } = curElem
    
//     return(
//         <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
//             <div class="carousel-indicators">
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//             </div>
//             <div className="carousel-item active">
//                 <div className="row g-4 ">
//                     <div className='col-12 col-lg-4'>
//                         <div className='d-flex justify-content-center align-items-center'>
//                             <div className="card" style={{width: '18rem'}}>
//                                 <Link to={`/singleproduct/${id}`}>
//                                     <figure>
//                                         <img src={image} className="card-img-top" alt={name}/>
//                                         <figcaption className="caption">category</figcaption>
//                                     </figure>
//                                 </Link>
//                                 <div class="card-body">
//                                 <div className="d-flex justify-content-between">
//                                     <p className='small text-body-secondary'>{category}</p>
//                                     <p className='small text-body-secondary'>{price}</p>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Product





import React from 'react';
import { Link } from "react-router-dom";

const Product = ({ id, name, image, price, category }) => {
  return (
    <div className='col-12 col-lg-4'>
      <div className='d-flex justify-content-center align-items-center'>
        <div className="card border-0 p-3 pb-0" style={{ width: '18rem' }}>
                   
          <Link to={`/singleproduct/${id}`}>
            <figure className='image-container mb-0'>
              <img src={image} className="card-img-top" alt={name} />
              <figcaption className="caption badge rounded-pill bg-info" 
                            style={{display:"flex",
                                justifyContent:'flex-end',
                                position:'absolute',
                                top: '18px',
                                right: '18px',
                                padding: '5px 10px',
                                textTransform:'uppercase'
                                }}>
                    {category}
                </figcaption>
            </figure>
          </Link>
          <div className="card-body py-2">
            <div className="d-flex justify-content-between">
              <p className='small text-body-secondary'>{name}</p>
              <p className='small text-body-secondary'>{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
