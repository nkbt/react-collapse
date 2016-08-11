import React from 'react';
import {presets} from 'react-motion';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import Collapse from '../..';


import css from './App.css';


const VariableHeight = React.createClass({
  getInitialState() {
    const preset = 'stiff';
    const {stiffness, damping} = presets[preset];

    return {isOpened: false, height: 100, preset: 'stiff', stiffness, damping};
  },


  shouldComponentUpdate,


  onChangePreset({target: {value: preset}}) {
    const {stiffness, damping} = presets[preset];

    this.setState({preset, stiffness, damping});
  },


  render() {
    const {isOpened, height, preset, stiffness, damping} = this.state;

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
            Content height:
            <input className={css.input}
              type="range"
              value={height} step={50} min={0} max={500}
              onChange={({target: {value}}) => this.setState({height: parseInt(value, 10)})} />
            {height}
          </label>

          <label className={css.label}>
            Preset:
            <select className={css.input}
              value={preset} step={10} min={0} max={300}
              onChange={this.onChangePreset}>
              {Object.keys(presets).map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>

          <label className={css.label}>
            Stiffness:
            <input className={css.input}
              type="range"
              value={stiffness} step={10} min={0} max={300}
              onChange={({target: {value}}) => this.setState({stiffness: parseInt(value, 10)})} />
            {stiffness}
          </label>

          <label className={css.label}>
            Damping:
            <input className={css.input}
              type="range"
              value={damping} step={5} min={0} max={40}
              onChange={({target: {value}}) => this.setState({damping: parseInt(value, 10)})} />
            {damping}
          </label>
        </div>
        <Collapse
          theme={css}
          isOpened={isOpened}
          springConfig={{stiffness, damping}}>
          <div style={{height}} className={css.blob} />
        </Collapse>

      </div>
    );
  }
});


export default VariableHeight;
