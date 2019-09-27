import React from 'react';
import {Collapse} from '../../src';
import text from './text.json';


const getText = num => text.slice(0, num).map(p => <p key={p}>{p}</p>);


export class Hooks extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      isResting: false,
      paragraphs: 0
    };
  }


  render() {
    const {
      isResting, isOpened, paragraphs, params
    } = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Opened:
            <input
              className="input"
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>

          <label className="label">
            Paragraphs:
            <input
              className="input"
              type="range"
              value={paragraphs}
              step={1}
              min={0}
              max={4}
              onChange={({target: {value}}) => this.setState({paragraphs: parseInt(value, 10)})} />
            {paragraphs}
          </label>
        </div>
        <div className="config">
          <span className="label">
            Resting:
            {' '}
            {isResting ? 'true' : 'false'}
          </span>
          <span className="label">
            onRest/onWork arguments:
            {' '}
            {params}
          </span>
        </div>
        <Collapse
          isOpened={isOpened}
          onWork={p => this.setState({isResting: false, params: JSON.stringify(p)})}
          onRest={p => this.setState({isResting: true, params: JSON.stringify(p)})}>
          <div className="text">{paragraphs ? getText(paragraphs) : <p>No text</p>}</div>
        </Collapse>
      </div>
    );
  }
}
