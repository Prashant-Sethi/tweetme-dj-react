import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ActionBtn } from "./ActionBtn";
import { ParentTweet } from "./ParentTweet";

import { useTweetsValue } from "../context";
import { apiTweetAction } from "../helpers";

export const Tweet = (props) => {
  const { tweet, hideActions, isDetail } = props;
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
        <p>
          Tweet by <Link to={`/profile/${tweet.user}/`}>{tweet.user}</Link>
        </p>
        <p>{`${tweet.id} - ${tweet.content}`}</p>
        <ParentTweet tweet={tweet} />
      </div>
      <div className="btn btn-group">
        {actionTweet && hideActions !== true && (
          <>
            {tweetActions.map((action, index) => (
              <ActionBtn
                key={index}
                tweet={actionTweet}
                action={action}
                handleTweetActionBtn={handleTweetActionBtn}
              />
            ))}
          </>
        )}
        {!isDetail && (
          <Link to={`/${tweet.id}/`} className="btn btn-primary">
            View Tweet
          </Link>
        )}
      </div>
    </div>
  );
};
