import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../..';
import VariableHeight from './VariableHeight';


import css from './App.css';


const Nested = React.createClass({
  getInitialState() {
    return {isOpened: false, keepContent: false};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened} = this.state;

    return (
      <div>
        <div className={css.config}>
          <label className={css.label}>
            Opened:
            <input className={css.input}
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>
        </div>

        <Collapse theme={css} isOpened={isOpened}>
          <VariableHeight className={css.subCollapse} />
          <VariableHeight className={css.subCollapse} />
          <VariableHeight className={css.subCollapse} />
        </Collapse>
      </div>
    );
  }
});


export default Nested;
