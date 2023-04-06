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
const routerBaseName = process.env.PUBLIC_URL;
console.log(routerBaseName, "routerBaseName")
root.render(
  <BrowserRouter>
    <Switch>
      <Route basename={routerBaseName} path="/components" render={(props) => <Index {...props} />} />
      <Route basename={routerBaseName}
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route basename={routerBaseName}
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route basename={routerBaseName}
        path="/contact-page"
        render={(props) => <ContactPage {...props} />}
      />
      <Route basename={routerBaseName}
        path="/PlayerAccount"
        render={(props) => <PlayerAccount {...props} />}
      />
      <Route basename={routerBaseName}
        path="/Exchange"
        render={(props) => <Exchange {...props} />}
      />
      <Route basename={routerBaseName}
      path="/Casino"
      render={(props) => <Casino {...props} />}
    />
    <Route basename={routerBaseName}
      path="/SportsBook"
      render={(props) => <SportsBook {...props} />}
    />
    <Route basename={routerBaseName}
        path="/B2BSupport"
        render={(props) => <BBSupport {...props} />}
      />
      <Route basename={routerBaseName}
        path="/Desktop"
        render={(props) => <Desktop {...props} />}
      />
      <Route basename={routerBaseName}
      path="/Mobile"
      render={(props) => <Mobile {...props} />}
    />
    <Route basename={routerBaseName}
      path="/Turnkey"
      render={(props) => <Turnkey {...props} />}
    />
    <Route
        path="/Management"
        render={(props) => <Management {...props} />}
      />
      <Route basename={routerBaseName}
        path="/AboutUs"
        render={(props) => <AboutUs {...props} />}
      />
      <Route basename={routerBaseName}
        path="/License"
        render={(props) => <License {...props} />}
      />
      <Route basename={routerBaseName}
        path="/Partners"
        render={(props) => <Partners {...props} />}
      />
      <Route basename={routerBaseName}
        path="/Events"
        render={(props) => <Events {...props} />}
      />
      <Route basename={routerBaseName}
        path="/News"
        render={(props) => <News {...props} />}
      /><Route basename={routerBaseName}
      path="/Blogs"
      render={(props) => <Blogs {...props} />}
    />
      <Redirect basename={routerBaseName} from="/" to="/components" />
    </Switch>
  </BrowserRouter>
);
