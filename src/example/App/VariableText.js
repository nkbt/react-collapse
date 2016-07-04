import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../../Collapse';
import text from './text.json';
import * as style from './style';


const getText = num => text.slice(0, num).map((p, i) => <p key={i}>{p}</p>);


const VariableText = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool
  },


  getDefaultProps() {
    return {
      isOpened: false
    };
  },


  getInitialState() {
    return {isOpened: this.props.isOpened, keepContent: false, paragraphs: 0};
  },


  shouldComponentUpdate,


  render() {
    const {isOpened, keepContent, paragraphs} = this.state;

    return (
      <div>
        <div style={style.config}>
          <label style={style.label}>
            Opened:
            <input style={style.input}
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

          <label style={style.label}>
            Keep content:
            <input style={style.input}
              type="checkbox"
              checked={keepContent}
              onChange={({target: {checked}}) => this.setState({keepContent: checked})} />
          </label>

          <label style={style.label}>
            Paragraphs:
            <input style={style.input}
              type="range"
              value={paragraphs} step={1} min={0} max={4}
              onChange={({target: {value}}) => this.setState({paragraphs: parseInt(value, 10)})} />
            {paragraphs}
          </label>
        </div>

        <Collapse
          style={style.container}
          isOpened={isOpened}
          keepCollapsedContent={keepContent}>
          <div style={{padding: 10}}>{paragraphs ? getText(paragraphs) : <p>No text</p>}</div>
        </Collapse>
      </div>
    );
  }
});


export default VariableText;
