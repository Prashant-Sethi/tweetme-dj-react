import React from "react";

export const ActionBtn = (props) => {
  const { tweet, action, likes, handleTweetActionBtn } = props;

  const className = props.className
    ? props.className
    : "btn btn-primary btn-sm";

  const btnText =
    action === "like"
      ? `${likes} Likes`
      : action === "unlike"
      ? "Unlike"
      : action === "retweet"
      ? "Retweet"
      : null;

  return (
    <button
      className={className}
      onClick={() => handleTweetActionBtn(tweet.id, likes, action)}
    >
      {btnText}
    </button>
  );
};
