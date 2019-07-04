import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileInvoice, faFire, faMicrophone, faFilePdf, faFile, faUmbrella  } from '@fortawesome/free-solid-svg-icons';
import ProfilePage from "./Profile.jsx";


import "./assets/scss/material-kit-react.scss?v=1.4.0";

library.add(faFileInvoice, faFire, faMicrophone, faFilePdf, faFile, faUmbrella);


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
