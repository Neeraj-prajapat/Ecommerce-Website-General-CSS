// import React from 'react'
// import { useProductContext } from '../Context/ProductContext'
// import Product from './Product'

// function FeatureProduct() {

//     const {isLoading, featureProducts} = useProductContext()

//     if(isLoading){
//         return <div>........Loading</div>
//     }

//   return (
//     <div className='container'>
//         <div className='intro-data'>Check Now!</div>
//         <div className="common-heading">Our Feature Services</div>
//         <div className="three-column">
//             {featureProducts.map((curElem) => {
//                 return <Product key ={curElem.id}{...curElem}/>
//             })}
//         </div>
//     </div>
//   )
// }

// export default FeatureProduct


import React from 'react';
import { useProductContext } from '../Context/ProductContext';
import Product from './Product';

function FeatureProduct() {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>........Loading</div>;
  }

  const chunkedProducts = [];
  for (let i = 0; i < featureProducts.length; i += 3) {
    chunkedProducts.push(featureProducts.slice(i, i + 3));
  }

  return (
    <div className='container mb-5  featured-section'>
      <div className='intro-data fw-bold ms-2'>Check Now !</div>
      <div className="common-heading fw-bold fs-2 ms-2 mb-4">Our Feature Services</div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {chunkedProducts.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {chunkedProducts.map((productChunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="row g-4">
                {productChunk.map((curElem) => (
                  <Product key={curElem.id} {...curElem} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;

