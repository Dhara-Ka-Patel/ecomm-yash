// tslint:disable-next-line:import-name
import { inject, observer } from "mobx-react";
import * as React from "react";
import { RootStore } from "../../Store/RootStore";
import { ILoggerService } from "@ifaces/ILoggerService";
import { INotificationService } from "@ifaces/INotificationService";
import styled from "styled-components";
import { Box, Flex } from "@shared/GeneralComponents";
import { products } from "@configs/ProductList";
import { Button } from "semantic-ui-react";
import { CheckoutItem } from "./CheckoutItem";
import { withRouter } from "react-router-dom";

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
class CheckoutComponent extends React.Component<ILoginComponentProps> {
  constructor(props: any) {
    super(props);

    this.goToProducts = this.goToProducts.bind(this);
  }

  public goToProducts() {
    this.props.history.push("/home");
  }

  public getCartItems(labelList: any[]) {
    const cartProducts: any[] = [];
    labelList.map((label: any) => {
      const res = products.filter((p: any) => p.label === label);

      console.log("product:", res);

      cartProducts.push(res[0]);
    });

    return cartProducts;
  }

  public getTotalCost(products: any) {
    let total = 0;
    if (products.length > 0) {
      products.map((p: any) => {
        total = Number(total) + Number(p.price);
      });
    }

    return total;
  }

  public render() {
    const cartProducts = this.getCartItems(
      this.props.rootStore.productStore.selectedProducts
    );
    return (
      <Box>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "30px"
          }}
        >
          <HeadingText>Checkout</HeadingText>
        </Flex>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 100px 30px 100px"
          }}
        >
          <div>
            <Button
              color="facebook"
              onClick={() => {
                this.goToProducts();
              }}
            >
              Go back to Products
            </Button>
          </div>

          <div>
            <Button color="facebook" secondary={true}>
              Proceed to payment
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
            {cartProducts &&
              cartProducts.length > 0 &&
              cartProducts.map((product: any) => (
                <CheckoutItem key={product.id} product={product} />
              ))}
          </Box>
        </Flex>

        <Flex
          style={{
            alignItems: "flex-end",
            justifyContent: "center",
            padding: "30px"
          }}
        >
          <Flex
            style={{
              width: "800px",
              alignItems: "flex-end",
              justifyContent: "flex-end"
            }}
          >
            <div
              style={{
                width: "fit-content",
                fontWeight: "bold",
                color: "#3947a6",
                fontSize: "18px"
              }}
            >
              total: {this.getTotalCost(cartProducts)}&nbsp;$
            </div>
          </Flex>
        </Flex>
      </Box>
    );
  }
}

export const Checkout = withRouter(CheckoutComponent);
