import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    PieChartOutlined,
    ContainerOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Space } from 'antd';
import UserLogin from './UserLogin';
import Dashboard from './Dashboard';
import User from './User';
import Post from './Post';
const { Header, Sider, Content } = Layout;
const MainAdmin = ({List,setList}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [filtle,setFilter] = useState('')
    const handClicktest = (item) => {
        setFilter(item);
    }
    return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="demo-logo-vertical" />
                    <Menu
                        style={{ marginTop: 80,height:'1000px' }}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <PieChartOutlined onClick={()=>handClicktest('')}/>,
                                label: 'Dashboard',
                            },
                            {
                                key: '2',
                                icon: <UserOutlined onClick={()=>handClicktest('User')} />,
                                label: 'User',
                            },
                            {
                                key: '3',
                                icon: <ContainerOutlined onClick={()=>handClicktest('Post')} />,
                                label: 'Post',
                            },
                        ]}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 50,
                                height: 50,
                                outline: 'none'
                            }}
                        />
                        <UserLogin />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        {filtle===''?(<Dashboard/>):''}
                        {filtle==='User'?(<User/>):''}
                        {filtle==='Post'?(<Post List={List} setList={setList}/>):''}
                    </Content>
                </Layout>
            </Layout>
    );

};

export default MainAdmin;