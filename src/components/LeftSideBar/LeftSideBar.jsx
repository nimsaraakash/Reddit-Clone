import React from "react";
import FavSubReddit from "./FavSubReddit";
import SectionTitle from "./SectionTitle";
import Favourits from "../../favourits";
import "./Styles/LeftSideBar.css";
import ViewMore from "./ViewMore";
import ActivityCard from "./ActivityCard";

function createFavSubReddit(singleFavSubReddit) {
  return (
    <FavSubReddit
      key={singleFavSubReddit.id}
      src={singleFavSubReddit.src}
      alt={singleFavSubReddit.alt}
      subRedditName={singleFavSubReddit.subRedditName}
    />
  );
}

function LeftSideBar() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-card">
        <SectionTitle title="Favourits" />
        {Favourits.map(createFavSubReddit)}
        <ViewMore />
      </div>
      <div className="sidebar-card">
        <SectionTitle title="Activity" />
        <ActivityCard />
      </div>
    </div>
  );
}

export default LeftSideBar;
