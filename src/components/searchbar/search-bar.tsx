import React, { ReactElement } from "react";
import { Techport } from "../../types/types";

interface Props {
  children?: ReactElement;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Searchbar({ children, value, handleChange }: Props): ReactElement {
  return (
    <div className="ui category search">
      <div className="ui icon input">
        <input className="prompt" type="text" placeholder={value}
          onChange={(e) => { handleChange(e) }} />
        <i className="search icon"></i>
      </div>
      {children}
    </div>
  );
}