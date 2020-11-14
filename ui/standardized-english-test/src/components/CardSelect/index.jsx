import React from 'react';
import './index.css';

const CardSelect = (props) => {
  const { title = '', id = 1 } = props;
  return (
    <div className={id === 1 ? `card-select reading` : `card-select writing`}>
      <div className='background'></div>
      <div className='card-select-body'>
        <h2>{title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam faucibus
          ante eu lacus suscipit facilisis. Nullam lobortis ante lorem, ut
          mattis metus pellentesque a.
        </p>
      </div>
    </div>
  );
};

export default CardSelect;
