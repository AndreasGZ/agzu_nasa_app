import React, { ReactElement } from "react";
import { useParams } from "react-router-dom";
import { useTechPort } from "../../hooks/use-techport";
import LoadingSpinner from "../loading-spinner/loading-spinner";

export default function Techport(): ReactElement {
  const { projectId } = useParams<{ projectId: string }>();
  const [techportResult] = useTechPort(projectId);
  const regEx = new RegExp("<[^<]*>");
  // console.log(techportResult)

  return (
    <div>
      {techportResult ?
        <div className="ui segment content">
          <h2 className="header">{techportResult.project.title && techportResult.project.title}</h2>
          <div className="description">
            <p>{techportResult.project.description && techportResult.project.description.split(regEx).join(" ")}</p>
            {techportResult.project.website &&
              <div>
                <span>Link: </span>
                <a href={techportResult.project.website}>{techportResult.project.website}</a>
              </div>
            }
          </div>
        </div> :
        <LoadingSpinner />}
    </div>
  );
}