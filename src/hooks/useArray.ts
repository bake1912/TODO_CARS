import React, { useState } from "react";
import { IArray, IDataColumns } from "../interfaces/Iprops";

import { v4 as uuidv4 } from "uuid";
import { useUserOperatings } from "./useUserOperatings";
const myuuid = Math.trunc(Math.random()*100)

export function useArray() {
  const {user } = useUserOperatings();
  const [array, setArray] = useState<IArray[]>([
    {
      key: myuuid,
      name: "Jonh",
      age: "28",
      adress: "Trudova 3",
      cars:['']
    },
  ]);

  return {
    setArray,
    array,
    
  };
}
