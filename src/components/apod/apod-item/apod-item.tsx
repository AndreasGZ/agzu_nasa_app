import React, { ReactElement, useState } from "react";
import { ApodType } from "../../../types/types";

interface Props {
  element: ApodType;
}

export default function ApodItem({ element }: Props): ReactElement {
  const { title, hdurl, date, explanation, copyright, media_type, url } = element;
  const [show, setShow] = useState(false);

  const showElement = () => {
    setShow(state => !state);
  }

  return (
    <div className="column">
      <div className="ui fluid card" onClick={showElement}>
        <div className="image backgroundImageCard" style={{ backgroundImage: `url(${url && hdurl})` }}>
          {(media_type == "video") &&
            <iframe
              width="90%" height="320"
              style={{ margin: "15px 5%" }}
              src={url}></iframe>
          }
        </div>

        <div className="content" style={show ? { display: "block" } : { display: "none" }}>
          <h1 className="header">{title}</h1>
          <div className="meta">
            <span className="date">Date: {date}</span>
          </div>
          <p className="description">{explanation}</p>
        </div>

        {copyright && <div className="extra content">
          <span>&copy; {copyright}</span>
        </div>}
      </div>
    </div >
  );
}