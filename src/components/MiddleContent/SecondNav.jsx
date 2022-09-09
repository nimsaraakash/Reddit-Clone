import React from "react";
import "./secondnav.css";
import { FaFireAlt, FaRss } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";

function SecondNav() {
  return (
    <div className="second-nav">
      <div className="left-nav-buttons">
        <button>
          <FaFireAlt style={{color: "#FF4509"}} className="icon" />
          hot
        </button>
        <button>
          <AiOutlineLineChart className="icon" />
          trending
        </button>
        <button>
          <FaRss className="icon" />
          new
        </button>
      </div>
      <div className="right-nav-buttons">
        <button>Create Post</button>
      </div>
    </div>
  );
}

export default SecondNav;
