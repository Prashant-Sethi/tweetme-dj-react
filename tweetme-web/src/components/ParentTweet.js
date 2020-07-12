import React from "react";
import { Tweet } from "./Tweet";

export function ParentTweet(props) {
  const { tweet } = props;
  return tweet.parent ? (
    <div className="row">
      <div className="col-11 mx-auto p-3 border rounded">
        <p className="mb-0 text-muted small">Retweet</p>
        <Tweet className={" "} tweet={tweet.parent} />
      </div>
    </div>
  ) : null;
}
