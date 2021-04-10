import React, { ReactElement } from "react";
import { DonkiType } from "../../../types/types";

interface Props {
  news: DonkiType;
}

export default function DonkiItem({ news }: Props): ReactElement {
  const message = news.messageBody.split("Disclaimer:");
  const header = message[0].split("##")[1];
  const type = message[0].split("Message Type:")[1].split("##")[0];
  const summary = message[1].split("Summary:")[1].split("##")[0];

  return (
    <div className="item">
      <div className="ui message content">
        <div className="header">
          <h2>{header}</h2>
        </div>
        <div className="meta">
          <p>{type}</p>
          <div>ID: {news.messageID}</div>
          <div>Type: {news.messageType}</div>
          <div>Time: {news.messageIssueTime}</div>
          <br />
        </div>
        <div className="description">
          <p>{summary}</p>
          <br />
        </div>
        <div className="extra">
          <p>
            Link: <a href={news.messageURL}>{news.messageURL}</a>
          </p>
        </div>
      </div>
    </div>
  );
}