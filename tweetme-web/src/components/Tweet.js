import React from "react";
import { ActionBtn } from "./ActionBtn";

export const Tweet = (props) => {
  const { tweet } = props;
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6";
  return (
    <div className={className}>
      <p>{tweet.content}</p>
      <ActionBtn tweet={tweet} action="like" />
      <ActionBtn tweet={tweet} action="unlike" />
      <ActionBtn tweet={tweet} action="retweet" />
    </div>
  );
};
