import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { flow } from "lodash";
import { AuthRouteGaurd } from "src/App/Routes/Gaurds/AuthRouteGaurd";
import { UnauthRouteGaurd } from "src/App/Routes/Gaurds/UnauthRouteGaurd";
import { LoginPage } from "../Pages/Login";
import { Box } from "@modules/LayoutsModule/Box";
import { loggerHOC } from "@hoc/LoggerHOC";
import { HomePage } from "../Pages/Home";
import { CheckoutPage } from "../Pages/Checkout";

const HomePageExtra = flow(loggerHOC)(HomePage);

export default () => (
  <BrowserRouter>
    <Box>
      <Switch>
        <AuthRouteGaurd path="/" component={HomePageExtra} exact={true} />

        {/* <AuthRouteGaurd path="/users" component={UsersPage} exact={true} /> */}
        <UnauthRouteGaurd path="/home" component={LoginPage} />
        <UnauthRouteGaurd path="/checkout" component={CheckoutPage} />
        {/* <UnauthRouteGaurd
          path="/password-assistance"
          component={ForgotPasswordPage}
        />
        <UnauthRouteGaurd
          path="/new-password"
          component={CreateNewPasswordPage}
        /> */}
      </Switch>
    </Box>
  </BrowserRouter>
);
