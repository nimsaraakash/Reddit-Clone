import React from "react";
import { BsBell, BsEnvelope } from "react-icons/bs";
import Notification from "./Notification";
import "./notifications.css";
import notifications from "./notifications.js";

function createNotifications(singleNotification) {
  return (
    <Notification
      key={singleNotification.id}
      imageUrl={singleNotification.imageUrl}
      title={singleNotification.title}
      shortDesc={singleNotification.shortDesc}
    />
  );
}

function Notifications() {
  return (
    <div className="notifications">
      <div className="notify">
        <div className="bell">
          <BsBell style={{ paddingRight: "5px" }} className="icon selected" />
          <span>Notifications</span>
        </div>
        <BsEnvelope className="icon selected" />
      </div>
      {notifications.map(createNotifications)}
    </div>
  );
}

export default Notifications;
