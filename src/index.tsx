import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";


//disable dev tool in prod
if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>
);
