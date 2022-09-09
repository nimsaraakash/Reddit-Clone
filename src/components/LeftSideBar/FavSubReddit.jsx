import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./Styles/FavSubReddit.css";

function FavSubReddit(props) {
  return (
    <div>
      <div className="fav-sub-reddit">
        <div className="name">
          <img src={props.src} alt={props.alt} />
          <p>r/{props.subRedditName}</p>
        </div>
        <AiFillStar className="aifillstar" />
      </div>
    </div>
  );
}

export default FavSubReddit;
