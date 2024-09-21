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
import CartAmountToggle from './CartAmountToggle'
import { Link } from 'react-router-dom';

const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1)

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    return (
        <>
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

         {/* add to cart */}
        <CartAmountToggle amount ={amount} setDecrease = {setDecrease} setIncrease = {setIncrease}/>

        <Link to="/cart">
            <button className='btn btn-primary mt-3'>Add To Cart</button>
        </Link>
        </>
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

