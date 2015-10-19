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


const FixedHeight = React.createClass({
  getInitialState() {
    return {isOpened: false, content: 100, collapse: 200};
  },


  shouldComponentUpdate,


  onChangeContent({target: {value: content}}) {
    this.setState({content});
  },


  onChangeCollapse({target: {value: collapse}}) {
    this.setState({collapse});
  },


  render() {
    const {isOpened, collapse, content} = this.state;

    return (
      <div>

        <div>
          <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
          &nbsp;
          Content height:
          &nbsp;
          <input type="number" step={50} min={100} max={500}
            value={content} onChange={this.onChangeContent} />
          &nbsp;
          Collapse fixed height:
          &nbsp;
          <input type="number" step={50} min={100} max={500}
            value={collapse} onChange={this.onChangeCollapse} />
        </div>

        <Collapse isOpened={isOpened} style={container}>
          <div style={{...style(content).content, height: content}}></div>
        </Collapse>

      </div>
    );
  }
});


export default FixedHeight;
