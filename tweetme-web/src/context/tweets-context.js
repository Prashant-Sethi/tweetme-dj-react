import React, { createContext, useContext } from "react";
import { useTweets } from "../hooks";

import { useUserValue } from "../context";

export const TweetsContext = createContext();

export const TweetsProvider = ({ children }) => {
  const { username } = useUserValue();
  const { tweets, setTweets } = useTweets(username);

  return (
    <TweetsContext.Provider
      value={{ tweets, setTweets }}
      // value={{ tweets, setTweets }}
    >
      {children}
    </TweetsContext.Provider>
  );
};

export const useTweetsValue = () => useContext(TweetsContext);
