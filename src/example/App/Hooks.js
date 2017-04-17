import React from 'react';
import reactCreateClass from 'create-react-class';
import {findDOMNode} from 'react-dom';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../../Collapse';
import text from './text.json';
import * as style from './style';
import scroll from 'scroll';

const page = /Firefox/.test(navigator.userAgent) ?
  document.documentElement :
  document.body;

const getText = num => text.slice(0, num).map((p, i) => <p key={i}>{p}</p>);


const Hooks = reactCreateClass({
  getInitialState() {
    return {isOpened: false, keepContent: false, scrollHook: true, paragraphs: 0};
  },


  shouldComponentUpdate,


  onHeightReady(height) {
    if (this.state.scrollHook) {
      const collapsable = findDOMNode(this).querySelector('.collapsable');
      const bottom = collapsable.getBoundingClientRect().top + height;

      if (bottom > window.innerHeight) {
        scroll.top(page, bottom);
      }
    }
  },


  render() {
    const {isOpened, keepContent, scrollHook, paragraphs} = this.state;

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
            Auto-scroll:
            <input style={style.input}
              type="checkbox"
              checked={scrollHook}
              onChange={({target: {checked}}) => this.setState({scrollHook: checked})} />
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
          className="collapsable"
          style={style.container}
          isOpened={isOpened}
          keepCollapsedContent={keepContent}
          onHeightReady={this.onHeightReady}>
          <div style={{padding: 10}}>{paragraphs ? getText(paragraphs) : <p>No text</p>}</div>
        </Collapse>
      </div>
    );
  }
});


export default Hooks;
