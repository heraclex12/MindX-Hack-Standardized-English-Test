import React from 'react';
import axios from 'axios';
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
      email,
      password
    };
    const url = 'http://35.208.221.249:5000/api/login';
    axios.post(url, data).then((res) => {
      console.log(res);
      console.log(res.data);
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
