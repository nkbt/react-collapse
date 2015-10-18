import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';


import HeightReporter from './HeightReporter';


const Collapse = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    style: React.PropTypes.object
  },


  getDefaultProps() {
    return {style: {}};
  },


  getInitialState() {
    return {height: 0, dirty: true};
  },

  componentWillMount() {
    this.height = '0.00';
  },


  componentWillReceiveProps({children}) {
    if (children !== this.props.children) {
      this.setState({dirty: true});
    }
  },


  shouldComponentUpdate,


  onUpdate() {
    this.setState({dirty: true});
  },


  onHeightReady(height) {
    this.setState({height, dirty: false});
  },


  renderHeightReporter() {
    if (!this.state.dirty && this.state.height) {
      return null;
    }
    const {isOpened, ...props} = this.props;

    return (
      <HeightReporter onHeightReady={this.onHeightReady} {...props} />
    );
  },


  render() {
    const {isOpened, style, children, ...props} = this.props;
    const {height} = this.state;

    return (
      <div>
        {this.renderHeightReporter()}

        <Motion defaultStyle={{height: 0}} style={{height: spring(isOpened ? height : 0)}}>
          {st => {
            this.height = parseFloat(st.height).toFixed(2);
            if (!isOpened && !st.height) {
              return null;
            }

            const newStyle = this.height !== parseFloat(height).toFixed(2) ? {
              height: st.height,
              overflow: 'hidden'
            } : {height: 'auto'};

            return (
              <div style={{...style, ...newStyle}} {...props}>
                {children}
              </div>
            );
          }}
        </Motion>
      </div>
    );
  }
});


export default Collapse;
