import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../..';
import css from './App.css';


const VariableHeight = React.createClass({
  getInitialState() {
    return {isOpened: false, height: 100};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened, height} = this.state;

    return (
      <div {...this.props}>
        <div className={css.config}>
          <label className={css.label}>
            Opened:
            <input className={css.input}
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

          <label className={css.label}>
            Content height:
            <input className={css.input}
              type="range"
              value={height} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({height: parseInt(value, 10)})} />
            {height}
          </label>
        </div>

        <Collapse theme={css} isOpened={isOpened}>
          <div style={{height}} className={css.blob} />
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;
