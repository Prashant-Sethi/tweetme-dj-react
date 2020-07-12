import React, { useState } from "react";
import { ActionBtn } from "./ActionBtn";
import { ParentTweet } from "./ParentTweet";

import { useTweetsValue } from "../context";
import { apiTweetAction } from "../helpers";

export const Tweet = (props) => {
  const { tweet, hideActions } = props;
  const { setTweets } = useTweetsValue();

  const tweetActions = ["like", "unlike", "retweet"];

  const [actionTweet, setActionTweet] = useState(tweet ? tweet : null);

  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6 border";

  const handleTweetActionBtn = (tweet_id, likes, action) => {
    apiTweetAction({
      id: tweet_id,
      action,
    }).then((response) => {
      const status = response.status;
      response.json().then((tweet) => {
        if (status === 200) {
          setActionTweet(tweet);
        } else if (status === 201) {
          setTweets((tweets) => [tweet, ...tweets]);
        }
      });
    });
  };

  return (
    <div className={className}>
      <div>
        <p>{`${tweet.id} - ${tweet.content}`}</p>
        <ParentTweet tweet={tweet} />
      </div>
      {actionTweet && hideActions !== true && (
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
      )}
    </div>
  );
};
