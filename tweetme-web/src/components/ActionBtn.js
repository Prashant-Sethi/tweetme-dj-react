import React from "react";

export const ActionBtn = (props) => {
  const { tweet, action } = props;
  const className = props.className
    ? props.className
    : "btn btn-primary btn-sm";
  const btnText =
    action === "like"
      ? `${tweet.likes} Likes`
      : action === "unlike"
      ? "Unlike"
      : action === "retweet"
      ? "Retweet"
      : null;
  const handleTweetActionBtn = (tweet_id, likes, action) => {};
  return (
    <button
      className={className}
      onClick={() => handleTweetActionBtn(tweet.id, tweet.likes, action)}
    >
      {btnText}
    </button>
  );
};
