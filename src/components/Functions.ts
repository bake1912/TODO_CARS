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
  formik.values.age = "";
  formik.values.adress = "";
  formik.values.name = "";
  formik.values.age = undefined;
  formik.values.adress = "";
  formik.values.education = "";
  formik.values.isDriver = "";
  formik.values.childrenCount = undefined;
  formik.values.hobby = "";
  formik.values.email = "";
  formik.values.ills = "";
  formik.values.job = "";
  formik.values.telephone = undefined;
  formik.values.internetProvider = "";
  formik.values.typeTransport = "";
  user.cars = [];
};
export const defaultValuesEdit = (formik: FormikValues) => {
  formik.values.name = " ";
  formik.values.age = 3;
  formik.values.adress = " ";
  formik.values.education = " ";
  formik.values.isDriver = "Yes";
  formik.values.childrenCount = 2;
  formik.values.hobby = " ";
  formik.values.email = "123456@gmail.com";
  formik.values.ills = " ";
  formik.values.job = " ";
  formik.values.telephone = 380982746426;
  formik.values.typeTransport = " ";
  formik.values.internetProvider = " ";
};
