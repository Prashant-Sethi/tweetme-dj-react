import React, { createContext, useContext } from "react";
import { useTweets } from "../hooks";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const username = children.props.username;
  const { tweets, setTweets } = useTweets(username);

  return (
    <TweetsContext.Provider value={{ username, tweets, setTweets }}>
      {children}
    </TweetsContext.Provider>
  );
};

export const useTweetsValue = () => useContext(TweetsContext);
