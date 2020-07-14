import React, { useState } from "react";

import { useTweetsValue } from "../context";
import { createTweet } from "../helpers";

const TweetForm = (props) => {
  const { setTweets } = useTweetsValue();
  const maxCharacters = 240;

  const [tweetText, setTweetText] = useState("");
  const [remainingChars, setRemainingChars] = useState(maxCharacters);

  const handleChange = (event) => {
    const text = event.target.value.slice(0, maxCharacters);
    setTweetText(text);
    setRemainingChars(maxCharacters - text.length);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTweet({ content: tweetText }).then((newCreatedTweet) => {
      setTweets((tweets) => [newCreatedTweet, ...tweets]);
    });
    setTweetText("");
  };

  return (
    <div className={props.className}>
      <div className="col-6 mb-2 mx-auto">
        <form onSubmit={handleSubmit}>
          <label htmlFor="tweet">Create your new tweet</label>
          <textarea
            className="form-control"
            name="tweet"
            id="tweet"
            rows="3"
            value={tweetText}
            onChange={handleChange}
          />
          <p className="text-muted left">
            {`${remainingChars} characters remaining...`}
          </p>
          <button type="submit" className="btn btn-primary my-3">
            Tweet
          </button>
        </form>
      </div>
    </div>
  );
};

export default TweetForm;
