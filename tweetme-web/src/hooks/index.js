import { useState, useEffect } from "react";

import { loadTweets, apiTweetDetail } from "../helpers";

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

export const useTweet = (tweetId) => {
  const [tweet, setTweet] = useState(null);

  useEffect(() => {
    apiTweetDetail(tweetId).then((tweet) => {
      setTweet(tweet);
    });
  }, [tweetId]);

  return { tweet, setTweet };
};
