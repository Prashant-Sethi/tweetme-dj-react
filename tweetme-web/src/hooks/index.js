import { useState, useEffect } from "react";

import { loadTweets } from "../helpers";

export const useTweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    loadTweets().then((newTweets) => {
      setTweets(newTweets);
    });
  }, []);

  // useEffect(() => {
  //   loadTweets().then((newTweets) => {
  //     if (tweets.length !== newTweets.length) {
  //       setTweets(newTweets);
  //     }
  //   });
  //   setTweets(tweets);
  // }, [tweets]);

  return { tweets, setTweets };
};
