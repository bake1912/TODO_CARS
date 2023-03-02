import { Space, Table, Popconfirm } from "antd";
import { DataType } from "../interfaces/Iprops";
import type { ColumnsType } from "antd/es/table";
import { ColumnsTopOptions } from "../enum/columnsTopOptions";
import { TableContentProps } from "../interfaces/Iprops";
import { useState } from "react";
interface TableConentObjProp{
  tableContent:TableContentProps
}

export const TableContent = ({
  setIschecked,
  setIsModalOpen,
  editUser,
  setEditingUser,
  deleteUser,
  setArray,
  array
  
}: TableContentProps) => {
  const columns: ColumnsType<DataType> = [
    {
      title: ColumnsTopOptions.NAME,
      dataIndex: ColumnsTopOptions.NAME,
      key: ColumnsTopOptions.NAME,
      render: (text) => <a>{text}</a>,
    },
    {
      title: ColumnsTopOptions.AGE,
      dataIndex: ColumnsTopOptions.AGE,
      key: ColumnsTopOptions.AGE,
    },
    {
      title: ColumnsTopOptions.ADRESS,
      dataIndex: ColumnsTopOptions.ADRESS,
      key: ColumnsTopOptions.ADRESS,
    },
    {
      title: ColumnsTopOptions.CAR,
      dataIndex: ColumnsTopOptions.CAR,
      key: ColumnsTopOptions.CAR,
    },
/*
    {
      title: 'cars',
      dataIndex: 'cars',
      render: () => (
        <>
           {cars.map((car) => (
            <span>
              {car.brand+' '} 
            </span>
          ))}
        </>
      ),
    },
    */
    {
      title: "Action",
      key: "action",

      render: (record) => (
        <Space size="middle">
          <a
            onClick={() => {
              setIschecked(false);
              setIsModalOpen(true);
              editUser(record, setEditingUser);
            }}
          >
            Edit
          </a>
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={() => deleteUser(record, setArray)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table
        columns={columns}
        pagination={{ pageSize: 3 }}
        dataSource={array}
      />
    </>
  );
};
