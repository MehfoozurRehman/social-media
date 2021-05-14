import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import OtherMessage from "../Components/OtherMessage";
import UserMessage from "../Components/UserMessage";
import "./Chat.scss";
import imgURL from "../Assets/user__img.png";
import Picker from "emoji-picker-react";

// function EmojiPicker() {
//   const [chosenEmoji, setChosenEmoji] = useState(null);

//   const onEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject);
//   };

//   return (
//     <div>
//       {chosenEmoji ? (
//         <span>You chose: {chosenEmoji.emoji}</span>
//       ) : (
//         <span>No emoji Chosen</span>
//       )}
//       <Picker onEmojiClick={onEmojiClick} />
//     </div>
//   );
// }

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Logout");
    }
  }
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };
  return (
    <div className="chat">
      <div className="chat__panel">
        <div className="chat__panel__input__box">
          <div className="chat__screen__messages__input__field">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.707"
              height="18.707"
              viewBox="0 0 14.707 14.707"
              style={{ marginRight: "1em" }}
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(-347 -102)"
              >
                <g
                  id="Ellipse_2"
                  data-name="Ellipse 2"
                  transform="translate(347 102)"
                  fill="none"
                  stroke="#33394b"
                  stroke-width="2"
                >
                  <circle cx="6.5" cy="6.5" r="6.5" stroke="none" />
                  <circle cx="6.5" cy="6.5" r="5.5" fill="none" />
                </g>
                <line
                  id="Line_1"
                  data-name="Line 1"
                  x2="4"
                  y2="4"
                  transform="translate(357 112)"
                  fill="none"
                  stroke="#33394b"
                  stroke-width="2"
                />
              </g>
            </svg>
            <input type="text" placeholder="Find people and conversations" />
          </div>
          <button className="new__chat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
            >
              <path
                id="Union_2"
                data-name="Union 2"
                d="M4.5,11V6.5H0v-2H4.5V0h2V4.5H11v2H6.5V11Z"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        <div className="chat__panel__groups">
          <div className="chat__panel__groups__header">
            <div className="chat__panel__groups__entry">Recent</div>
            <div className="chat__panel__groups__entry">Recent</div>
            <div className="chat__panel__groups__entry">Recent</div>
          </div>
          <div className="chat__panel__group">
            <div className="chat__panel__group__entry"></div>
          </div>
        </div>
      </div>
      <div className="chat__screen">
        <div className="chat__screen__header">
          <div className="chat__screen__header__left">
            <div className="chat__screen__heading">{currentUser.email}</div>
            <div className="user__status">
              {currentUser.email ? true : false}
            </div>
          </div>
          <button
            className="chat__screen__header__right"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
        <div className="chat__screen__messages">
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit hic quibusdam voluptas ducimus ad nemo optio, qui sequi culpa, unde corrupti necessitatibus? Placeat fuga ex labore incidunt veniam laudantium!"
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />

          <UserMessage
            data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit hic quibusdam voluptas ducimus ad nemo optio, qui sequi culpa, unde corrupti necessitatibus? Placeat fuga ex labore incidunt veniam laudantium!"
            timeStamp="7:47 PM"
          />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp="7:47 PM" />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage data="Awesome" timeStamp={Date()} />
          <OtherMessage
            data="I agree! It definitely produces a better user experience."
            name="Michael Wong"
            timeStamp={Date()}
            imgURL={imgURL}
          />
          <UserMessage
            data={chosenEmoji && chosenEmoji.emoji}
            timeStamp={Date()}
          />
        </div>
        <div className="chat__screen__messages__input">
          <div className="chat__screen__messages__input__field">
            <input type="text" placeholder="Message Michael" />
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21.604 18.537"
              >
                <path
                  id="send"
                  d="M1547.426,14831.956l18.3-7.736c.821-.357.631-.714-.072-1.191l-18.322-7.618c-.786-.238-1.012.118-.917.715v5.594l7.679,1.787c.548.117.75.237.024.356l-7.7,1.9V14831C1546.414,14832.2,1546.807,14832.314,1547.426,14831.956Z"
                  transform="translate(-1545.527 -14814.469)"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.73"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            <button
              className="emoji__picker__btn"
              onClick={() => {
                var x = document.querySelector(".emoji__picker");
                if (x.style.display === "none") {
                  x.style.display = "flex";
                } else {
                  x.style.display = "none";
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 19.367 19.366"
              >
                <g id="emojis" transform="translate(-1592.557 -14811.667)">
                  <path
                    id="dp_path002"
                    d="M1602.24,14812a9.35,9.35,0,1,0,9.35,9.3A9.351,9.351,0,0,0,1602.24,14812Zm0,17.7a8.3,8.3,0,0,1-5.88-2.4,8.036,8.036,0,0,1-1.51-2.1,8.213,8.213,0,0,1-.95-3.9,8.378,8.378,0,0,1,8.34-8.3,8.634,8.634,0,0,1,5.65,2.2,8.694,8.694,0,0,1,2.69,6.1A8.4,8.4,0,0,1,1602.24,14829.7Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.667"
                    fill-rule="evenodd"
                  />
                  <path
                    id="dp_path003"
                    d="M1599.04,14819.2a.964.964,0,0,1,.99,1h1.01a2,2,0,1,0-3.99,0h1.01A.961.961,0,0,1,1599.04,14819.2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.667"
                    fill-rule="evenodd"
                  />
                  <path
                    id="dp_path004"
                    d="M1605.43,14819.2a.964.964,0,0,1,.99,1h1.01a2,2,0,1,0-3.99,0h1.01A.961.961,0,0,1,1605.43,14819.2Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.667"
                    fill-rule="evenodd"
                  />
                  <path
                    id="dp_path005"
                    d="M1602.22,14826.5a5.96,5.96,0,0,0,4.9-2.6l-.85-.6a4.92,4.92,0,0,1-4.59,2.2,4.982,4.982,0,0,1-3.48-2.2l-.85.6a6.014,6.014,0,0,0,4.22,2.6Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.667"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
              <div className="emoji__picker">
                <Picker onEmojiClick={onEmojiClick} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
