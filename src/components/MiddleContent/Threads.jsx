import React from "react";
import Thread from "./Thread";
import threads from "./threads.js";

function CreateTheads(singleThread) {
  return (
    <div>
      <Thread
        key={singleThread.id}
        ImageUrl={singleThread.UserDetails.ImageUrl}
        UserName={singleThread.UserDetails.UserName}
        TimeAgo={singleThread.UserDetails.TimeAgo}
        ThreadTitle={singleThread.ThreadTitle}
        Votes={singleThread.Interaction.Votes}
        Comments={singleThread.Interaction.Comments}
        SubRedditName={singleThread.SubRedditName}
        ThreadImageUrl={singleThread.ThreadImageUrl}
      />
    </div>
  );
}

function Threads() {
  return <div>{threads.map(CreateTheads)}</div>;
}

export default Threads;
