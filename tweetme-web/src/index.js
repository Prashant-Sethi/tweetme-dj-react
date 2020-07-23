import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import { TweetDetail } from "./components/TweetDetail";
import { Nav } from "./components/Nav";
import { UserProvider } from "./context";
import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <UserProvider>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/profile/:user" exact component={App} />
          <Route path="/:id" exact component={TweetDetail} />
        </Switch>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);

// const tweetDetailElements = document.querySelectorAll(".tweet-detail");
// tweetDetailElements.forEach((element) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <TweetsProvider>
//         {createElement(TweetDetail, element.dataset)}
//       </TweetsProvider>
//     </React.StrictMode>,
//     element
//   );
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
