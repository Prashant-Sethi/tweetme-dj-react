import React, { useState, useEffect } from "react";

import { Tweet } from "./Tweet";

import { loadTweets } from "../helpers";

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    loadTweets(setTweets);
  }, []);

  return (
    <div className="col-10 mx-auto col-md-6">
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
