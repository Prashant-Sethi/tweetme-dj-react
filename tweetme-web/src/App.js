import React from "react";
import "./App.css";

import { TweetsProvider } from "./context";
import { TweetsComponent } from "./components/TweetsComponent";

function App(props) {
  return (
    <div className="App">
      <TweetsProvider>
        <TweetsComponent {...props} />
      </TweetsProvider>
    </div>
  );
}

export default App;
