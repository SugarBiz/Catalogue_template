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
import Desktop from "views/examples/Services/Desktop.js"
import Mobile from "views/examples/Services/Mobile.js"
import Turnkey from "views/examples/Services/Turnkey.js"
import BBSupport from "views/examples/Services/BBSupport.js"
import License from "views/examples/Company/license";
import Management from "views/examples/Company/Management.js";
import AboutUs from "views/examples/Company/About.js"
import Events from "views/examples/Company/Events.js"
import Partners from "views/examples/Company/Partners.js";
import News from "views/examples/Services/News"
import Blogs from "views/examples/Services/Blogs"

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
    <Route
        path="/B2BSupport"
        render={(props) => <BBSupport {...props} />}
      />
      <Route
        path="/Desktop"
        render={(props) => <Desktop {...props} />}
      />
      <Route
      path="/Mobile"
      render={(props) => <Mobile {...props} />}
    />
    <Route
      path="/Turnkey"
      render={(props) => <Turnkey {...props} />}
    />
    <Route
        path="/Management"
        render={(props) => <Management {...props} />}
      />
      <Route
        path="/AboutUs"
        render={(props) => <AboutUs {...props} />}
      />
      <Route
        path="/License"
        render={(props) => <License {...props} />}
      />
      <Route
        path="/Partners"
        render={(props) => <Partners {...props} />}
      />
      <Route
        path="/Events"
        render={(props) => <Events {...props} />}
      />
      <Route
        path="/News"
        render={(props) => <News {...props} />}
      /><Route
      path="/Blogs"
      render={(props) => <Blogs {...props} />}
    />
      <Redirect from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);
