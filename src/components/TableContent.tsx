import { Space, Table, Popconfirm } from "antd";
import { ColumnsTopOptions } from "../enum/columnsTopOptions";
import { TableContentProps } from "../interfaces/Iprops";
export const TableContent = ({
  setIschecked,
  setIsModalOpen,
  editUser,
  setEditingUser,
  deleteUser,
  setArray,
  array,
}: TableContentProps) => {
  const columns = [
    {
      title: ColumnsTopOptions.NAME,
      dataIndex: ColumnsTopOptions.NAME,
      key: ColumnsTopOptions.NAME,
      render: (text: string) => <a>{text}</a>,
    },

    {
      title: ColumnsTopOptions.CAR,
      dataIndex: ColumnsTopOptions.CAR,
      key: ColumnsTopOptions.CAR,
    },

    {
      title: "Action",
      key: "action",

      render: (record: any) => (
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
        pagination={{ pageSize: 8 }}
        dataSource={array}
      />
    </>
  );
};
