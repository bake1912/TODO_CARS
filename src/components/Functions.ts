import { FormikValues } from "formik";
import { IUser } from "../interfaces/Iprops";

export const EditUser = (
  record: string[],
  setEditingUser: (e: string[]) => void
) => {
  setEditingUser({ ...record });
};

export const EditUserCheck = (
  setArray: (e: any) => void,
  editingUser: IUser
) => {
  setArray((array: any[]) => {
    return array.map((user) => {
      if (user.key === editingUser.key) {
        return editingUser;
      } else {
        return user;
      }
    });
  });
};
export const useDeleteUser = (record: any, setArray: (e: any) => void) => {
  setArray((array: any[]) => {
    return array.filter((user) => user.key !== record.key);
  });
};

export const defaultValuesAdd = (formik: FormikValues, user: IUser) => {
  formik.values.name = "";

  user.cars = [];
};
export const defaultValuesEdit = (formik: FormikValues) => {
  formik.values.name = " ";
};
