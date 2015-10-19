import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import Collapse from '..';
import text from './text.json';
import {container} from './style';


const addText = num => (num + 1) % 5;
const getText = num => text.slice(0, num).map((p, i) => <p key={i}>{p}</p>);


const VariableText = React.createClass({
  getInitialState() {
    return {isOpened: false, paragraphs: 0};
  },

  shouldComponentUpdate,


  render() {
    const {isOpened, paragraphs} = this.state;

    return (
      <div>
        <div>
          <button onClick={() => this.setState({isOpened: !isOpened})}>Toggle</button>
          &nbsp;
          <button onClick={() => this.setState({paragraphs: addText(paragraphs)})}>
            {paragraphs === 4 ? 'Remove text' : 'Add paragraph'} [{paragraphs}]
          </button>
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
