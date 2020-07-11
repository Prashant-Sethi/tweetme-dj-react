import React, { createContext, useContext } from "react";
import { useTweets } from "../hooks";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const { tweets, setTweets } = useTweets();

  return (
    <TweetsContext.Provider value={{ tweets, setTweets }}>
      {children}
    </TweetsContext.Provider>
  );
};

export const useTweetsValue = () => useContext(TweetsContext);
