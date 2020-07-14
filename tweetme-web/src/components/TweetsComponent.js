import React from "react";
import TweetForm from "./TweetForm";
import { Tweets } from "./Tweets";

export const TweetsComponent = () => {
  return (
    <div className="col-10 mx-auto mt-5">
      <TweetForm />
      <Tweets />
    </div>
  );
};
