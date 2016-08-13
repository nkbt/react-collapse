import React from 'react';
import {CollapseUnmountClosed} from '../..';


const Test = React.createClass({
  propTypes: {
    onMount: React.PropTypes.func.isRequired,
    onUnmount: React.PropTypes.func.isRequired
  },


  componentDidMount() {
    this.props.onMount();
  },


  componentWillUnmount() {
    this.props.onUnmount();
  },


  render() {
    return <div>Test</div>;
  }
});


export const AutoUnmount = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired
  },


  getInitialState() {
    return {isOpened: this.props.isOpened, shouldRender: false};
  },


  componentWillMount() {
    this.counter = 0;
    this.messages = [];
  },


  onRef(ref) {
    this.ref = ref;
  },


  onMount() {
    if (this.ref) {
      this.messages.unshift(`${this.counter}. Mounted`);
      this.messages = this.messages.slice(0, 5);
      this.ref.innerHTML = this.messages.join('<br />');
      this.counter = this.counter + 1;
    }
  },


  onUnmount() {
    if (this.ref) {
      this.messages.unshift(`${this.counter}. Unmounted`);
      this.messages = this.messages.slice(0, 5);
      this.ref.innerHTML = this.messages.join('<br />');
      this.counter = this.counter + 1;
    }
  },


  onChange({target: {checked}}) {
    this.setState({isOpened: checked});
  },


  render() {
    const {isOpened} = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Opened:
            <input className="input" type="checkbox" checked={isOpened} onChange={this.onChange} />
          </label>
        </div>

        <CollapseUnmountClosed isOpened={isOpened}>
          <Test onMount={this.onMount} onUnmount={this.onUnmount} />
        </CollapseUnmountClosed>

        <div className="log" ref={this.onRef} />
      </div>
    );
  }
});
