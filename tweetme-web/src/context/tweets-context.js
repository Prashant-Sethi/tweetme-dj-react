import React, { useState, createContext, useContext } from "react";
import { useTweets } from "../hooks";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const { tweets, setTweets } = useTweets(username);

  return (
    <TweetsContext.Provider
      value={{ username, setUsername, tweets, setTweets }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export const useTweetsValue = () => useContext(TweetsContext);
