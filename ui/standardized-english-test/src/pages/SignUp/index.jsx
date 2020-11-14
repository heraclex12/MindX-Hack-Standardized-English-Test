import React from 'react';
import { Form, Input, Button, Radio } from 'antd';
import { withRouter } from 'react-router';

import './index.css';

const { Item } = Form;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const onGenderChange = () => {};

const SignUp = (props) => {
  const [form] = Form.useForm();
  const { history } = props;

  const redirectToLogin = () => {
    history.push('/login');
  };

  const onFinish = async (values) => {
    console.log(values);
    const { fullName, password, phone, email, gender } = values;
    const data = {
      fullName,
      password,
      phone,
      email,
      gender
    };
    const url = 'https://35.208.221.249:27019/register_user';
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // redirect: 'follow', // manual, *follow, error
      // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
  };

  return (
    <div className='sign-up-container'>
      <div className='sign-up-wrapper'>
        <h1>Sign Up</h1>

        <Form
          form={form}
          {...layout}
          initialValues={{
            fullName: '',
            email: '',
            phone: '',
            gender: 0,
            password: '',
            confirm: ''
          }}
          onFinish={onFinish}
        >
          <Item
            name='fullName'
            label='Full name'
            rules={[
              { required: true, message: 'Please input your full name!' }
            ]}
          >
            <Input placeholder='Enter your full name' />
          </Item>

          <Item
            name='email'
            label='Email'
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'The input is not valid E-mail!'
              }
            ]}
          >
            <Input placeholder='Enter your email' />
          </Item>

          <Item name='phone' label='Phone number'>
            <Input placeholder='Enter your phone number' />
          </Item>

          <Item name='gender' label='Gender'>
            <Radio.Group onChange={onGenderChange} initialValues='male'>
              <Radio value={0}>Male</Radio>
              <Radio value={1}>Female</Radio>
            </Radio.Group>
          </Item>

          <Item
            label='Password'
            name='password'
            min={6}
            placeholder='Enter your password'
            hasFeedback
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Item>

          <Item
            label='Confirm password'
            name='confirm'
            dependencies={['password']}
            hasFeedback
            placeholder='Enter your password'
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    console.log(getFieldValue('password'));
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!'
                  );
                }
              })
            ]}
          >
            <Input.Password />
          </Item>

          {/* <Form.Item {...tailLayout}> */}
          <button className='submit-btn' onClick={onFinish}>
            Submit
          </button>
          {/* </Form.Item> */}
        </Form>

        <p className='ask'>
          Already have account?
          <span
            className='link'
            style={{ color: 'violet' }}
            onClick={redirectToLogin}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
