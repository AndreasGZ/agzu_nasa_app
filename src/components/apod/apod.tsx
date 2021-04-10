import React, { ReactElement, useState } from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import ApodItem from "./apod-item/apod-item";
import { ApodType } from "../../types/types";

interface Props {
  apod: ApodType[];
  handleScroll: () => void;
}

export default function Apod({ apod, handleScroll }: Props): ReactElement {

  window.onscroll = handleScroll;

  return (
    <div className="ui two column grid" id="apod-component">
      {
        apod.length ? apod.map((element: ApodType, index: number) => {
          return (
            <ApodItem element={element} key={index} />
          )
        }) : <LoadingSpinner />
      }
    </div>
  );
}