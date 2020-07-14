import React from "react";
import { Tweet } from "./Tweet";
import { useTweet } from "../hooks";

export const TweetDetail = (props) => {
  const { tweetId } = props;
  const { tweet } = useTweet(tweetId);

  return tweet === null ? null : (
    <Tweet tweet={tweet} className={props.className} />
  );
};
