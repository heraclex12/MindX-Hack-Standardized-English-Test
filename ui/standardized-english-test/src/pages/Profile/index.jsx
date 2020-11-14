import React from 'react';
import { Collapse } from 'antd';
import CardNumber from '../../components/CardNumber';

import './index.css';

const { Panel } = Collapse;

const Profile = () => {
  return (
    <div className='profile-container'>
      <div className='profile'>
        <div className='top'>
          <div className='avatar'></div>

          <h1 className='user-name'>John Doe</h1>
        </div>

        <Collapse defaultActiveKey='1'>
          <Panel header='More information' key='1'>
            <p>
              <span className='label'>Email: </span> asd@gmail.com
            </p>
            <p>
              <span className='label'>Phone: </span>0912345678
            </p>
            <p>
              <span className='label'>Gender: </span>Male
            </p>
          </Panel>
        </Collapse>

        <div className='cards-number'>
          <CardNumber title='Writing tests' number={42} />
          <CardNumber title='Reading tests' number={15} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
