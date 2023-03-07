import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";
import "assets/css/Sky.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ContactPage from "views/examples/ContactPage.js";
import PlayerAccount from "views/examples/Products/PlayerAccount.js";
import Exchange from "views/examples/Products/Exchange.js";
import Casino from "views/examples/Products/Casino.js";
import SportsBook from "views/examples/Products/SportsBook.js";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/contact-page"
        render={(props) => <ContactPage {...props} />}
      />
      <Route
        path="/PlayerAccount"
        render={(props) => <PlayerAccount {...props} />}
      />
      <Route
        path="/Exchange"
        render={(props) => <Exchange {...props} />}
      />
      <Route
      path="/Casino"
      render={(props) => <Casino {...props} />}
    />
    <Route
      path="/SportsBook"
      render={(props) => <SportsBook {...props} />}
    />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);
