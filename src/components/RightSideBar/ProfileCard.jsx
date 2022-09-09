import React from "react";
import "./profilecard.css";

function ProfileCard() {
  return (
    <div className="profile-card">
      <div
        style={{ backgroundImage: "url(Assets/cover-image.webp)" }}
        className="cover"
      ></div>
      <div className="details">
        <div className="cover-profile-image">
          <img src="Assets/reddit-alien.png" alt="" />
          <h1>Home</h1>
        </div>
        <p>
          Your personal Reddit homepage. Click here to check in with your
          favourite communities
        </p>
        <div className="btn">
          <button className="create-post">Create a Post</button>
          <br />
          <button className="create-community">Create a Community</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
