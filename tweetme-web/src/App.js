import React from "react";
import "./App.css";

import { TweetsProvider } from "./context";
import { TweetsComponent } from "./components/TweetsComponent";

function App() {
  return (
    <div className="App">
      <TweetsProvider>
        <TweetsComponent />
      </TweetsProvider>
    </div>
  );
}

export default App;
