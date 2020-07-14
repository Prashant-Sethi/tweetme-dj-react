import React from "react";
import { Tweet } from "./Tweet";
import { useTweet } from "../hooks";

export const TweetDetail = (props) => {
  const { id } = props.match.params;
  const { tweet } = useTweet(id);

  return tweet === null ? null : (
    <Tweet tweet={tweet} isDetail className={props.className} />
  );
};
