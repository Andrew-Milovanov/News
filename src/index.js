import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppMAin from "./App";

ReactDOM.render(<AppMAin />, document.getElementById("root"));
serviceWorker.unregister();
