import React from 'react';


import {Collapse} from './Collapse';


export class UnmountClosed extends React.Component {
  render() {
    const {...rest} = this.props;
    return (
      <Collapse {...rest} />
    );
  }
}
