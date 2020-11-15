import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import Reading from './Reading';
import Writing from './Writing';
import './index.css';
import { Link,Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const DashBoard = (props) => {
  let { path, url } = useRouteMatch();
  return (
    <Layout>
      <Content style={{ padding: '0 50px', margin: '20px' }}>
        <Layout
          className='site-layout-background'
          style={{ padding: '24px 0' }}
        >
          <Sider className='site-layout-background' width={200}>
            <Menu
              mode='inline'
              defaultOpenKeys={['1']}
              defaultSelectedKeys={['1']}
              style={{ height: '100%' }}
            >
              <Menu.Item key='1'>
                <Link to={`${url}/reading`}>Reading</Link>
              </Menu.Item>
              <Menu.Item key='2'>
                <Link to={`${url}/writing`}>Writing</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Switch>
              <div className='content'>
                <Switch>
                  <Route path={`${path}/reading`}>
                    <Reading />
                  </Route>

                  <Route path={`${path}/writing`}>
                    <Writing />
                  </Route>
                  <Route path={`${path}/`}>
                    <Redirect to={`${url}/reading`} />

                    <Writing />
                  </Route>
                </Switch>
                <Footer />
              </div>
            </Switch>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default DashBoard;
