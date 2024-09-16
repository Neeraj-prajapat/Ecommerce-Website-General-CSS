// import React, { useState } from 'react'
// import { FaCheck } from 'react-icons/fa';


// const AddToCart = ({product}) => {
//     const {id, colors, stock} = product;
//     const [color, setColor] = useState(colors[0])

//   return (
//     <div className=''>
//       <p>
//         Colors: 
//         {colors.map((curColor, index) => {
//             return (
//                 <button key={index}
//                  style={{backgroundColor: curColor}}
//                  className= "btnStyle"
//                  onClick={() => setColor(curColor)}
//                 >

//                  {color === curColor ? <FaCheck/> : null}
//                 </button>
//             )
//         })}
//       </p>
//     </div>
//   )
// }

// export default AddToCart





// import React, { useState } from 'react';
// import { FaCheck } from 'react-icons/fa';
// import PropTypes from 'prop-types';

// const AddToCart = ({ product }) => {
//     const { id, colors, stock } = product;
//     const [color, setColor] = useState(colors[0]);

//     return (
//         <div className='color-selection'>
//             <p>
//                 Colors: 
//                 {colors.map((curColor, index) => (
//                     <button 
//                         key={index}
//                         style={{ backgroundColor: curColor }}
//                         className={`btnStyle ${color === curColor ? 'active' : ''}`}
//                         onClick={() => setColor(curColor)}
//                         disabled={!stock}
//                     >
//                         {color === curColor && <FaCheck className="check-icon" />}
//                     </button>
//                 ))}
//             </p>
//         </div>
//     );
// };

// AddToCart.propTypes = {
//     product: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         colors: PropTypes.arrayOf(PropTypes.string).isRequired,
//         stock: PropTypes.number.isRequired,
//     }).isRequired,
// };

// export default AddToCart;



import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import PropTypes from 'prop-types';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);

    return (
        <div className='color-selection-container'>
            <p className='colors-text'>Colors:</p>
            <div className='color-palette'>
                {colors.map((curColor, index) => (
                    <button 
                        key={index}
                        style={{ backgroundColor: curColor }}
                        className={`btnStyle ${color === curColor ? 'active' : ''}`}
                        onClick={() => setColor(curColor)}
                        disabled={!stock}
                    >
                    {color === curColor && <FaCheck className="check-icon"  style={{ color: curColor === '#000000' ? 'white' : 'black' }} />}
                    </button>
                ))}
            </div>
        </div>
    );
};

AddToCart.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
        stock: PropTypes.number.isRequired,
    }).isRequired,
};

export default AddToCart;

