import React from "react";

import { Tweet } from "./Tweet";

import { useTweetsValue } from "../context";

export const Tweets = () => {
  const { tweets } = useTweetsValue();

  return (
    <div className="col-10 mx-auto col-md-8">
      {tweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          tweet={tweet}
          className="py-5 my-5 border bg-white text-dark"
        />
      ))}
    </div>
  );
};
