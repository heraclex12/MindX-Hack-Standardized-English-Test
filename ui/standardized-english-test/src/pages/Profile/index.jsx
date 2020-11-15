import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import CardNumber from '../../components/CardNumber';
import axios from 'axios';

import './index.css';

const { Panel } = Collapse;

const Profile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      if (fullName) {
        return;
      }
      const email = localStorage.getItem('email');
      const data = {
        email
      };
      const url = 'http://35.208.221.249:5000/api/user_info';
      const res = await axios.get(url, { params: { email } });
      setFullName(res.data.fullname);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setGender(res.data.gender ? 'Female' : 'Male');
      console.log(res);
      const { status = 401 } = res;
      if (status === 200 || status === 'SUCCESS') {
        return;
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className='profile-container'>
      <div className='profile'>
        <div className='top'>
          <div className='avatar'></div>

          <h1 className='user-name'>{fullName}</h1>
        </div>

        <Collapse defaultActiveKey='1'>
          <Panel header='More information' key='1'>
            <p>
              <span className='label'>Email: </span> {email}
            </p>
            <p>
              <span className='label'>Phone: </span>
              {phone}
            </p>
            <p>
              <span className='label'>Gender: </span>
              {gender}
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
