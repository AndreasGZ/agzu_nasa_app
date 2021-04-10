import React, { ReactElement } from "react";
import { Fotos } from "../../../types/types";

interface Props {
  foto: Fotos;
}

export default function RoverItem({ foto }: Props): ReactElement {
  return (
    <div className="column">
      <div className="ui fluid card">
        <div className="image backgroundImageCard" style={{
          backgroundImage: `url(${foto.img_src})`
        }}>
        </div>

        <div className="content">
          <div className="meta">
            <span className="date">
              Date: {foto.earth_date}
            </span>
          </div>
          <div className="description">
            <div>
              <h3>{foto.rover.name}</h3>
              <p>Camera: {foto.camera.full_name}</p>
              <p>Landing: {foto.rover.landing_date}</p>
              <p>Launch: {foto.rover.launch_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}