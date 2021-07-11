import React, { useState } from 'react';
import './slider.scss';

const Slider = () => {
  let sliderArr = [1, 2, 3, 4, 5];

  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log(x);
    setX(x + 100);
  };
  const goRight = () => {
    console.log(x);
    setX(x - 100);
  };

  return (
    <div className='slider'>
      {sliderArr.map((item, index) => (
        <div
          key={index}
          className='slide'
          style={{ transform: `translateX(${x}%)` }}
        >
          {item}
        </div>
      ))}
      <button id='goLeft' onClick={goLeft}>
        Left
      </button>
      <button id='goRight' onClick={goRight}>
        Right
      </button>
    </div>
  );
};

export default Slider;
