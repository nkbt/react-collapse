import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '..';
import paragraphs from './text.json';


const style = height => ({
  container: {
    margin: 10,
    maxWidth: 800,
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
const randomText = num => (num + 1) % 5;
const getText = num => paragraphs.slice(0, num).map((p, i) => <div key={i}>{p}</div>);


const App = React.createClass({
  getInitialState() {
    return {isOpened: false, height: 100, text: 0};
  },

  shouldComponentUpdate,


  render() {
    const {isOpened, height, text} = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
          &nbsp;
          <button onClick={() => this.setState({height: randomHeight()})}>
            Change height {this.state.height}
          </button>
          &nbsp;
          <button onClick={() => this.setState({text: randomText(text)})}>
            Change text {text}
          </button>
        </div>

        <Collapse isOpened={isOpened} style={style(height).container}>
          <div style={{...style(height).content, height}}></div>
          {text ? <div style={{padding: 10}}>{getText(text)}</div> : null}
        </Collapse>
      </div>
    );
  }
});


export default App;
