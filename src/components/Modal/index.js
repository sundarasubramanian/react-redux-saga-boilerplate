import React from 'react';
import {Modal,Steps,Button,} from 'antd';
import ModelContent from 'components/StudentsComponent/ModelContent';
const {Step} =Steps;


export default class ModalComp extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <Modal
            title={this.props.title}
            visible={this.props.visible}
            onOk={this.props.handleOk}
            onCancel={this.props.handleCancel}
            >
            {this.props.modalData}
        </Modal>
        )
    }
}