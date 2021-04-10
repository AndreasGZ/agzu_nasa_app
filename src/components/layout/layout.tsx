import React, { ReactElement } from "react";
import Navigation from "../navigation/navigation";

interface Props {
  children: ReactElement;
}

export default function Layout(props: Props): ReactElement {

  return (
    <div>
      <Navigation />

      <div className="ui container">
        {props.children}
      </div>
    </div>
  );
}