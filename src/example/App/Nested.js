import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import {Collapse} from '../..';
import {VariableHeight} from './VariableHeight';


export const Nested = React.createClass({
  getInitialState() {
    return {isOpened: false};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened} = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Opened:
            <input className="input"
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>
        </div>

        <Collapse isOpened={isOpened}>
          <VariableHeight className="subCollapse" />
          <VariableHeight className="subCollapse" />
          <VariableHeight className="subCollapse" />
        </Collapse>
      </div>
    );
  }
});
