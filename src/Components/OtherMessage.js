import React from "react";

export default function OtherMessage({ data, timeStamp, imgURL, name }) {
  return (
    <div className="other__message">
      <div className="other__message__user">
        <img
          src={imgURL}
          alt="user__img"
          className="other__message__user__img"
        />
        <div className="other__message__user__status"></div>
      </div>
      <div className="message__content">
        <div className="message__time__stamp">
          {name}, {timeStamp}
        </div>
        <div className="other__message__data">{data}</div>
      </div>
    </div>
  );
}
