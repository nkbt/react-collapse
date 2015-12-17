import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '..';
import * as style from './style';

const localStyle = height => ({
  content: {
    height,
    background: 'rgba(96, 125, 139, 0.6)',
    borderRadius: height / 2
  }
});


const VariableHeight = React.createClass({
  getInitialState() {
    return {isOpened: true, height: 100};
  },


  shouldComponentUpdate,


  onChange({target: {value: height}}) {
    this.setState({height});
  },


  onToggle() {
    const {isOpened} = this.state;

    this.setState({isOpened: !isOpened});
  },


  render() {
    const {isOpened, height} = this.state;

    return (
      <div>

        <div style={style.config}>
          <button onClick={this.onToggle}>{isOpened ? 'Close' : 'Open'}</button>
          &nbsp;
          Content height:
          &nbsp;
          <input type="range" step={50} min={0} max={500}
            value={height} onChange={this.onChange} />
        </div>

        <Collapse isOpened={isOpened} style={style.container}>
          <div style={{...localStyle(height).content, height}}></div>
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;
