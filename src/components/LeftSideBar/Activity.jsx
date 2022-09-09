import React from "react";
import { FaRegComment } from "react-icons/fa";

function Activity(props) {
  return (
    <div>
      <div className="activity">
        <p className="activity-title">
          {props.title}
        </p>
      </div>
      <div className="user-details">
        <div className="user-img">
          <img src={props.img} alt="user" className="user" />
          <span>{props.username}</span>
        </div>
        <p>
          <FaRegComment className="faregcomment"/>
          {props.comments}
        </p>
        <p className="sub-reddit">{props.subreddit}</p>
      </div>
    </div>
  );
}

export default Activity;
