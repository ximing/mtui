/**
 * Created by yeanzhi on 17/4/12.
 */
'use strict';
import React, {Component} from "react";
import {Button,Input,Spin,Menu,Icon,Checkbox,Table,Radio,DatePicker,Select,Pagination,message,notification} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { MonthPicker, RangePicker } = DatePicker;
message.config({duration:1000000});
notification.config({
    duration: 300000
});

import Split from './split';
import Modal from './modal';
import Alert from './alert';
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
                    <DatePicker />
                    <br />
                    <MonthPicker placeholder="Select month" />
                    <br />
                    <RangePicker />
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
            </div>

        )
    }
}
