import React from 'react';
import {presets} from 'react-motion';
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
    const [stiffness, damping] = presets.stiff;

    return {isOpened: false, height: 100, stiffness, damping};
  },


  shouldComponentUpdate,


  onChange(prop) {
    return ({target: {value}}) => this.setState({[prop]: parseInt(value, 10)});
  },


  onToggle() {
    const {isOpened} = this.state;

    this.setState({isOpened: !isOpened});
  },


  render() {
    const {isOpened, height, stiffness, damping} = this.state;

    return (
      <div>

        <div style={style.config}>
          <button onClick={this.onToggle}>{isOpened ? 'Close' : 'Open'}</button>
          &nbsp;
          Content height:
          &nbsp;
          <input type="range" min={100} max={500} step={50}
            value={height} onChange={this.onChange('height')} />
          &nbsp;
          Stiffness:
          &nbsp;
          <input type="range" min={0} max={300} step={10}
            value={stiffness} onChange={this.onChange('stiffness')} />
          &nbsp;
          Damping:
          &nbsp;
          <input type="range" min={0} max={40} step={5}
            value={damping} onChange={this.onChange('damping')} />
        </div>

        <Collapse isOpened={isOpened} style={style.container} springConfig={[stiffness, damping]}>
          <div style={{...localStyle(height).content, height}}></div>
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;
