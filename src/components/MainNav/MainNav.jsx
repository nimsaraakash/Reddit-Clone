import React from "react";
import {
  BsFillHouseDoorFill,
  BsFillStarFill,
  BsNewspaper,
  BsGearFill,
  BsSearch,
  BsGearWide,
} from "react-icons/bs";
import "./mainnav.css";

function MainNav() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="Assets/logo.svg" alt="logo" />
        <h1>reddit</h1>
      </div>
      <div className="nav-links">
        <p>
          <BsFillHouseDoorFill className="icon"/>
          Home
        </p>
        <p className="selected">
          <BsFillStarFill className="icon selected"/>
          Popular
        </p>
        <p>
          <BsNewspaper className="icon"/>
          News
        </p>
        <p>
          <BsGearFill className="icon"/>
          Settings
        </p>
      </div>
      <div className="nav-search">
        <BsSearch className="search-icon" />
        <input type="text" placeholder="Find a community post" />
      </div>
      <div className="profile">
        <img
          src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          alt="profile"
        />
        <div className="profile-circle"></div>
        <div className="nav-info">
          <h2>Maximus</h2>
          <h3>
            <BsGearWide className="fa-bahai"/>
            4.2k karma
          </h3>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
