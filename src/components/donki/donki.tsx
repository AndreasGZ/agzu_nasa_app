import React, { ReactElement } from "react";
import { DonkiType } from "../../types/types";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import DonkiForm from "./donki-form/donki-form";
import DonkiItem from "./donki-item/donki-item";

interface Props {
  donki: DonkiType[];
  startDate: string;
  endDate: string;
  maxDate: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Donki({ donki, startDate, endDate, maxDate, handleChange, handleSubmit }: Props): ReactElement {
  return (
    <div className="ui middle aligned list">
      <DonkiForm startDate={startDate} endDate={endDate} maxDate={maxDate}
        handleChange={handleChange} handleSubmit={handleSubmit}
      />
      {donki.length ? donki.map((news: DonkiType) => (
        <DonkiItem key={news.messageID} news={news} />)) : <LoadingSpinner />}
    </div>
  );
}