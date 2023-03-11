import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "antd";
import { ModalContent } from "./ModalContent";
import { EditUser, EditUserCheck, useDeleteUser } from "./Functions";
import { TableContent } from "./TableContent";
import { useUserOperatings } from "../hooks/useUserOperatings";
import { useArray } from "../hooks/useArray";
export const TableFull = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { array, setArray } = useArray();
  const {
    isModalAddChecked,
    setEditingUser,
    user,
    editingUser,
    setisModalAddChecked,
    newUserAtributes,
    valuesEdit,
    dataColumns,
    handleCarChange,
    setCarsDefault,
  } = useUserOperatings();

  const addUser = () => {
    setArray([...array, dataColumns]);
    setCarsDefault();
  };
  const editUser = () => {
    EditUserCheck(setArray, editingUser);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TableContent
        cars={user.cars}
        array={array}
        deleteUser={useDeleteUser}
        editUser={EditUser}
        setArray={setArray}
        setEditingUser={setEditingUser}
        setIsModalOpen={setIsModalOpen}
        setIschecked={setisModalAddChecked}
      />
      <Button
        type="primary"
        onClick={() => {
          setisModalAddChecked(true);
          setIsModalOpen(true);
        }}
      >
        Add
      </Button>
      <ModalContent
        handleCarChange={handleCarChange}
        userSet={newUserAtributes}
        valuesEdit={valuesEdit}
        editUser={editUser}
        addUser={addUser}
        isModalAddChecked={isModalAddChecked}
        isModalOpen={isModalOpen}
        modalClose={modalClose}
      />
    </>
  );
};
