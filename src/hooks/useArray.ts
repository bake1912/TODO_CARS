import React, { useEffect, useState } from "react";
import { IArray, IDataColumns } from "../interfaces/Iprops";

import { v4 as uuidv4 } from "uuid";
import { useUserOperatings } from "./useUserOperatings";


export function useArray() {
  const { myuuid } = useUserOperatings();
  const [array, setArray] = useState<IArray[]>([
    {
      key: myuuid,
      name: "Jonh",
      age: "28",
      adress: "Trudova 3",
      cars: ["BMW", "AUDI"].map((items) => items + " "),
    },
  ]);


  return {
    setArray,
    array,
  };
}
