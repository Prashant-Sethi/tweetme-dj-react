import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState();

  return (
    <UserContext.Provider
      value={{ username, setUsername }}
      // value={{ tweets, setTweets }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserValue = () => useContext(UserContext);
