import React, { ReactElement } from "react";

interface Props {
  startDate: string;
  endDate: string;
  maxDate: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function DonkiForm({ startDate, endDate, maxDate, handleChange, handleSubmit }: Props): ReactElement {
  return (
    <form className="ui form" onSubmit={(e) => { handleSubmit(e) }}>
      <div className="two fields">
        <div className="field">
          <label>Date</label>
          <input type="date" value={endDate}
            max={maxDate}
            min={"2015-02-01"}
            onChange={(e) => { handleChange(e) }}
          />
        </div>
      </div>
      <button className="ui primary button marginBottom">
        Get spaceweather news
      </button>
    </form>
  )
}