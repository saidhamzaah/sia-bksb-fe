import React, { Component } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { Home, AccountList, AddAccount, RecordJournal, Login } from "../pages";

import { PrivateRoute, PublicRoute } from "./AccessRoute";
class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute component={Home} restricted={false} path="/" exact />
          <PrivateRoute path="/Account-List" component={AccountList} />
          <PrivateRoute path="/Account-Add" component={AddAccount} />
          <PrivateRoute path="/Record-Journal" component={RecordJournal} />
          <PublicRoute component={Login} restricted={true} path="/auth" exact />
          {/* <PublicRoute   component={ForgotPassword} restricted={true} path='/auth/forgot-password'  /> */}
          {/* <PublicRoute   component={NewPassword} restricted={true} path='/auth/new-password'  /> */}
          {/* <PublicRoute   path="/auth/register" component={Register}  /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routing;
