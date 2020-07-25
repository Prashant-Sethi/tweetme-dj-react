import React from "react";
import { Tweet } from "./Tweet";
import { useTweet } from "../hooks";

import { TweetsProvider } from "../context";

export const TweetDetail = (props) => {
  const { id } = props.match.params;
  const { tweet } = useTweet(id);

  return tweet === null ? null : (
    <TweetsProvider>
      <Tweet tweet={tweet} isDetail className={props.className} />
    </TweetsProvider>
  );
};
