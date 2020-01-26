import * as React from "react";
import { RootStore } from "../../Store/RootStore";
import { ILoggerService } from "@ifaces/ILoggerService";
import { INotificationService } from "@ifaces/INotificationService";
import styled from "styled-components";
import { Box, Flex } from "@shared/GeneralComponents";
import { Button, Image, Icon } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import * as FeatherIcon from "react-feather";

const WrapperBox: any = styled(Box)`
  margin: 20px;

  background: #f6f6f6;
// ${(props: any) => (props.isAdded ? "#a0cfdf" : "#f6f6f6")}
  border-radius: 5px;
  border: 1px solid #c5c8c9;
  font-weight: bold;

  padding: 20px;

  font-size: 16px;
`;

interface IProps {
  product: any;
  // isSelected: boolean;
  image?: any;
  rootStore?: RootStore;
  logger?: ILoggerService;
  notificationService?: INotificationService;
}

@inject("rootStore")
@observer
export class GridBox extends React.Component<IProps, any> {
  constructor(props: any) {
    super(props);

    // this.state = {
    //   count: 1
    // };
    // this.increament = this.increament.bind(this);
    // this.decreament = this.decreament.bind(this);
  }

  // public increament() {
  //   this.setState({
  //     count: this.state.count + 1
  //   });

  //   this.props.rootStore.productStore.toogle(this.state.count);
  // }

  // public decreament() {
  //   if (this.state.count > 1) {
  //     this.setState({
  //       count: this.state.count - 1
  //     });
  //   }
  // }

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
          justifyContent: "center",
          width: "300px"
        }}
      >
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            // width: "160px"
            width: "100%",
            height: "200px",
            padding: "10px",
            marginBottom: "20px"
          }}
        >
          <Image
            src={this.props.product.image}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </Flex>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div style={{ fontWeight: "normal" }}>{this.props.product.name}</div>

          <div style={{ fontWeight: "bold" }}>
            {this.props.product.price}&nbsp;$
          </div>
        </Flex>
        <Flex
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%"
          }}
        >
          {/* <Flex
            style={{
              alignItems: "center",
              justifyContent: "flex-start",
              width: "fit-content",
              paddingTop: "15px"
            }}
          >
            <Button icon={true} onClick={this.increament.bind(this)}>
              <Icon name="caret up" />
            </Button>
            <div style={{ padding: "5px" }}>{this.state.count}</div>
            <Button icon={true} onClick={this.decreament.bind(this)}>
              <Icon name="caret down" />
            </Button>
          </Flex> */}
          <div
            // tslint:disable-next-line: jsx-no-lambda
            onClick={() => {
              this.props.rootStore.productStore.toggleProductInList(
                this.props.product.label
              );
            }}
          >
            {this.isProductInList(this.props.product.label) ? (
              <Button size="tiny" color="google plus">
                <FeatherIcon.Trash color="#ffffff" size={"20"} />
              </Button>
            ) : (
              <Button size="tiny" primary={true}>
                Add to cart
              </Button>
            )}
          </div>
        </Flex>
      </WrapperBox>
    );
  }
}
