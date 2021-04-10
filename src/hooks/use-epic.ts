/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect, useState } from "react";
import debounce from "../tools/debounce";
import { fetchPost } from "../tools/tools";
import { EpicAllType, EpicType } from "../types/types";

export default function useEpic(epic: EpicType[] | undefined, epicAll: EpicAllType[]): [
  currentEpic: EpicType[],
  index: number,
  message: string,
  handlePrevClick: () => void,
  handleNextClick: () => void,
  results: EpicAllType[],
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  display: () => string,
  handleClickResult: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
] {
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("Erstes Bild");
  const [results, setResults] = useState<EpicAllType[]>([]);
  const [currentEpic, setCurrentEpic] = useState<EpicType[]>([]);

  useEffect(() => {
    if (epic) setCurrentEpic(epic)
  }, [epic])

  useEffect(
    () => {
      setMessage(state => `Bild ${index + 1}`);
    }, [index]
  )

  const handlePrevClick = debounce((): void => {
    if (index > 0) {
      setIndex(state => state - 1);
    }
  }, 150)

  const handleNextClick = debounce((): void => {
    if (index < currentEpic.length - 1) {
      setIndex(state => state + 1);
    }
  }, 150)

  const handleClickResult = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    setResults(state => []);
    const data = {
      date: e.currentTarget.textContent
    };
    fetchPost("/epic", data).then((resData) => {
      setIndex(state => 0);
      return resData;
    }).then(resData => {
      if (resData) {
        setCurrentEpic(state => resData);
      }
    }).catch(error => console.log(error));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const input = e.target.value.trim();
    if (input != "")
      setResults(state => epicAll.filter((el: EpicAllType, i: number) => el.date.indexOf(input) == 0));
    else setResults(state => [])
  }

  const display = (): string => {
    if (results.length) return "block";
    return "none";
  }

  return [
    currentEpic,
    index,
    message,
    handlePrevClick,
    handleNextClick,
    results,
    handleChange,
    display,
    handleClickResult
  ]
}