/**
 * Created by yeanzhi on 17/4/20.
 */
'use strict';
import React from 'react';
import { Modal, Button } from 'mtui-d';

function info() {
    Modal.info({
        title: 'This is a notification message',
        content: (
            <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
            </div>
        ),
        onOk() {}
    });
}

function success() {
    Modal.success({
        title: 'This is a success message',
        content: 'some messages...some messages...',
    });
}

function error() {
    Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
}

function warning() {
    Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
    });
}
export default class LocalizedModal extends React.Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({
            visible: false,
        });
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Show Modal</Button>
                <Modal title="Modal" visible={this.state.visible}
                       onOk={this.handleOk} onCancel={this.handleCancel}
                       okText="OK" cancelText="Cancel"
                >
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                    <p>Bla bla ...</p>
                </Modal>
                <br/>
                <Button onClick={confirm}>confirm</Button>
                <Button onClick={info}>Info</Button>
                <Button onClick={success}>Success</Button>
                <Button onClick={error}>Error</Button>
                <Button onClick={warning}>Warning</Button>
            </div>
        );
    }
}

function confirm() {
    Modal.confirm({
        title: 'Confirm',
        content: 'Bla bla ...',
        okText: 'OK',
        cancelText: 'Cancel',
    });
}
