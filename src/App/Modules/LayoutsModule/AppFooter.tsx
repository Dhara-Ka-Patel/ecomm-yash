import * as React from "react";

import { observer, inject } from "mobx-react";

interface IAppHeaderProps {
  [name: string]: any;
}

@inject("rootStore")
@observer
export class AppFooter extends React.Component<IAppHeaderProps, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return <div>Footer</div>;
  }
}
