import React from "react";

export const Tweet = (props) => {
  const { tweet } = props;
  const className = props.className
    ? props.className
    : "col-10 mx-auto col-md-6";
  return (
    <div className={className}>
      <p>{tweet.content}</p>
    </div>
  );
};
