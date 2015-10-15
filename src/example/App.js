import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '..';


const style = height => ({
  container: {
    margin: 10,
    maxWidth: 400,
    border: '3px solid green',
    borderRadius: height / 8
  },

  content: {
    height,
    background: 'rgba(0,0,0,0.2)',
    borderRadius: height / 2
  }
});


const randomHeight = () => 100 + Math.round(Math.random() * 10) * 20;


const App = React.createClass({
  getInitialState() {
    return {isOpened: false, height: 100};
  },

  shouldComponentUpdate,


  render() {
    const {isOpened, height} = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
          &nbsp;
          <button onClick={() => this.setState({height: randomHeight()})}>Change height</button>
          &nbsp;
          Height: {this.state.height}
        </div>

        <Collapse isOpened={isOpened} style={style(height).container}>
          <div style={{...style(height).content, height}}></div>
          <div style={{textAlign: 'center', padding: 10}}>Hello!</div>
        </Collapse>
      </div>
    );
  }
});


export default App;
