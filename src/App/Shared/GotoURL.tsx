import * as React from 'react';
import * as FeatherIcon from 'react-feather';
import { Button } from 'semantic-ui-react';
import { withRouter } from 'react-router';

function gotoURLComponent(props: any) {
  const { iconSize = 16, iconColor = '#797F82', size = 'small' } = props;
  const icon = props.icon || (
    <FeatherIcon.Edit size={iconSize} color={iconColor} />
  );
  const handleActionClick = () => props.history.push(props.url);
  return (
    <Button
      size={size}
      style={props.style}
      onClick={handleActionClick}
      circular={true}
      icon={icon}
    />
  );
}

export const GotoURL = withRouter(gotoURLComponent);
