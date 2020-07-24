import React from "react";
import TweetForm from "./TweetForm";
import { Tweets } from "./Tweets";

import { TweetsProvider } from "../context";

export const TweetsComponent = () => {
  return (
    <TweetsProvider>
      <div className="col-10 mx-auto mt-5">
        <TweetForm />
        <Tweets />
      </div>
    </TweetsProvider>
  );
};
