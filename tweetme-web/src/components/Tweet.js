import React, { useState } from "react";
import { ActionBtn } from "./ActionBtn";

import { actionTweet } from "../helpers";

export const Tweet = (props) => {
  const { tweet } = props;
  const tweetActions = ["like", "unlike", "retweet"];

  const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);

  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6";

  const handleTweetActionBtn = (tweet_id, likes, action) => {
    actionTweet({
      id: tweet_id,
      action,
    }).then((tweet) => setLikes(tweet.likes));
    console.log("clicked", action);
  };

  return (
    <div className={className}>
      <p>{tweet.content}</p>
      {tweetActions.map((action, index) => (
        <ActionBtn
          key={index}
          tweet={tweet}
          action={action}
          likes={likes}
          handleTweetActionBtn={handleTweetActionBtn}
        />
      ))}
    </div>
  );
};
