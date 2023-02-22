import { useState } from "react";
import { Car, IUser } from "../interfaces/Iprops";
import { useArray } from "./useArray";

export const useUserOperatings = () => {

  let newUserAtributes = (param: string, e: any) => { };
  const [user, setUser] = useState<IUser>({
    key: 0,
    name: "",
    adress: "",
    age: "",
    cars: [{ brand: '' },]

  });
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
      if (param == "cars") {
        setUser({
          ...user,
          cars: [...user.cars, { brand: e.target.value }]
        });
      }
      if (param == "carsInput") {
        setUser({
          ...user,
          cars: [...user.cars, { brand: '' }]
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

  let ourUser = isModalAddChecked
    ? {
      name: user.name,
      age: user.age,
      adress: user.adress,
      cars: user.cars
    }
    : {
      name: editingUser?.name,
      age: editingUser?.age,
      adress: editingUser?.adress,
      cars: user.cars

    };

  return {
    isModalAddChecked,
    setEditingUser,
    user,
    editingUser,
    setisModalAddChecked,
    newUserAtributes,
    ourUser,
    setUser,
  };
};
