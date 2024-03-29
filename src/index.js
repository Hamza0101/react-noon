import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, combineReducers } from "redux";
import addressReducer from "./reducers/addressReducer";
import { Provider } from "react-redux";
import cartReducer from "./reducers/cartReducer";
import filterReducer from "./reducers/filterReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
const allReducers = combineReducers({
  cartReducer: cartReducer,
  addressReducer: addressReducer,
  filterReducer: filterReducer,
});
const store = createStore(allReducers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
