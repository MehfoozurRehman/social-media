import React from "react";

export default function UserMessage({ data, timeStamp }) {
  return (
    <div className="user__message">
      <div className="message__content">
        <div className="message__time__stamp">{timeStamp}</div>
        <div className="user__message__data">{data}</div>
      </div>
    </div>
  );
}
