import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import PricingPage from "./pricing";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import Chat from "./../components/Chat";

function App(props) {
  return (
    <>
      <Chat />
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/legal/:section" component={LegalPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright={`© ${new Date().getFullYear()} Company`}
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
      </Router>
    </>
  );
}

export default App;
