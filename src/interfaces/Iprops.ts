
export interface IValuesEdit {
  name: string;
      cars:ICars[]
}
export interface ModalProps {
  userSet: (param: string, e: any) => void;
  addUser: () => void;
  isModalAddChecked: boolean;
  isModalOpen: boolean;
  modalClose: () => void;
  valuesEdit: IValuesEdit;
  editUser: () => void;
  handleCarChange: (index: number, event: any) => void;
}

export interface ICars {
  brand: string;
  [key: string]: string;
}
export interface TableContentProps {
  setIschecked: (e: any) => void;
  setIsModalOpen: (e: any) => void;
  editUser: (record: any, setEditingUser: any) => void;
  setEditingUser: (e: any) => void;
  deleteUser: (record: any, setArray: any) => void;
  setArray: (e: any) => void;
  array: IArray[];
  cars: ICars[];
}

export interface IUser {
  key: string;
  name: string;

  cars: ICars[];
}
export interface IArray {
  key: string;
  name: string;
  cars: string[];
 
}
export interface IDataColumns {
  key: string;
  name: string;

  cars: string[];
 
}
