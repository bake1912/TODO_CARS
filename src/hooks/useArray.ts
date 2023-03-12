import { useState } from "react";
import { IArray, IDataColumns } from "../interfaces/Iprops";

import { useUserOperatings } from "./useUserOperatings";

export function useArray() {
  const { myuuid } = useUserOperatings();
  const [array, setArray] = useState<IArray[]>([
    {
      key: myuuid,
      name: "Jonh",
      cars: ["BMW", "AUDI"].map((items) => items + " "),
    },
  ]);

  return {
    setArray,
    array,
  };
}
