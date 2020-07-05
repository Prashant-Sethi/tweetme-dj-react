import React, { useState, useEffect } from "react";

import { Tweet } from "./Tweet";

export const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tweets/")
      .then((response) => response.json())
      .then((data) => {
        console.error("Success:", data);
        setTweets(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
