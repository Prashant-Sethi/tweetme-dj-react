import React, { useEffect } from "react";

import "./App.css";

import { useTweetsValue } from "./context";
import { TweetsComponent } from "./components/TweetsComponent";

function App(props) {
  const { setUsername } = useTweetsValue();

  useEffect(() => {
    setUsername(props.username);
  }, [setUsername, props.username]);

  return (
    <div className="App">
      <TweetsComponent />
    </div>
  );
}

export default App;
