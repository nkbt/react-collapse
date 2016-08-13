import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import {Collapse} from './Collapse';


export const Unmount = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    onRest: React.PropTypes.func
  },


  getInitialState() {
    return {
      shouldUnmount: !this.props.isOpened,
      forceInitialAnimation: !this.props.isOpened
    };
  },


  componentWillReceiveProps({isOpened}) {
    if (!this.props.isOpened && isOpened) {
      this.setState({
        forceInitialAnimation: true,
        shouldUnmount: false
      });
    }
  },


  shouldComponentUpdate,


  onRest(...args) {
    const {isOpened, onRest} = this.props;

    if (!isOpened) {
      this.setState({shouldUnmount: true});
    }
    if (onRest) {
      onRest(...args);
    }
  },


  render() {
    const {
      isOpened,
      onRest: _onRest,
      ...props
    } = this.props;

    const {
      forceInitialAnimation,
      shouldUnmount
    } = this.state;

    return shouldUnmount ? null : (
      <Collapse
        forceInitialAnimation={forceInitialAnimation}
        isOpened={isOpened}
        onRest={this.onRest}
        {...props} />
    );
  }
});
