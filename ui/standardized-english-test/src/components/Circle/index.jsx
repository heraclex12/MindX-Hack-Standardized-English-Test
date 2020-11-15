import React from 'react';

import './index.css';

const Circle = (props) => {
  const { title = '', amount = 0 } = props;
  return (
    <div className='circle-wrapper'>
      <div className='circle'>
        <div className='amount'>{amount}</div>
        {/* <p>{amount}</p>
      <p>{title}</p> */}
      </div>
      <span>{title === 'grammar' ? 'grammar & spelling' : title}</span>
    </div>
  );
};

export default Circle;
