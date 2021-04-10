import React, { ReactElement, useState } from "react";
import { Fotos } from "../../types/types";
import LoadingSpinner from "../loading-spinner/loading-spinner";
import RoverForm from "./rover-form/rover-form";
import RoverItem from "./rover-item/rover-item";

interface Props {
  roverData: any[];
  isClicked: boolean;
  handleInput: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, field: string) => void;
  handleClick: () => void;
  handleScroll: () => void
}

export default function Rover({ roverData, isClicked, handleInput, handleClick, handleScroll }: Props): ReactElement {
  const [message, setMessage] = useState(<LoadingSpinner />);

  window.onscroll = handleScroll;

  return (
    <div>
      <RoverForm handleClick={handleClick} handleInput={handleInput} setMessage={setMessage} />

      {
        isClicked ?
          roverData.length > 0 ?
            <div className="ui three column grid">{
              roverData.map((foto: Fotos) => (
                <RoverItem key={foto.id} foto={foto} />
              ))}</div>
            : <div>
              {message}
            </div>
          : null
      }
    </div>
  );
}