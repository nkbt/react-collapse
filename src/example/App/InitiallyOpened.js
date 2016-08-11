import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../..';


import css from './App.css';


const InitiallyOpened = React.createClass({
  getInitialState() {
    return {isOpened: true};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened} = this.state;
    const height = 100;

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
          <div style={{height}} className={css.blob} />
        </Collapse>
      </div>
    );
  }
});


export default InitiallyOpened;
