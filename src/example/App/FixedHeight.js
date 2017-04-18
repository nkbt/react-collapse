import React, {PureComponent} from 'react';
import Collapse from '../../Collapse';
import * as style from './style';

export default class FixedHeight extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {isOpened: false, keepContent: false, height: 100, fixedHeight: 200};
  }


  render() {
    const {isOpened, keepContent, height, fixedHeight} = this.state;

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
            Content height:
            <input style={style.input}
              type="range"
              value={height} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({height: parseInt(value, 10)})} />
            {height}
          </label>

          <label style={style.label}>
            Collapse height:
            <input style={style.input}
              type="range"
              value={fixedHeight} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({fixedHeight: parseInt(value, 10)})} />
            {fixedHeight}
          </label>
        </div>

        <Collapse
          style={style.container}
          isOpened={isOpened}
          fixedHeight={fixedHeight}
          keepCollapsedContent={keepContent}>
          <div style={{...style.getContent(height), height}} />
        </Collapse>
      </div>
    );
  }
}
