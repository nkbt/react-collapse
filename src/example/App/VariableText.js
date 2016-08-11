import React from 'react';
import Collapse from '../..';
import text from './text.json';
import css from './App.css';


const getText = num => text.slice(0, num)
  .map((p, i) => <p key={i} style={{margin: 0, padding: 10}}>{p}</p>);


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
    return {isOpened: this.props.isOpened, paragraphs: 0};
  },


  render() {
    const {isOpened, paragraphs} = this.state;

    return (
      <div>
        <div className={css.config}>
          <label className={css.label}>
            Opened:
            <input className={css.input}
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

          <label className={css.label}>
            Paragraphs:
            <input className={css.input}
              type="range"
              value={paragraphs} step={1} min={0} max={4}
              onChange={({target: {value}}) => this.setState({paragraphs: parseInt(value, 10)})} />
            {paragraphs}
          </label>
        </div>

        <Collapse theme={css} isOpened={isOpened}>
          <div className={css.text}>
            {paragraphs ? getText(paragraphs) : <p style={{margin: 0, padding: 10}}>No text</p>}
          </div>
        </Collapse>
      </div>
    );
  }
});


export default VariableText;
