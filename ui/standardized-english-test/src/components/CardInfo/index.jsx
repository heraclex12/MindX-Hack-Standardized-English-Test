import React from 'react';

import { Card } from 'antd';

import './index.css';

const CardInfo = (props) => {
  const { title = '', content = '', imgSrc = '' } = props;
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img src={imgSrc} alt='' />
      </div>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default CardInfo;
