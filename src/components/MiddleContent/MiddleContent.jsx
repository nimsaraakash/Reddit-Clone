import React from "react";
import SecondNav from "./SecondNav.jsx";
import Threads from "./Threads.jsx";

function MiddleContent() {
  return (
    <div>
      <div className="topics">
        <SecondNav />
        <Threads/>
      </div>
    </div>
  );
}

export default MiddleContent;
