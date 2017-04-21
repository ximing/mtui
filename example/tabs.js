/**
 * Created by yeanzhi on 17/4/21.
 */
'use strict';
import React, {Component} from 'react';
import { Tabs, Button} from 'antd';
const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
const operations = <Button>Extra Action</Button>;

export default function () {
    return(
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
            <br/>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
                <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
                <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
                <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
                <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
                <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
            </Tabs>
            <br/>
            <Tabs tabBarExtraContent={operations}>
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
            </Tabs>
            <br/>
            <Tabs defaultActiveKey="2" size="small">
                <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
            </Tabs>
            <br/>
            <Tabs tabPosition='left'>
                <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
            </Tabs>
            <br/>
            <Tabs onChange={callback} type="card">
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        </div>
    )
}
