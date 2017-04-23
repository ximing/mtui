/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import React, {Component} from "react";
import {Button,Input,Spin,Menu,Icon,Checkbox,Table,Radio,
DatePicker,Select,Pagination,message,notification} from 'mtui-d';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { MonthPicker, RangePicker } = DatePicker;
import { Layout,Breadcrumb } from 'mtui-d';
const { Header, Content, Sider } = Layout;
message.config({duration:1000000});
notification.config({
    duration: 300000
});

import Split from './split';
import Modal from './modal';
import Alert from './alert';
import Tab from './tabs';
import Tooltip from './tooltip';
import Tag from './tag';

const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{(i.toString(36) + i).repeat(100)}</Option>);
}
const success = () => {
    message.success('This is a message of success');
};

const error = () => {
    message.error('This is a message of error');
};

const warning = () => {
    message.warning('This is message of warning');
};
const info = () => {
    message.info('This is message of warning');
};

const openNotificationWithIcon = (type) => {
    notification[type]({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

export default class DemoContainer extends Component{
    render(){
        return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%' }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '12px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                        <div>
                            <div>
                                <Button size="small">hello</Button>
                                <Button type="primary" size="small">hello</Button>
                                <Button type="danger" size="small">hello</Button>
                                <Button type="success" size="small">hello</Button>
                                <Button type="warning" size="small">hello</Button>

                                <Button>hello</Button>
                                <Button type="primary" loading={true}>hello</Button>
                                <Button type="danger">hello</Button>
                                <Button type="success">hello</Button>
                                <Button type="warning">hello</Button>
                                <Button type="primary" shape="circle" loading />

                                <Button size="large">hello</Button>
                                <Button type="primary" size="large">hello</Button>
                                <Button type="danger" size="large">hello</Button>
                                <Button type="success" size="large">hello</Button>
                                <Button type="warning" size="large">hello</Button>
                            </div>
                            <Split/>
                            <div>
                                <Input/>
                                <Split/>

                                <Input size="small"/>
                                <Split/>

                                <Input size="large"/>
                                <Split/>
                                <Input type="textarea" placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                            </div>
                            <div>
                                <Split/>
                                <Spin/>
                            </div>
                            <Split/>
                            <Radio>Radio</Radio>
                            <Checkbox>Checkbox</Checkbox>
                            <div>
                                <Menu>
                                    <Menu.Item>菜单项</Menu.Item>
                                    <Menu.SubMenu title="子菜单">
                                        <Menu.Item>子菜单项</Menu.Item>
                                    </Menu.SubMenu>
                                </Menu>
                            </div>
                            <div>
                                <Menu mode="horizontal">
                                    <Menu.Item key="mail">
                                        <Icon type="mail" />Navigation One
                                    </Menu.Item>
                                    <Menu.Item key="app" disabled>
                                        <Icon type="appstore" />Navigation Two
                                    </Menu.Item>
                                    <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                                        <MenuItemGroup title="Item 1">
                                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                                        </MenuItemGroup>
                                        <MenuItemGroup title="Item 2">
                                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                                        </MenuItemGroup>
                                    </SubMenu>
                                    <Menu.Item key="alipay">
                                        <a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                                    </Menu.Item>
                                </Menu>
                            </div>
                            <div>
                                <DatePicker size="small"/>
                                <br />
                                <MonthPicker placeholder="Select month" />
                                <br />
                                <RangePicker size="small"/>
                            </div>
                            <Split/>
                            <Select style={{width:200}}>
                                <Select.Option value="jack">Jack</Select.Option>
                                <Select.Option value="lucy">Lucy</Select.Option>
                                <Select.Option value="tom">Tom</Select.Option>
                            </Select>
                            <Split/>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                defaultValue={['a10', 'c12']}
                            >
                                {children}
                            </Select>
                            <div>
                                <Table dataSource={dataSource} columns={columns}/>
                            </div>
                            <Split/>
                            <Pagination size="small" total={50} showQuickJumper showSizeChanger/>
                            <Split/>

                            <Pagination showSizeChanger defaultCurrent={3} total={500} showQuickJumper/>
                            <Split/>
                            <Modal/>
                            <Split/>
                            <Button onClick={success}>Success</Button>
                            <Button onClick={error}>Error</Button>
                            <Button onClick={warning}>Warning</Button>
                            <Button onClick={info}>info</Button>
                            <Split/>
                            <div>
                                <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
                                <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
                                <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                                <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
                            </div>
                            <Split/>
                            <Alert/>
                            <Split/>
                            <Tab/>
                            <Split/>
                            <Tooltip/>
                            <Split/>
                            <Tag/>
                            <Split/>

                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        )
    }
}
