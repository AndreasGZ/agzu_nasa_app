/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useEffect } from "react";
import { EpicAllType, EpicType } from "../../types/types";
import Searchbar from "../searchbar/search-bar";

interface Props {
  currentEpic: EpicType[];
  index: number;
  message: string;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  results: EpicAllType[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  display: () => string;
  handleClickResult: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default function Epic({ currentEpic, index, message, handlePrevClick, handleNextClick,
  results, handleChange, display, handleClickResult }: Props): ReactElement {

  const element = currentEpic[index];
  const date = element.date.split(" ");
  const dateArr = date[0].split("-");
  const year = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];
  useEffect(() => {
    const images: any[] = [];
    function preload() {
      for (let i = 1; i < currentEpic.length; i++) {
        const element = currentEpic[i];
        const date = element.date.split(" ");
        const dateArr = date[0].split("-");
        const year = dateArr[0];
        const month = dateArr[1];
        const day = dateArr[2];
        images[i] = new Image();
        images[i].src = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${element.image}.png`;
      }
    }
    preload();
  }, [currentEpic])

  // console.log(currentEpic)
  // currentEpic wird nach Auswahl manchmal nicht aktualisiert

  return (
    <div>
      <div className="relative varWidth marginBottom">
        {/* Searchbar einfügen und darüber die Results bestimmen */}
        <Searchbar value={`${year}-${month}-${day}`} handleChange={handleChange} />
        <div className="searchResults epicResults" style={{ display: `${display()}` }}>
          {results.length ? results.map((result: any, index: number) => (
            <div key={index} className="resultItem"
              onClick={(e) => { handleClickResult(e) }}>{result.date}</div>
          )
          ) : null}
        </div>
      </div>
      <div className="relative">
        <div className="opacity1 positionStart"
          onClick={handlePrevClick}
        > </div>
        <div className="opacity1 positionEnd"
          onClick={handleNextClick}
        > </div>

        <div>
          <img src={`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${element.image}.png`}
            style={{ width: "100%" }} />
        </div>

        <div className="ui segment list varWidth">
          <div className="item">
            <h3 className="header">{message}</h3>
            <span>{element.date}</span>
          </div>
          <div className="item">
            <h4 className="header">Attitude quaternions: </h4>
            <span className="blockSpan">Q0: {element.coords.attitude_quaternions.q0}</span>
            <span className="blockSpan">Q1: {element.coords.attitude_quaternions.q1}</span>
            <span className="blockSpan">Q2: {element.coords.attitude_quaternions.q2}</span>
            <span className="blockSpan">Q3: {element.coords.attitude_quaternions.q3}</span>
          </div>

          <div className="item">
            <h4 className="header">Centroid coordinates: </h4>
            <span className="blockSpan">latitude: {element.coords.centroid_coordinates.lat}</span>
            <span className="blockSpan">longitude: {element.coords.centroid_coordinates.lon}</span>
          </div>

          <div className="item">
            <h4 className="header">Discover position: </h4>
            <span className="blockSpan">x: {element.coords.dscovr_j2000_position.x}</span>
            <span className="blockSpan">y: {element.coords.dscovr_j2000_position.y}</span>
            <span className="blockSpan">z: {element.coords.dscovr_j2000_position.z}</span>
          </div>

          <div className="item">
            <h4 className="header">Lunar position: </h4>
            <span className="blockSpan">x: {element.coords.lunar_j2000_position.x}</span>
            <span className="blockSpan">y: {element.coords.lunar_j2000_position.y}</span>
            <span className="blockSpan">z: {element.coords.lunar_j2000_position.z}</span>
          </div>

          <div className="item">
            <h4 className="header">Sun position: </h4>
            <span className="blockSpan">x: {element.coords.sun_j2000_position.x}</span>
            <span className="blockSpan">y: {element.coords.sun_j2000_position.y}</span>
            <span className="blockSpan">z: {element.coords.sun_j2000_position.z}</span>
            <br />
          </div>

        </div>
      </div>
    </div >
  );
}