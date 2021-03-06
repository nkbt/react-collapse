import React from 'react';
import PropTypes from 'prop-types';
import {Collapse} from '../../src';


class Test extends React.Component {
  static propTypes = {
    onMount: PropTypes.func.isRequired,
    onUnmount: PropTypes.func.isRequired
  };


  componentDidMount() {
    const {onMount} = this.props;
    onMount();
  }


  componentWillUnmount() {
    const {onUnmount} = this.props;
    onUnmount();
  }


  render() {
    return <div>Test</div>;
  }
}


export class Issue66 extends React.Component {
  static propTypes = {
    isOpened: PropTypes.bool.isRequired
  };


  counter = 0;

  messages = [];


  constructor(props) {
    super(props);
    this.state = {shouldRender: false};
  }


  onRef = ref => {
    this.ref = ref;
  };


  onMount = () => {
    if (this.ref) {
      this.messages.unshift(`${this.counter}. Mounted`);
      this.messages = this.messages.slice(0, 5);
      this.ref.innerHTML = this.messages.join('<br />');
      this.counter = this.counter + 1;
    }
  };


  onUnmount = () => {
    if (this.ref) {
      this.messages.unshift(`${this.counter}. Unmounted`);
      this.messages = this.messages.slice(0, 5);
      this.ref.innerHTML = this.messages.join('<br />');
      this.counter = this.counter + 1;
    }
  };


  render() {
    const {shouldRender} = this.state;
    const {isOpened} = this.props;

    return (
      <div>
        <div className="config">
          <label className="label">
            Should render:
            <input
              type="checkbox"
              checked={shouldRender}
              onChange={({target: {checked}}) => this.setState({shouldRender: checked})} />
          </label>
        </div>

        <div className="log" ref={this.onRef} />

        {shouldRender ? (
          <Collapse isOpened={isOpened}>
            <Test onMount={this.onMount} onUnmount={this.onUnmount} />
          </Collapse>
        ) : null}
      </div>
    );
  }
}
