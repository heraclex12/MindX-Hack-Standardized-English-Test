import React from 'react';
import { Form, Input, Button, Radio } from 'antd';

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

const Login = (props) => {
  const [form] = Form.useForm();

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
    const url = '';
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      // mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
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
    <div className='login-container'>
      <div className='login-wrapper'>
        <h1>Login</h1>

        <Form
          form={form}
          {...layout}
          initialValues={{
            email: '',
            password: ''
          }}
          onFinish={onFinish}
        >
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

          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
