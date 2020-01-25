import * as React from "react";
import { RootStore } from "../../Store/RootStore";
import { ILoggerService } from "@ifaces/ILoggerService";
import { INotificationService } from "@ifaces/INotificationService";
import styled from "styled-components";
import { Box, Flex } from "@shared/GeneralComponents";
import { products } from "@configs/ProductList";
import { Button } from "semantic-ui-react";
import { inject, observer } from "mobx-react";

const WrapperBox = styled(Flex)`
  margin: 20px;

  background: #f6f6f6;
// ${(props: any) => (props.isAdded ? "#a0cfdf" : "#f6f6f6")}
  border-radius: 5px;
  border: 1px solid #c5c8c9;
  font-weight: bold;

  padding: 20px;

  font-size: 14px;
`;

interface IProps {
  product: any;
  // isSelected: boolean;
  rootStore?: RootStore;
  logger?: ILoggerService;
  notificationService?: INotificationService;
}

@inject("rootStore")
@observer
export class CheckoutItem extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  public isProductInList(key: string) {
    const i = this.props.rootStore.productStore.selectedProducts.findIndex(
      (product: string) => product === key
    );

    if (i > -1) {
      return true;
    }
    return false;
  }

  public render() {
    return (
      <WrapperBox
        // isAdded={this.props.isSelected}
        style={{
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>{this.props.product.name}</div>
        <div>({this.props.product.price}$)</div>
      </WrapperBox>
    );
  }
}
