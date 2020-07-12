import React, { useState } from "react";
import { ActionBtn } from "./ActionBtn";
import { ParentTweet } from "./ParentTweet";

import { actionTweet } from "../helpers";

export const Tweet = (props) => {
  const { tweet } = props;
  const tweetActions = ["like", "unlike", "retweet"];

  const [likes, setLikes] = useState(tweet.likes ? tweet.likes : 0);

  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6 border";

  const handleTweetActionBtn = (tweet_id, likes, action) => {
    actionTweet({
      id: tweet_id,
      action,
    }).then((tweet) => setLikes(tweet.likes));
  };

  return (
    <div className={className}>
      <div>
        <p>{`${tweet.id} - ${tweet.content}`}</p>
        <ParentTweet tweet={tweet} />
      </div>
      <div className="btn btn-group">
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
    </div>
  );
};
