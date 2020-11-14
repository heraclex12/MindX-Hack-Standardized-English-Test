import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import Reading from './Reading';
import Writing from './Writing';
import './index.css';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const DashBoard = (props) => {
  const [tab, setTab] = useState(1);
    return (
        <Layout>

    <Content style={{ padding: '0 50px',margin:'20px' }}>

      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
            onClick={(e)=>setTab(e.key)}
          >
            <Menu.Item key="1">Reading</Menu.Item>
            <Menu.Item key="2">Writing</Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>{tab==1?<Reading/>:<Writing/>}</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    )
}

export default DashBoard;