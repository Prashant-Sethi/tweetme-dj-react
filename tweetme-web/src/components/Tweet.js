import React, { useState } from "react";
import { ActionBtn } from "./ActionBtn";
import { ParentTweet } from "./ParentTweet";

import { apiTweetAction } from "../helpers";

export const Tweet = (props) => {
  const { tweet } = props;
  const tweetActions = ["like", "unlike", "retweet"];

  const [actionTweet, setActionTweet] = useState(tweet ? tweet : null);

  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6 border";

  const handleTweetActionBtn = (tweet_id, likes, action) => {
    apiTweetAction({
      id: tweet_id,
      action,
    }).then((tweet) => setActionTweet(tweet));
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
            tweet={actionTweet}
            action={action}
            handleTweetActionBtn={handleTweetActionBtn}
          />
        ))}
      </div>
    </div>
  );
};
