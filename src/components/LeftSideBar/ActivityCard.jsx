import React from "react";
import Activity from "./Activity.jsx";
import "./Styles/ActivityCard.css";
import activity from "../../activity.js";

function CreateActivity(singleActivity) {
  return (
    <Activity
      key={singleActivity.key}
      title={singleActivity.title}
      img={singleActivity.img}
      username={singleActivity.username}
      comments={singleActivity.comments}
      subreddit={singleActivity.subreddit}
    />
  );
}

function ActivityCard() {
  return <div>
    {activity.map(CreateActivity)}
  </div>;
}

export default ActivityCard;
