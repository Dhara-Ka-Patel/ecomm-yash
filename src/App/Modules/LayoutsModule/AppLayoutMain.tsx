import * as React from "react";
import { Segment, Sidebar, Header, Grid } from "semantic-ui-react";
import { AppHeader } from "./AppHeader";
import { PageWrapper } from "./PageWrapper";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { AppFooter } from "./AppFooter";

const MainContainer = styled.div`
  width: 100vw;
  height: auto;

  background: #ffffff;
`;

const ContentBlockFlex = styled.div`
  // display: flex;
  // flex-direction: row;
  // align-items: flex-start;
`;

const ContentBlock = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

interface IAppLayoutMainProps {
  children?: any;
  renderSubsidbar?: (props: any) => any;
  [propName: string]: any;
}

export class AppLayoutMain extends React.Component<IAppLayoutMainProps, any> {
  public static defaultProps: IAppLayoutMainProps = {
    renderSubsidbar: (props: any) => null
  };

  public render() {
    return (
      <MainContainer>
        <ContentBlock>
          <AppHeader />
          <ContentBlockFlex className="container">
            {this.props.renderSubsidbar(this.props)}

            <ContentBlock>
              <PageWrapper>{this.props.children}</PageWrapper>
            </ContentBlock>
          </ContentBlockFlex>
          <AppFooter />
        </ContentBlock>
      </MainContainer>
    );
  }
}
