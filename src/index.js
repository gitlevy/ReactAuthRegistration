import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import modalsReducer from './Reducers/modalsReducer'

const store = createStore(modalsReducer)

ReactDOM.render(
  <Provider store={store} >
      <App />
  </Provider>,
  document.getElementById("root")
)
