
export const EditUser = (
  record: string[],
  setEditingUser: (e: string[]) => void
) => {
  setEditingUser({ ...record });
};

export const EditUserCheck = (setArray: (e: any) => void, editingUser: any) => {
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

export const useMyHook = (a:string) =>{

const myFunction = () =>{

}

return (
  myFunction
)
}
/*
imop {hook} from "dkfndskfjn"
connst App =() =>{

  
}
const {myFunction} = useMyHook("dsfsdf")
myFunction(fdsfjldksjfsdkjf)
*/


  