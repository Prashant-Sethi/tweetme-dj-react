import React, { createElement } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TweetDetail } from "./components/TweetDetail";
import { TweetsProvider } from "./context";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <TweetsProvider>{createElement(App, rootElement.dataset)}</TweetsProvider>
  </React.StrictMode>,
  rootElement
);

const tweetDetailElements = document.querySelectorAll(".tweet-detail");
tweetDetailElements.forEach((element) => {
  ReactDOM.render(
    <React.StrictMode>
      <TweetsProvider>
        {createElement(TweetDetail, element.dataset)}
      </TweetsProvider>
    </React.StrictMode>,
    element
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
