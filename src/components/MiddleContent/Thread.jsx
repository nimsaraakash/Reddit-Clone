import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaRegComment, FaShareAlt } from "react-icons/fa";
import "./Thread.css";

function Thread(props) {
  return (
    <div className="thread">
      <div className="content">
        <div className="content-user-details">
          <img src={props.ImageUrl} alt="" />
          <p>{props.UserName}</p>
          <div className="circle-body"></div>
          <p>{props.TimeAgo}</p>
        </div>
        <h1 className="thread-title">{props.ThreadTitle}</h1>
        <div className="interactions">
          <div className="votes">
            <IoIosArrowUp className="icon" />
            <span className="votes-selected">{props.Votes}</span>
            <IoIosArrowDown className="icon" />
          </div>
          <div className="comments">
            <FaRegComment className="icon" />
            <span>{props.Comments} Comments</span>
          </div>
          <div className="share">
            <FaShareAlt className="icon" />
            <span>Share</span>
          </div>
          <p className="sub-redit">{props.SubRedditName}</p>
        </div>
      </div>
      <div
        className="img"
        style={{ backgroundImage: `url(${props.ThreadImageUrl})` }}
      ></div>
    </div>
  );
}

export default Thread;
