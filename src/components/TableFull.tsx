import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "antd";
import { ModalContent } from "./ModalContent";
import { EditUser, EditUserCheck, useDeleteUser } from "./Functions";
import { TableContent } from "./TableContent";
import axios from "axios";
import { useUserOperatings } from "../hooks/useUserOperatings";
import { IArray, IDataColumns } from "../interfaces/Iprops";
import { useArray } from "../hooks/useArray";
export const TableFull = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { array, setArray } = useArray();
  const {
    isModalAddChecked,
    setEditingUser,
    user,
    setUser,
    editingUser,
    ourUser,
    setisModalAddChecked,
    newUserAtributes,
    brands,dataColumns
  } = useUserOperatings();



  const addUser = () => {
    setArray([...array, dataColumns]);
  };
  const editUser = () => {
    EditUserCheck(setArray, editingUser);
  };
  const modalClose = () => {
    setIsModalOpen(false);
  };

  const takeValues = () => {
    if (isModalAddChecked) {
      
      addUser();
    } else {
      editUser();
    }
  };
  /*const fetchData = async () => {
    await axios
      .get("https://63c5366ef3a73b34785099c0.mockapi.io/api/todoList/users")
      .then((response) => {
        setArray(response.data);
      });
  };
  useEffect(() => {
    fetchData();
  },[]);
  */
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
        takeValues={takeValues}
        userSet={newUserAtributes}
        ourUser={ourUser}
        editUser={editUser}
        addUser={addUser}
        isModalAddChecked={isModalAddChecked}
        isModalOpen={isModalOpen}
        modalClose={modalClose}
      />
    </>
  );
};
