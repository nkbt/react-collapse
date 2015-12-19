import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '../Collapse';
import * as style from './style';


const localStyle = height => ({
  content: {
    height,
    background: 'rgba(96, 125, 139, 0.6)',
    borderRadius: height / 2
  }
});


const InitiallyOpened = React.createClass({
  getInitialState() {
    return {isOpened: true, height: 100};
  },


  shouldComponentUpdate,


  onToggle() {
    const {isOpened} = this.state;

    this.setState({isOpened: !isOpened});
  },


  render() {
    const {isOpened} = this.state;
    const height = 100;

    return (
      <div>
        <div style={style.config}>
          <button onClick={this.onToggle}>{isOpened ? 'Close' : 'Open'}</button>
        </div>
        <h3>Variable height</h3>
        <Collapse isOpened={isOpened} style={style.container}>
          <div style={{...localStyle(height).content, height}}></div>
        </Collapse>
        <h3>Fixed height</h3>
        <Collapse isOpened={isOpened} style={style.container} fixedHeight={150}>
          <div style={{...localStyle(height).content, height}}></div>
        </Collapse>
      </div>
    );
  }
});


export default InitiallyOpened;
