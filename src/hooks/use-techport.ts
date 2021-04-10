/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { fetchPost } from "../tools/tools";

export function useTechPort(id: string): [
  techportResult: any
] {
  const [techportResult, setTechportResult] = useState<any>();

  useEffect(() => {
    const getTechportResult = () => {
      const data = {
        id
      };
      fetchPost("/techport", data).then(resData => {
        setTechportResult(resData);
      }).catch(error => console.log(error));
    }

    getTechportResult();
  }, [id])


  return [
    techportResult,
  ];
}