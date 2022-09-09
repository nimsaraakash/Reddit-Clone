import React from "react";
import ProfileCard from "./ProfileCard";
import PremiumCard from "./PremiumCard";
import Notifications from "./Notifications.jsx";

function RightSideBar() {
  return (
    <div className="right-sidebar">
      <ProfileCard />
      <PremiumCard />
      <Notifications />
    </div>
  );
}

export default RightSideBar;
