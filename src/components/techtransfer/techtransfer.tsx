/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react";
import Searchbar from "../searchbar/search-bar";
import TechtransferItem from "./techtransfer-item/techtransfer-item";

interface Props {
  results: string[];
  handleScroll: () => void;
  handleChange: (...args: any[]) => void;
  error: string;
}

export default function Techtransfer({ results, handleScroll, handleChange, error }: Props): ReactElement {

  window.onscroll = handleScroll;

  return (
    <div>
      <Searchbar value="Search patents..." handleChange={handleChange}>
        <div></div>
      </Searchbar>
      <div className="ui middle divided aligned items">
        {
          (results && results.length) > 0 ? results.map((element: any) => (
            <TechtransferItem key={element[0]} element={element} />
          ))
            : <div>{error}</div>
        }
      </div >
    </div >
  );
}