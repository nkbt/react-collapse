import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '..';
import text from './text.json';
import {container} from './style';


const getText = num => text.slice(0, num).map((p, i) => <p key={i}>{p}</p>);


const VariableText = React.createClass({
  getInitialState() {
    return {isOpened: false, paragraphs: 0};
  },


  shouldComponentUpdate,


  onChange({target: {value}}) {
    this.setState({paragraphs: parseInt(value, 10)});
  },


  render() {
    const {isOpened, paragraphs} = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
          &nbsp;
          Paragraphs:
          &nbsp;
          <input type="range" step={1} min={0} max={4}
            value={paragraphs} onChange={this.onChange} />
        </div>

        <Collapse isOpened={isOpened} style={container}>
          <div style={{padding: 10}}>
            {paragraphs ? getText(paragraphs) : <p>No text</p>}
          </div>
        </Collapse>
      </div>
    );
  }
});


export default VariableText;
