import { useState } from "react";

import { IDataColumns, IUser, IValuesEdit } from "../interfaces/Iprops";
import { v4 as uuidv4 } from "uuid";
export const useUserOperatings = () => {
  const [isModalAddChecked, setisModalAddChecked] = useState(false);
  const myuuid = uuidv4();
  const [editingUser, setEditingUser] = useState<any>();
  const [user, setUser] = useState<IUser>({
    key: "",
    name: "",
    adress: "",
    age: "",
    cars: [{ brand: "" }],
    education: "",
    telephone: undefined,
    isDriver: "",
    childrenCount: undefined,
    hobby: "",
    email: "",
    typeTransport: "",
    ills: "",
    internetProvider: "",
    job: "",
  });

  const addFields = () => {
    const newfield = { brand: "" };
    setUser({ ...user, cars: [...user.cars, newfield] });
  };
  const handleCarChange = (index: number, event: any) => {
    const newCars = [...user.cars];
    newCars[index] = { brand: event.target.value };
    setUser({ ...user, cars: newCars });
  };
  const brands = user.cars.map((car) => car.brand);
  const removeFields = (index: number) => {
    const data = [...user.cars];
    data.splice(index, 1);
    setUser({ ...user, cars: data });
  };

  const newUserAtributes = (param: string, e: any) => {
    const attributeToUpdate = isModalAddChecked ? user : editingUser;
    const updatedAttribute = { ...attributeToUpdate, [param]: e.target.value };
    if (isModalAddChecked) {
      setUser(updatedAttribute);
    } else {
      setEditingUser(updatedAttribute);
    }
  };

  const dataColumns: IDataColumns = {
    key: myuuid,
    name: user.name,
    age: user.age,
    adress: user.adress,
    cars: user.cars.map((car) => car.brand + " "),
    education: user.education,
    telephone: user.telephone,
    isDriver: user.isDriver,
    childrenCount: user.childrenCount,
    hobby: user.hobby,
    email: user.email,
    typeTransport: user.typeTransport,
    ills: user.ills,
    internetProvider: user.internetProvider,
    job: user.job,
  };

  const valuesEdit: IValuesEdit = {
    name: editingUser?.name,
    age: editingUser?.age,
    adress: editingUser?.adress,
    education: editingUser?.education,
    telephone: editingUser?.telephone,
    isDriver: editingUser?.isDriver,
    childrenCount: editingUser?.childrenCount,
    hobby: editingUser?.hobby,
    email: editingUser?.email,
    typeTransport: editingUser?.typeTransport,
    ills: editingUser?.ills,
    internetProvider: editingUser?.internetProvider,
    job: editingUser?.job,
  };
  const setCarsDefault = () => {
    setUser({ ...user, cars: [{ brand: "" }] });
  };
  return {
    isModalAddChecked,
    setEditingUser,
    user,
    editingUser,
    setisModalAddChecked,
    newUserAtributes,
    myuuid,
    setUser,
    addFields,
    handleCarChange,
    brands,
    valuesEdit,
    dataColumns,
    removeFields,
    setCarsDefault,
  };
};
