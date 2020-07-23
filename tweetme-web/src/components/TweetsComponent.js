import React from "react";
import TweetForm from "./TweetForm";
import { Tweets } from "./Tweets";

import { TweetsProvider } from "../context";

export const TweetsComponent = () => {
  return (
    <div className="col-10 mx-auto mt-5">
      <TweetsProvider>
        <TweetForm />
        <Tweets />
      </TweetsProvider>
    </div>
  );
};
