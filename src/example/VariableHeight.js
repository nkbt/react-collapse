import React from 'react';
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
    return {isOpened: false, height: 100};
  },


  shouldComponentUpdate,


  onChange({target: {value: height}}) {
    this.setState({height});
  },


  render() {
    const {isOpened, height} = this.state;

    return (
      <div>

        <div>
          <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
          &nbsp;
          Content height:
          &nbsp;
          <input type="range" step={50} min={0} max={500}
            value={height} onChange={this.onChange} />
        </div>

        <Collapse isOpened={isOpened} style={container}>
          <div style={{...style(height).content, height}}></div>
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;
