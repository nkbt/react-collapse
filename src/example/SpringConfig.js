import React from 'react';
import {presets} from 'react-motion';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '..';
import {container} from './style';


const style = height => ({
  content: {
    height,
    background: 'rgba(0,0,0,0.2)',
    borderRadius: height / 2
  }
});


const VariableHeight = React.createClass({
  getInitialState() {
    const [stiffness, damping] = presets.wobbly;

    return {isOpened: false, height: 100, stiffness, damping};
  },


  shouldComponentUpdate,


  onChange(prop) {
    return ({target: {value}}) => this.setState({[prop]: parseInt(value, 10)});
  },


  render() {
    const {isOpened, height, stiffness, damping} = this.state;

    return (
      <div>

        <div>
          <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
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

        <Collapse isOpened={isOpened} style={container} springConfig={[stiffness, damping]}>
          <div style={{...style(height).content, height}}></div>
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;
