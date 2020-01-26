// tslint:disable-next-line:import-name
import { inject, observer } from "mobx-react";
import * as React from "react";
import { RootStore } from "../../Store/RootStore";
import { ILoggerService } from "@ifaces/ILoggerService";
import { INotificationService } from "@ifaces/INotificationService";
import styled from "styled-components";
import { Box, Flex } from "@shared/GeneralComponents";
import { products } from "@configs/ProductList";
import { ListBox } from "./ListBox";
import { Button, Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import * as FeatherIcon from "react-feather";
import { GridBox } from "./GridBox";

const HeadingText = styled.div`
  font-size: 22px;
  font-weight: bold;

  color: #3947a6;
`;

interface ILoginComponentProps {
  rootStore?: RootStore;
  logger?: ILoggerService;
  notificationService?: INotificationService;
  history: any;
}

@inject("rootStore")
@observer
class LoginComponent extends React.Component<ILoginComponentProps> {
  constructor(props: any) {
    super(props);

    this.goToCheckout = this.goToCheckout.bind(this);
  }

  public goToCheckout() {
    this.props.history.push("/checkout");
  }

  public render() {
    return (
      <Box>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "30px"
          }}
        >
          <HeadingText>Product List</HeadingText>
        </Flex>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0px 100px 30px 100px"
          }}
        >
          <div>
            <Button color="facebook" onClick={this.goToCheckout.bind(this)}>
              <Flex
                style={{
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <FeatherIcon.ShoppingCart color="#ffffff" size={24} />
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    padding: "5px 5px 5px 10px"
                  }}
                >
                  {this.props.rootStore.productStore.selectedProducts.length}{" "}
                  items
                </div>
              </Flex>
            </Button>
          </div>
        </Flex>
        <Flex
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "30px"
          }}
        >
          <Box style={{ width: "1020px" }}>
            <Grid columns={3}>
              {products.map((product: any) => (
                <GridBox key={product.id} product={product} />
              ))}
            </Grid>
          </Box>
        </Flex>
      </Box>
    );
  }
}

export const Login = withRouter(LoginComponent);
