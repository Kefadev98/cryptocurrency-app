import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
