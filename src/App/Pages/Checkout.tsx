import * as React from "react";
import { loggerHOC } from "@hoc/LoggerHOC";
import { notificationHOC } from "@hoc/NotificationHOC";
import { flow } from "lodash";
import { Checkout } from "@modules/Checkout.tsx/Checkout";

const CheckoutWithLogger = flow(
  loggerHOC,
  notificationHOC
)(Checkout);

export const CheckoutPage = () => {
  return <CheckoutWithLogger />;
};
