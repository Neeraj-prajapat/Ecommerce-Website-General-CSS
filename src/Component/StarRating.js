// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt, faStar as faEmptyStar } from '@fortawesome/free-solid-svg-icons';

// const StarRating = ({ stars, reviews }) => {
//   const fullStars = Math.floor(stars);
//   const halfStar = stars - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   return (
//     <div className="star-rating d-flex align-items-center">
//       {Array(fullStars)
//         .fill()
//         .map((_, index) => (
//           <FontAwesomeIcon key={index} icon={faStar} color="gold" />
//         ))}
//       {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} color="gold" />}
//       {Array(emptyStars)
//         .fill()
//         .map((_, index) => (
//           <FontAwesomeIcon key={index} icon={faEmptyStar} color="gold" />
//         ))}
//       <p className="ms-2 mb-0">({reviews} customer reviews)</p>
//     </div>
//   );
// };

// export default StarRating;






// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt, faStar as faEmptyStar } from '@fortawesome/free-solid-svg-icons';

// const StarRating = ({ stars, reviews }) => {
//   const fullStars = Math.floor(stars);
//   const halfStar = stars - fullStars >= 0.5;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   return (
//     <div className="star-rating d-flex align-items-center">
//       {Array(fullStars)
//         .fill()
//         .map((_, index) => (
//           <FontAwesomeIcon key={index} icon={faStar} color="gold" />
//         ))}
//       {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} color="gold" />}
//       {Array(emptyStars)
//         .fill()
//         .map((_, index) => (
//           <FontAwesomeIcon key={index} icon={faEmptyStar} color="gold" />
//         ))}
//       <p className="ms-2 mb-0">({reviews} customer reviews)</p>
//     </div>
//   );
// };

// export default StarRating;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalfAlt, faStar as faEmptyStar } from '@fortawesome/free-solid-svg-icons';

// const StarRating = ({ stars = 0, reviews = 0 }) => {
//   // Ensure stars is a valid number between 0 and 5
//   const validStars = Number.isFinite(stars) ? Math.min(Math.max(stars, 0), 5) : 0;

//   const fullStars = Math.floor(validStars); // Integer part of the rating
//   const starFraction = validStars - fullStars; // Fractional part of the rating

//   // Show a half-star only if the fraction is between 0.25 and 0.75
//   const halfStar = starFraction >= 0.25 && starFraction < 0.75;
//   const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//   // Safeguard against invalid array lengths
//   const renderStars = (count, icon) => {
//     return Array(Math.max(count, 0))
//       .fill()
//       .map((_, index) => <FontAwesomeIcon key={index} icon={icon} color="gold" />);
//   };

//   return (
//     <div className="star-rating d-flex align-items-center">
//       {renderStars(fullStars, faStar)}
//       {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} color="gold" />}
//       {renderStars(emptyStars, faEmptyStar)}
//       <p className="ms-2 mb-0">({reviews} customer reviews)</p>
//     </div>
//   );
// };

// export default StarRating;



import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // For filled and half stars
import { AiOutlineStar } from 'react-icons/ai'; // For empty stars

const iconSize = 15; // Set a uniform size for all icons

const StarRating = ({ stars = 0, reviews = 0 }) => {
  let fullStars = 0;
  let halfStar = false;

  // Apply the rules for star ratings
  if (stars > 4 && stars < 4.5) {
    fullStars = 4; // Greater than 4 but less than 4.5 -> 4 full stars
  } else if (stars === 4.5) {
    fullStars = 4; // Exactly 4.5 -> 4 full stars and 1 half star
    halfStar = true;
  } else if (stars > 4.5 && stars < 5) {
    fullStars = 4; // Greater than 4.5 but less than 5 -> 4 full stars and 1 half star
    halfStar = true;
  } else if (stars === 5) {
    fullStars = 5; // Exactly 5 -> 5 full stars
  }

  // Calculate empty stars
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  // Safeguard against invalid array lengths
  const renderStars = (count, Icon) => {
    return Array(Math.max(count, 0))
      .fill()
      .map((_, index) => <Icon key={index} size={iconSize} color="gold" />);
  };

  return (
    <div className="star-rating d-flex align-items-center">
      {renderStars(fullStars, FaStar)}
      {halfStar && <FaStarHalfAlt size={iconSize} color="gold" />}
      {renderStars(emptyStars, AiOutlineStar)} {/* Use AiOutlineStar for empty stars */}
      <p className="ms-2 mb-0">({reviews} customer reviews)</p>
    </div>
  );
};

export default StarRating;





