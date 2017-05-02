import React from 'react';
import Collapse from '../../Collapse';
import * as style from './style';


export default class InitiallyOpened extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: true, keepContent: false};
  }


  render() {
    const {isOpened, keepContent} = this.state;
    const height = 100;

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
        </div>
        <h3>Variable height</h3>
        <Collapse
          style={style.container}
          isOpened={isOpened}
          keepCollapsedContent={keepContent}>
          <div style={{...style.getContent(height), height}} />
        </Collapse>
        <h3>Fixed height</h3>
        <Collapse
          style={style.container}
          isOpened={isOpened}
          fixedHeight={150}
          keepCollapsedContent={keepContent}>
          <div style={{...style.getContent(height), height}} />
        </Collapse>
      </div>
    );
  }
}
