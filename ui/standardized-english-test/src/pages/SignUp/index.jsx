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

const SignUp = (props) => {
  const [form] = Form.useForm();
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
            address: '',
            password: '',
            confirm: ''
          }}
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
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='Enter your email' />
          </Item>

          <Item name='address' label='Phone number'>
            <Input placeholder='Enter your phone number' />
          </Item>

          <Item name='gender' label='Gender'>
            <Radio.Group onChange={onGenderChange} defaultValue='male'>
              <Radio value={'male'}>Male</Radio>
              <Radio value={'femail'}>Female</Radio>
            </Radio.Group>
          </Item>

          <Item
            label='Password'
            name='password'
            placeholder='Enter your password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Item>

          <Item
            label='Confirm password'
            name='confirm'
            placeholder='Enter your password'
            rules={[
              { required: true, message: 'Please confirm your password!' }
            ]}
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

export default SignUp;
