import React from 'react';
import {presets} from 'react-motion';
import Collapse from '../../Collapse';
import * as style from './style';


export default class VariableHeight extends React.Component {
  constructor(props) {
    super(props);

    const preset = 'stiff';
    const {stiffness, damping} = presets[preset];

    this.state = {isOpened: false, keepContent: false, height: 100, preset: 'stiff', stiffness, damping};
  }


  onChangePreset = ({target: {value: preset}}) => {
    const {stiffness, damping} = presets[preset];

    this.setState({preset, stiffness, damping});
  }


  render() {
    const {isOpened, keepContent, height, preset, stiffness, damping} = this.state;

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
            Preset:
            <select style={style.input}
              value={preset} step={10} min={0} max={300}
              onChange={this.onChangePreset}>
              {Object.keys(presets).map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>

          <label style={style.label}>
            Stiffness:
            <input style={style.input}
              type="range"
              value={stiffness} step={10} min={0} max={300}
              onChange={({target: {value}}) => this.setState({stiffness: parseInt(value, 10)})} />
            {stiffness}
          </label>

          <label style={style.label}>
            Damping:
            <input style={style.input}
              type="range"
              value={damping} step={5} min={0} max={40}
              onChange={({target: {value}}) => this.setState({damping: parseInt(value, 10)})} />
            {damping}
          </label>
        </div>
        <Collapse
          style={style.container}
          isOpened={isOpened}
          springConfig={{stiffness, damping}}
          keepCollapsedContent={keepContent}>
          <div style={{...style.getContent(height), height}} />
        </Collapse>

      </div>
    );
  }
}
