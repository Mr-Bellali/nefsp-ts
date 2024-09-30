
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import cn from 'classnames';
// import { ReactComponent as Next } from './assets/chevronDown.svg';
// import { ReactComponent as Prev } from './assets/chevronUp.svg';
// import './style.css';

// const VerticalCarousel = ({
// 	data,
// 	leadingText,
// }) => {
// 	const [activeIndex, setActiveIndex] = useState(0);

// 	const handleClick = (direction) => {}

// 	return (
// 		<section className="outer-container">
// 	    <div className="carousel-wrapper">
// 				<button
//           type="button"
//           className="carousel-button prev"
//           onClick={() => handleClick('prev')}
//         >
//           <Prev />
//         </button>

// 				<button
//           type="button"
//           className="carousel-button next"
//           onClick={() => handleClick('next')}
//         >
//           <Next />
//         </button>
// 			</div>
// 			<div className="content">
//         <img
// 					src={data[activeIndex].content.image}
// 					alt={data[activeIndex].content.introline}
// 				 />
//         <p>{data[activeIndex].content.copy}</p>
//       </div>
// 		</section>
// 	);
// }

// VerticalCarousel.propTypes = {
//   data: PropTypes.array.isRequired,
//   leadingText: PropTypes.string.isRequired,
// };

// export default VerticalCarousel;
