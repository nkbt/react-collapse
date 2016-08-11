import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../..';
import text from './text.json';


import css from './App.css';


const getText = num => text.slice(0, num).map((p, i) => <p key={i}>{p}</p>);


const Hooks = React.createClass({
  getInitialState() {
    return {
      isOpened: false,
      isResting: false,
      keepContent: false,
      height: -1,
      paragraphs: 0
    };
  },


  shouldComponentUpdate,


  onHeightReady(height) {
    this.setState({height});
  },


  onRest() {
    this.setState({isResting: true});
  },


  render() {
    const {isOpened, height, paragraphs} = this.state;

    return (
      <div>
        <div className={css.config}>
          <label className={css.label}>
            Opened:
            <input className={css.input}
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({
                isOpened: checked,
                isResting: false
              })} />
          </label>

          <label className={css.label}>
            Paragraphs:
            <input className={css.input}
              type="range"
              value={paragraphs} step={1} min={0} max={4}
              onChange={({target: {value}}) => this.setState({
                paragraphs: parseInt(value, 10),
                isResting: false
              })} />
            {paragraphs}
          </label>
        </div>
        <div className={css.config}>
          <label className={css.label}>
            height: {height}px
          </label>
          <label className={css.label}>
            resting: {this.state.isResting ? 'true' : 'false'}
          </label>
        </div>
        <Collapse
          theme={css}
          isOpened={isOpened}
          onHeightReady={this.onHeightReady}
          onRest={this.onRest}>
          <div className={css.text}>{paragraphs ? getText(paragraphs) : <p>No text</p>}</div>
        </Collapse>
      </div>
    );
  }
});


export default Hooks;
