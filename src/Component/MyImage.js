// import React from 'react'

// const MyImage = (props) => {

//   const {imgs} = props

//   return (
//     <div className='row'>
         
//             {imgs.map((curElm, index) => {
//               return (
//                 <figure>
//                   <img 
//                     src={curElm.url} 
//                     alt={curElm.filename}
//                     className='box-image--style'
//                     key={index}
//                   />
//                 </figure>
//               )
//             })}
//     </div>
//   )
// }

// export default MyImage


// import React from 'react';

// const MyImage = ({  imgs = []  }) => {

//   console.log("~ file: MyImage.js ~ line 5 ~ MyImage ~ imgs", imgs);

//   if (imgs.length === 0) {
//     return <div>No images available or loading...</div>; // Display this if imgs is empty
//   }

//   return (
//     <div className='row'>
//       {imgs.map((curElm, index) => {
//         return (
//           <figure key={index}>
//             <img 
//               src={curElm.url} 
//               alt={curElm.filename}
//               className='box-image--style'
//             />
//           </figure>
//         );
//       })}
//     </div>
//   );
// };

// export default MyImage;




import React, { useState } from 'react';

const MyImage = ({ imgs = [] }) => {
  // Set the first image as the default large image
  const [mainImage, setMainImage] = useState(imgs[0]);

  if (imgs.length === 0) {
    return <div>No images available or loading...</div>; // Display this if imgs is empty
  }

  return (
    <div className='row'>
                                          
      {/* Column for the rest of the images (smaller, vertical) */}
      <div className="col-md-4 d-flex flex-column">
        {imgs.map((curElm, index) => (
          <figure key={index} className="mb-3" onClick={() => setMainImage(curElm)}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className='img-fluid'
              style={{ width: '100%', height: '120px', objectFit: 'cover', cursor: 'pointer' }} // Make images clickable
            />
          </figure>
        ))}
      </div>

       {/* Column for the main (large) image */}
       <div className="col-md-8 d-flex align-items-center justify-content-center">
        <figure>
          <img
            src={mainImage?.url}
            alt={mainImage?.filename}
            className='img-fluid'
            style={{ width: '100%', height: 'auto' }} // Full width image for the main image
          />
        </figure>
      </div>
    </div>
  );
};

export default MyImage;






