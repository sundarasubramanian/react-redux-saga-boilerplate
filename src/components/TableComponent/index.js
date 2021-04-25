import React,{Component} from 'react';
import { Table , Empty} from 'antd';
import { BackTop } from '../../../node_modules/antd/lib/index';

  
  
 
  
  
export default function(props){
  const columns = [
    {
      title: 'S.No',
      dataIndex: 'S.No',
      key: 'S.No',
      width:"75",
    },
    {
      title: 'Students Id',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      
    },
    {
      title: 'Year Of Batch',
      dataIndex: 'batch',
      key: 'batch',
    },
    {
      title: 'Mobile Number',
      dataIndex: 'mobileNumber',
      key: 'mobileNumber',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      fixed:'right',
      key:'actions',
      width:'100',
      render:()=><button className="text-primary " style={{cursor:"pointer",background:"none"}}  onClick={()=>props.editStudent()}>Edit</button>,
    },
  ];
    return(
        <Table 
        rowSelection={props.rowSelection}
        dataSource={props.studData} 
        columns={columns}
        pagination={{ position: 'both',showSizeChanger:true,pageSizeOptions:["10","20","30","40","50","100","500","1000"] }}
        scroll={{ x: 1500, y: 350 }}
        bordered 
        className="NunitoRegular"
        size={"small"}
        loading={props.studData.length==0}
         />
    )
} 