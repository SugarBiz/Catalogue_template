import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ContactPage from "views/examples/ContactPage.js";
import ProductPage1 from "views/examples/Product1.js";
import ProductPage2 from "views/examples/Product2.js";
import ProductPage3 from "views/examples/Product3.js";


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
        path="/product-page1"
        render={(props) => <ProductPage1 {...props} />}
      />
      <Route
        path="/product-page2"
        render={(props) => <ProductPage2 {...props} />}
      /><Route
      path="/product-page3"
      render={(props) => <ProductPage3 {...props} />}
    />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);
