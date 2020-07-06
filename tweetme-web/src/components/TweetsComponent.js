import React from "react";
import TweetForm from "./TweetForm";
import { Tweets } from "./Tweets";

export const TweetsComponent = () => {
  return (
    <div>
      <TweetForm />
      <Tweets />
    </div>
  );
};
