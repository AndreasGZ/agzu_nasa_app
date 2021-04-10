/* eslint-disable indent */
import React, { useState } from "react";
import debounce from "../tools/debounce";
import { fetchPost } from "../tools/tools";

export function useRover(): [
  roverData: {
    photos: never[];
  },
  isClicked: boolean,
  handleInput: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, field: string) => void,
  handleClick: () => void
] {
  const [roverData, setRoverData] = useState({ photos: [] });
  const [sol, setSol] = useState(0);
  const [name, setName] = useState("curiosity");
  const [isClicked, setIsClicked] = useState(false);

  const handleInput = debounce((e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, field: string): void => {
    if (Number(e.target.value) > 1000) {
      e.target.value = "1000"
    }
    if (Number(e.target.value) < 0 || e.target.value == "" || e.target.value.includes(",") || e.target.value.includes(".")) {
      e.target.value = "0"
    }

    switch (field) {
      case "sol":
        setSol(state => Number(e.target.value));
        break;
      case "rovers":
        setName(state => e.target.value);
        break;
    }
  }, 300)

  const handleClick = debounce((): void => {
    setIsClicked(state => true);
    const data = {
      sol, name
    };
    fetchPost("/rover", data).then(resData => { setRoverData(state => resData) }).catch(error => console.log(error));
  }, 300)

  return [
    roverData,
    isClicked,
    handleInput,
    handleClick
  ];
}