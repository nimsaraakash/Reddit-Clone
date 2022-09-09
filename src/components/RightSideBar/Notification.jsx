import React from "react";
import "./notification.css";
import { BsThreeDots } from "react-icons/bs";

function Notification(props) {
  return (
    <div className="notification">
      <img src={props.imageUrl} alt="" />
      <div className="notification-body">
        <span className="title">{props.title}</span>
        <p>{props.shortDesc}</p>
      </div>
      <BsThreeDots />
    </div>
  );
}

export default Notification;
