import { useEffect, useState } from "react";
import { array } from "yup";
import { ICars, IDataColumns, IUser } from "../interfaces/Iprops";
import { useArray } from "./useArray";
import { v4 as uuidv4 } from "uuid";
export const useUserOperatings = () => {
  let newUserAtributes = (param: string, e: any) => {};
  const [user, setUser] = useState<IUser>({
    key: "",
    name: "",
    adress: "",
    age: "",
    cars: [{ brand: "" }],
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

  const [isModalAddChecked, setisModalAddChecked] = useState(false);
  const [editingUser, setEditingUser] = useState<any>();

  newUserAtributes = (param, e: any) => {
    if (isModalAddChecked) {
      if (param == "name") {
        setUser({
          ...user,
          name: e.target.value,
        });
      }
      if (param == "age") {
        setUser({
          ...user,
          age: e.target.value,
        });
      }
      if (param == "adress") {
        setUser({
          ...user,
          adress: e.target.value,
        });
      }
    } else {
      if (param == "name") {
        setEditingUser((user: string[]) => {
          return { ...user, name: e.target.value };
        });
      }
      if (param == "age") {
        setEditingUser((user: string[]) => {
          return { ...user, age: e.target.value };
        });
      }
      if (param == "adress") {
        setEditingUser((user: string[]) => {
          return { ...user, adress: e.target.value };
        });
      }
    }
  };
  const myuuid = uuidv4();

  const dataColumns: IDataColumns = {
    key: myuuid,
    name: user.name,
    age: user.age,
    adress: user.adress,
    cars: user.cars.map((car) => car.brand + " "),
  };

  let valuesEdit = {
    name: editingUser?.name,
    age: editingUser?.age,
    adress: editingUser?.adress,
    cars: user.cars,
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
