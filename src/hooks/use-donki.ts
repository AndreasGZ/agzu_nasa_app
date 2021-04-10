/* eslint-disable indent */
import { useEffect, useState } from "react";
import { fetchPost, getInitialInterval } from "../tools/tools";
import { DonkiType } from "../types/types";

export function useDonki(): [
  donki: DonkiType[] | undefined,
  startDate: string,
  endDate: string,
  maxDate: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  useInitialDonki: () => void
] {
  const [donki, setDonki] = useState();
  const [startDate, setStartDate] = useState(getInitialInterval()[1]);
  const maxDate = getInitialInterval()[0];
  const [endDate, setEndDate] = useState(maxDate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(wichDate);
    let newDate = e.target.value;
    const maxDateArr = maxDate.split("-").map(el => Number(el));
    const newDateArr = newDate.split("-").map(el => Number(el));
    const startingPoint = newDate.split("-");
    const startingPointNr = newDate.split("-").map(el => Number(el));
    startingPoint[2] = "01";
    if (startingPointNr[1] - 1 < 1) {
      startingPoint[1] = "12";
      startingPoint[0] = `${startingPointNr[0] - 1}`;
    }
    else
      startingPoint[1] = `${startingPointNr[1] - 1}`;

    if ((newDateArr[0] > maxDateArr[0]) ||
      (newDateArr[0] == maxDateArr[1] && newDateArr[0] > maxDateArr[1]) ||
      (newDateArr[0] == maxDateArr[1] && newDateArr[0] == maxDateArr[1] && newDateArr[2] > maxDateArr[2]))
      newDate = maxDate

    setEndDate(state => newDate);
    setStartDate(state => startingPoint.join("-"));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = {
      startDate, endDate
    };
    // console.log(data);
    fetchPost("/donki", data).then(resData => { setDonki(state => resData) }).catch(error => console.log(error));

    const startDateArr = startDate.split("-").map(el => Number(el));
    const endDateArr = endDate.split("-").map(el => Number(el));
    if ((startDateArr[0] > endDateArr[0]) ||
      (startDateArr[0] == endDateArr[0] && startDateArr[1] > endDateArr[1]) ||
      (startDateArr[0] == endDateArr[0] && startDateArr[1] == endDateArr[1] && startDateArr[2] > endDateArr[2])) {
      const tempDate = startDate;
      setStartDate(state => endDate);
      setEndDate(state => tempDate);
    }
  }

  const useInitialDonki = (): void => {
    useEffect(() => {
      const getInitialDonki = () => {
        const data = {
          startDate, endDate
        };
        fetchPost("/donki", data).then(resData => { setDonki(state => resData) }).catch(error => console.log(error));
      }

      getInitialDonki();
    }, []);
  }

  return [
    donki,
    startDate,
    endDate,
    maxDate,
    handleChange,
    handleSubmit,
    useInitialDonki
  ]
}