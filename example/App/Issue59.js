/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import {Collapse} from '../../src';


const styles = {
  ba: {
    display: 'block',
    background: 'none',
    border: 'none',
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer'
  },
  mb3: {
    marginBottom: '1rem'
  },
  pa3: {
    padding: '1rem'
  },
  h3: {
    height: '4rem',
    width: '4rem',
    backgroundColor: '#000'
  },
  w3: {
    width: '4rem'
  },
  bgBlack: {
    backgroundColor: '#000'
  }
};


export class Issue59 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {opened: 1, whatever: 'b'};
  }


  onClick1 = () => {
    this.setState({opened: 1});
  };


  onClick2 = () => {
    this.setState({opened: 2}, () => setTimeout(() => this.setState({whatever: 'bb'}), 50));
  };


  render() {
    const {opened, whatever} = this.state;
    return (
      <div>
        <div style={styles.mb3}>
          <button type="button" style={styles.ba} onClick={this.onClick1}>Header 1</button>
          <Collapse isOpened={opened === 1}>
            <div style={{...styles.ba, ...styles.pa3}}>
              <div style={{...styles.h3, ...styles.w3, ...styles.bgBlack}}>a</div>
            </div>
          </Collapse>
        </div>
        <div style={styles.mb3}>
          <button type="button" style={styles.ba} onClick={this.onClick2}>Header 2</button>
          <Collapse isOpened={opened === 2}>
            <div style={{...styles.ba, ...styles.pa3}}>
              <div style={{...styles.h3, ...styles.w3, ...styles.bgBlack}}>
                {whatever}
              </div>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
