import React, { useState } from "react";

const TweetForm = (props) => {
  const [tweetText, setTweetText] = useState("");

  const handleChange = (event) => {
    setTweetText(event.target.value);
    console.log(tweetText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
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
