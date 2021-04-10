import React, { ReactElement, useState } from "react";
import LoadingSpinner from "../../loading-spinner/loading-spinner";

interface Props {
  handleClick: () => void;
  handleInput: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, field: string) => void;
  setMessage: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export default function RoverForm({ handleClick, handleInput, setMessage }: Props): ReactElement {
  return (
    <div className="ui form">
      <div className="two fields">
        <div className="field">
          <label>Rover </label>
          <select name="rovers" placeholder="curiosity" onChange={(e) => { handleInput(e, "rovers") }}>
            <option value="curiosity">Curiosity</option>
            <option value="opportunity">Opportunity	</option>
            <option value="spirit">Spirit</option>
          </select>
        </div>
        <div className="field">
          <label>Sol </label>
          <input name="sol" type="number" min="0" max="1000" step="1" placeholder="0"
            onChange={(e) => { handleInput(e, "sol") }} />
        </div>
      </div>
      <button className="ui primary button marginBottom"
        onClick={() => {
          handleClick();
          setMessage(<LoadingSpinner />);
          setTimeout(() => {
            setMessage(<p className="ui segment">No pictures found for this day</p>);
          }, 5000);
        }}
      > Search Photos </button>
    </div>
  );
}