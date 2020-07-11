import React, { useState } from "react";

import { useTweetsValue } from "../context";
import { createTweet } from "../helpers";

const TweetForm = (props) => {
  const { setTweets } = useTweetsValue();
  const [tweetText, setTweetText] = useState("");

  const handleChange = (event) => {
    setTweetText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTweet = {
      id: 2324,
      content: tweetText,
      likes: 0,
    };
    const newCreatedTweet = createTweet(newTweet);
    setTimeout(() => {
      if (newCreatedTweet) {
        setTweets((tweets) => [newTweet, ...tweets]);
      }
    }, 1000);
    setTweetText("");
  };

  return (
    <div className={props.className}>
      <div className="col-12 mb-2">
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control"
            name="tweet"
            id=""
            rows="3"
            value={tweetText}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary my-3">
            Tweet
          </button>
        </form>
      </div>
    </div>
  );
};

export default TweetForm;
