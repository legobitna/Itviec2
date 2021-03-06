import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers/authreducer";
import thunk from "redux-thunk";

// const logAction = (store) => {
//   return (next) => {
//     return (action) => {
//       const result = next(action);
//       console.log("middle", result);
//       console.log("next", next);
//       console.log("store", store);
//       // return result;
//     };
//   };

// };

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
