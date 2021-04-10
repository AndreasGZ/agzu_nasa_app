/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement } from "react";

interface Props {
  element: any;
}

export default function TechtransferItem({ element }: Props): ReactElement {
  const regEx = new RegExp("<[^<]*>");
  const header = element[2].split(regEx).join(" ");
  const body = element[3].split(regEx).join(" ");
  // console.log(header);
  return (
    <div className="item">
      <div className="image">
        <img src={element[10]} style={{ width: "100%" }} />
      </div>
      <div className="content">
        <div className="header">
          <h4>{header}</h4>
        </div>
        <div className="description">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
}