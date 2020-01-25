import * as React from "react";
import { Login } from "@modules/Home/Login";
import { loggerHOC } from "@hoc/LoggerHOC";
import { notificationHOC } from "@hoc/NotificationHOC";
import { flow } from "lodash";
import { AppLayoutMain } from "@modules/LayoutsModule/AppLayoutMain";

const LoginWithLogger = flow(
  loggerHOC,
  notificationHOC
)(Login);

export const LoginPage = () => {
  return <LoginWithLogger />;
};

{
  /* <AppLayoutMain>
<LoginWithLogger />
</AppLayoutMain> */
}
