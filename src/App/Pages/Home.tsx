import * as React from "react";
import { Container } from "@modules/LayoutsModule/Container";

import styled from "styled-components";
import { AppLayoutMain } from "@modules/LayoutsModule/AppLayoutMain";
import { ILoggerService } from "@ifaces/ILoggerService";

const Heading = styled.h2`
  color: #009999;
`;

interface IHomePageProps {
  logger: ILoggerService;
  [propName: string]: any;
}

export const HomePage = (props: IHomePageProps) => {
  return (
    <AppLayoutMain>
      <Container style={{ height: "100%" }}>
        <div style={{ width: "300px" }}>
          <Heading>In progress... </Heading>
        </div>
      </Container>
    </AppLayoutMain>
  );
};
