import React from 'react';
import './index.css';

const CardNumber = (props) => {
  const { title = '', number = '' } = props;
  return (
    <div className='card-number'>
      <h3>{title}</h3>
      <p className='number'>{number}</p>
    </div>
  );
};

export default CardNumber;
