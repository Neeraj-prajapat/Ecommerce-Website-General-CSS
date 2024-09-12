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


//? ye hai mera real wala 

// import React, { useState } from 'react';

// const MyImage = ({ imgs = [] }) => {
//   // Set the first image as the default large image
//   const [mainImage, setMainImage] = useState(imgs[0]);

//   if (imgs.length === 0) {
//     return <div>No images available or loading...</div>; // Display this if imgs is empty
//   }

//   return (
//     <div className='row'>
                                          
//       {/* Column for the rest of the images (smaller, vertical) */}
//       <div className="col-md-4 order-1 order-md-0 d-flex flex-md-column flex-row flex-nowrap mb-5 mb-md-0 justify-content-start ">
//         {imgs.map((curElm, index) => (
//           <figure key={index} className="mb-3" onClick={() => setMainImage(curElm)}>
//             <img
//               src={curElm.url}
//               alt={curElm.filename}
//               className='img-fluid'
//               style={{ width: '100%', height: '120px', objectFit: 'cover', cursor: 'pointer' }} // Make images clickable
//             />
//           </figure>
//         ))}
//       </div>

//        {/* Column for the main (large) image */}
//        <div className="col-md-8 order-0 order-md-1 d-flex align-items-center justify-content-center">
//         <figure>
//           <img
//             src={mainImage?.url}
//             alt={mainImage?.filename}
//             className='img-fluid'
//             style={{ width: '100%', height: 'auto' }} // Full width image for the main image
//           />
//         </figure>
//       </div>
//     </div>
//   );
// };

// export default MyImage;



//? ye bakwas ishme kuch mouse dragging features hai but phone me kya hi mouse dragging features

// import React, { useState, useRef } from 'react';

// const MyImage = ({ imgs = [] }) => {
//   const [mainImage, setMainImage] = useState(imgs[0]);
//   const imageContainerRef = useRef(null);
//   const isDragging = useRef(false);
//   const startX = useRef(0);
//   const scrollLeft = useRef(0);

//   if (imgs.length === 0) {
//     return <div>No images available or loading...</div>;
//   }

//   const handleMouseDown = (e) => {
//     isDragging.current = true;
//     startX.current = e.pageX - imageContainerRef.current.offsetLeft;
//     scrollLeft.current = imageContainerRef.current.scrollLeft;
//   };

//   const handleMouseLeaveOrUp = () => {
//     isDragging.current = false;
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging.current) return;
//     e.preventDefault();
//     const x = e.pageX - imageContainerRef.current.offsetLeft;
//     const walk = (x - startX.current) * 2; // Speed of scrolling
//     imageContainerRef.current.scrollLeft = scrollLeft.current - walk;
//   };

//   return (
//     <div className="row">
//       {/* Column for the smaller images */}
//       <div className="col-md-4 order-1 order-md-0">
//         <div
//           className="d-none d-md-flex flex-column gap-3"
//           style={{ maxHeight: '100%', overflowY: 'auto' }} // Default vertical layout on medium+ screens
//         >
//           {imgs.map((curElm, index) => (
//             <figure key={index} className="mb-3" onClick={() => setMainImage(curElm)}>
//               <img
//                 src={curElm.url}
//                 alt={curElm.filename}
//                 className="img-fluid"
//                 style={{ width: '100%', height: '120px', objectFit: 'cover', cursor: 'pointer' }}
//               />
//             </figure>
//           ))}
//         </div>

//         {/* Circular and drag-to-scroll layout for screens below medium */}
//         <div
//           className="d-flex d-md-none position-relative"
//           style={{ height: '150px' }} // Adjust height to match circle size
//         >
//           <div
//             className="d-flex flex-row flex-nowrap overflow-auto gap-3"
//             ref={imageContainerRef}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeaveOrUp}
//             onMouseUp={handleMouseLeaveOrUp}
//             style={{
//               cursor: 'grab',
//               overflowX: 'scroll',
//               maxWidth: '100%',
//               userSelect: 'none',
//               position: 'absolute',
//               bottom: 0, // Align to the bottom
//             }}
//           >
//             {imgs.map((curElm, index) => (
//               <figure
//                 key={index}
//                 onClick={() => setMainImage(curElm)}
//                 style={{
//                   width: '80px', // Set the width and height of the circle
//                   height: '80px',
//                   flexShrink: 0,
//                   cursor: 'pointer',
//                   position: 'relative',
//                 }}
//               >
//                 <img
//                   src={curElm.url}
//                   alt={curElm.filename}
//                   className="img-fluid"
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     borderRadius: '50%', // Make the image circular
//                     border: '2px solid #ccc', // Optional border for better visibility
//                   }}
//                 />
//               </figure>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Column for the main (large) image */}
//       <div className="col-md-8 order-0 order-md-1 d-flex align-items-center justify-content-center">
//         <figure>
//           <img
//             src={mainImage?.url}
//             alt={mainImage?.filename}
//             className="img-fluid"
//             style={{ width: '100%', height: 'auto' }}
//           />
//         </figure>
//       </div>
//     </div>
//   );
// };

// export default MyImage;


import React, { useState } from 'react';

const MyImage = ({ imgs = [] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  if (imgs.length === 0) {
    return <div>No images available or loading...</div>;
  }

  return (
    <div className="row">
      {/* Column for the smaller images */}
      <div className="col-md-4 order-1 order-md-0">
        {/* Default vertical layout on medium+ screens */}
        <div
          className="d-none d-md-flex flex-column gap-1"
          style={{ maxHeight: '100%', overflowY: 'auto' }}
        >
          {imgs.map((curElm, index) => (
            <figure key={index} className="mb-3" onClick={() => setMainImage(curElm)}>
              <img
                src={curElm.url}
                alt={curElm.filename}
                className="img-fluid"
                style={{ width: '100%', height: '120px', objectFit: 'cover', cursor: 'pointer' }}
              />
            </figure>
          ))}
        </div>

        {/* Circular and horizontal scroll layout for screens below medium */}
        <div
          className="d-flex d-md-none position-relative"
          style={{ height: '130px' }} // Adjust height to match circle size
        >
          <div
            className="d-flex flex-row flex-nowrap overflow-auto gap-3 mb-3 "
            style={{
              overflowX: 'scroll',
              maxWidth: '100%',
              position: 'absolute',
              bottom: 0, // Align to the bottom
            }}
          >
            {imgs.map((curElm, index) => (
              <figure
                key={index}
                onClick={() => setMainImage(curElm)}
                style={{
                  width: '80px', // Set the width and height of the circle
                  height: '80px',
                  flexShrink: 0,
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                <img
                  src={curElm.url}
                  alt={curElm.filename}
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%', // Make the image circular
                    border: '2px solid #ccc', // Optional border for better visibility
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Column for the main (large) image */}
      <div className="col-md-8 order-0 order-md-1 d-flex align-items-center justify-content-center">
        <figure>
          <img
            src={mainImage?.url}
            alt={mainImage?.filename}
            className="img-fluid"
            style={{ width: '100%', height: 'auto' }}
          />
        </figure>
      </div>
    </div>
  );
};

export default MyImage;

