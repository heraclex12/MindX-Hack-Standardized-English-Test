import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
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

  const { history } = props;

  const onFinish = async (values) => {
    console.log(values);
    const { password, email } = values;
    const data = {
      email,
      password
    };
    const url = 'http://35.208.221.249:5000/api/login';
    const res = await axios.post(url, data);
    const { status } = res;
    console.log(res);
    if (status === 200) {
      history.push('/dashboard');
    }
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

          <button className='submit-btn' onClick={onFinish}>
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Login);
