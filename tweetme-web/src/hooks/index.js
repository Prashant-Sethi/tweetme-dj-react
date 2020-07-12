import { useState, useEffect } from "react";

import { loadTweets } from "../helpers";

export const useTweets = (username) => {
  const [tweets, setTweets] = useState([]);

  // useEffect(() => {
  //   loadTweets().then((newTweets) => {
  //     setTweets(newTweets);
  //   });
  // }, []);

  useEffect(() => {
    loadTweets(username).then((newTweets) => {
      setTweets(newTweets);
    });
  }, [username]);

  return { tweets, setTweets };
};
