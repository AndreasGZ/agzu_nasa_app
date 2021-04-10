/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
import { useCallback, useEffect, useState } from "react";
import { ApodType, EpicType, Techport } from "../types/types";

export function useGetData(): {
  apod: ApodType[] | undefined;
  epic: EpicType[] | undefined;
  epicAll: any;
  techport: Techport | undefined;
} {
  const [apod, setApod] = useState();
  const [epic, setEpic] = useState();
  const [epicAll, setEpicAll] = useState();
  const [techport, setTechport] = useState();

  const setState = useCallback((apiNames: string[], name: string, data: any) => {

    switch (name) {
      case apiNames[0]:
        setApod(state => data);
        break;
      case apiNames[1]:
        setEpic(state => data);
        break;
      case apiNames[2]:
        setEpicAll(state => data);
        break;
      case apiNames[3]:
        setTechport(state => data);
        break;
    }
  }, []);

  const getState = () => {
    return {
      apod, epic, epicAll, techport
    }
  }

  useEffect(() => {
    const getInitialData = () => {
      // console.log("get Data")
      const apiNames: string[] = ["apod", "epic", "epicAll", "techport"];
      apiNames.forEach((name: string) => {
        fetch(`/${name}`)
          .then(response => response.json())
          .then(
            res => {
              setState(apiNames, name, res);
            }
          );
      });
    }

    getInitialData();

    return () => {
      // Do some cleanup   
    }
  }, [setState]);

  return getState();
}




