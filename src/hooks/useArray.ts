import { useState } from "react";
import { IArray, IDataColumns } from "../interfaces/Iprops";

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
      education: "Higher Education",
      telephone: 380984512321,
      isDriver: "Yes",
      childrenCount: 2,
      hobby: "football",
      email: "Jonh1993@gmail.com",
      typeTransport: "Auto",
      ills: "Not exist",
      internetProvider: "Volya",
      job: "Artist",
    },
  ]);

  return {
    setArray,
    array,
  };
}
