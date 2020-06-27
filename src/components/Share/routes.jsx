import React from "react";
import { Redirect, Route, Router } from "react-router-dom";
import Splash from "../../pages/splash/index";
import Language from "../../pages/language/index";
import Home from "../../pages/home/index";
import SignUp from "./../../pages/sign-up/index";
import NotFound from "../../pages/not-found";
import { AnimatedSwitch } from "react-router-transition";
import { bounceTransition, mapStyles } from "./routes-animate";
import AboutUs from "./../../pages/about-us/index";
import { routes } from "./../../constants/constant";
import history from "./../../services/history";
import BankServices from "./../Services/bank-services";
import MobileServices from "./../Services/mobile-services";
import BillServices from "./../Services/bill-services";
import Representer from "./../../pages/representer/index";
import { Components } from './../../pages/components/index';

const Routing = () => {
  return (
    <Router history={history}>
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
      >
        <Route path={routes.splash} component={Splash} />
        <Route path={routes.language} component={Language} />
        <Route path={routes.home} component={Home} />
        <Route path={routes.sign_up.base} component={SignUp} />
        <Route path={routes.representer.base} component={Representer} />
        <Route path={routes.about_us} component={AboutUs} />
        <Route path={routes.bank_services} component={BankServices} />
        <Route path={routes.mobile_services} component={MobileServices} />
        <Route path={routes.bill_services} component={BillServices} />
        <Route path={routes.components} component={Components} />
        <Route path={routes.not_found} component={NotFound} />
        <Redirect exact from={routes.root} to={routes.splash} />
        <Redirect to={routes.not_found} />
      </AnimatedSwitch>
    </Router>
  );
};

export default Routing;
