import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import './index.css';

const CardSelect = (props) => {
  const { title = '', id = 1, history } = props;
  const [value, setValue] = useState(id);

  const handleClick = () => {
    console.log(value);
    if (value === 1) {
      history.push('/dashboard/reading');
      return;
    }
    history.push('/dashboard/writing');
    return;
  };

  return (
    <div
      className={id === 1 ? `card-select reading` : `card-select writing`}
      onClick={() => handleClick()}
    >
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

export default withRouter(CardSelect);
