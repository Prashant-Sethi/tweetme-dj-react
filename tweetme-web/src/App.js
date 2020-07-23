import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./App.css";

import { useUserValue } from "./context";
import { TweetsComponent } from "./components/TweetsComponent";

function App(props) {
  const { username, setUsername } = useUserValue();

  //const { username } = props.match.params;

  let { user } = useParams();

  let location = useLocation();

  let isProfileView = location.pathname === `/profile/${user}/`;

  useEffect(() => {
    setUsername(user);
  }, [setUsername, user]);

  return (
    <div className="App">
      {isProfileView ? (
        username ? (
          <TweetsComponent />
        ) : null
      ) : (
        <TweetsComponent />
      )}
    </div>
  );
}

export default App;
