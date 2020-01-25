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
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const HeadingText = styled.div`
  font-size: 18px;
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
            <div>
              {this.props.rootStore.productStore.selectedProducts.length} Items
              to cart
            </div>

            <Button
              color="facebook"
              onClick={() => {
                this.goToCheckout();
              }}
            >
              Checkout
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
          <Box style={{ width: "800px" }}>
            {products.map((product: any) => (
              <ListBox key={product.id} product={product} />
            ))}
          </Box>
        </Flex>
      </Box>
    );
  }
}

export const Login = withRouter(LoginComponent);
