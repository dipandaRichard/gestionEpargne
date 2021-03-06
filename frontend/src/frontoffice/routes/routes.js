import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
//import url
import urls from "./urls";


import Home from "app-js/frontoffice/components/Home/index.js";
import Dashboard from "app-js/frontoffice/components/Dashboard/index";
import All_Accounts from "app-js/frontoffice/components/Accounts/All_Accounts/index";
import Member from "app-js/frontoffice/components/Member/All/index";
import SingleMember from "app-js/frontoffice/components/Member/Single/index";
import LoginPage from "app-js/frontoffice/components/Auth/Login/index";
import NotFound from "app-js/frontoffice/components/404/index"
import Operations from "app-js/frontoffice/components/Operations/index"


@withRouter
class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path={urls.HOME} component={Home} />
        <Route exact path={urls.OPERATIONS} component={Operations} />
        <Route exact path={urls.DASHBOARD} component={Dashboard}/>
        <Route exact path={urls.LOGIN} component={LoginPage} />
        <Route exact path={urls.ALLACCOUNTS} component={All_Accounts} />
        <Route exact path={urls.MEMBER} component={Member} />
        <Route exact path={urls.SILGLE_MEMBER} component={SingleMember} />
        <Route exact path={urls.NOTFOUND} component={NotFound} />
        <Redirect to={urls.NOTFOUND} />
      </Switch>
    );
  }
}
export default Routes;
