export interface DataType {
  key: number;
  name: string;
  age: number;
  adress: string;
  cars: ICars[];
}
export interface ModalProps {
  userSet: (param: string, e: any) => void;
  addUser: () => void;
  isModalAddChecked: boolean;
  isModalOpen: boolean;
  modalClose: () => void;
  ourUser: {
    name: string;
    age: string;
    adress: string;
  };
  editUser: () => void;
  handleFormChange:(index:number,event:any)=>void
}
export interface ModalObjectProp {
  userSet: (param: string, e: any) => void;
  addUser: () => void;
  isChecked: boolean;
  isModalOpen: boolean;
  modalClose: () => void;
  ourUser: {
    name: string;
    age: string;
    adress: string;
    cars: ICars[];
  };
  editUser: () => void;
}
export interface ICars {
  brand: string;
  [key: string]: any;
}
export interface TableContentProps {
  setIschecked: (e: any) => void;
  setIsModalOpen: (e: any) => void;
  editUser: (record: any, setEditingUser: any) => void;
  setEditingUser: (e: any) => void;
  deleteUser: (record: any, setArray: any) => void;
  setArray: (e: any) => void;
  array: any;
  cars: ICars[];
}

export interface IUser {
  key: string;
  name: string;
  adress: string;
  age: string;
  cars: ICars[];
}
export interface IArray {
  key: string;
  name: string;
  age: string;
  adress: string;
  cars: string[];
}
export interface IDataColumns {
  key: string;
  name: string;
  age: string;
  adress: string;
  cars: string[];
}
