import React from "react";
import "react-app-polyfill/ie9";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "core-js/stable";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import store from "./redux/store";
import App from "./components/App";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
