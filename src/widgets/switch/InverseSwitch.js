import React from 'react';
import { Switch } from '@lugia/lugia-web';
export default class InverseSwitch extends React.Component {
  render() {
    return (
          <Switch defaultValue isInverse />
    );
  }
}
