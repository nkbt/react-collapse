import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';
import HeightReporter from 'react-height';

const Collapse = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    fixedHeight: React.PropTypes.number,
    style: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
    springConfig: React.PropTypes.arrayOf(React.PropTypes.number)
  },


  getDefaultProps() {
    return {fixedHeight: -1, style: {}};
  },


  getInitialState() {
    return {height: -1, staticRendering: true, startsOpen: this.props.isOpened};
  },

  componentWillMount() {
    this.height = '0.0';
  },


  shouldComponentUpdate,


  onHeightReady(height) {
    this.setState({height, staticRendering: false});
  },


  renderFixed() {
    const {isOpened, style, children, fixedHeight, springConfig, ...props} = this.props;

    return (
      <Motion
        defaultStyle={{height: 0}}
        style={{height: spring(isOpened ? fixedHeight : 0, springConfig)}}>
        {({height}) => (!isOpened && parseFloat(height).toFixed(1) === '0.0') ? null : (
          <div style={{...style, height, overflow: 'hidden'}} {...props}>
            {children}
          </div>
        )}
      </Motion>
    );
  },


  render() {
    const {isOpened, style, children, fixedHeight, springConfig, ...props} = this.props;

    if (fixedHeight > -1) {
      return this.renderFixed();
    }

    const {height, staticRendering, startsOpen} = this.state;
    const stringHeight = parseFloat(height).toFixed(1);

    // Cache Content so it is not re-rendered on each animation step
    const content = (
      <HeightReporter onHeightReady={this.onHeightReady}>
        {children}
      </HeightReporter>
    );

    if (staticRendering && isOpened) {
      return <div style={style} {...props}>{content}</div>;
    }

    return (
      <Motion
        defaultStyle={{height: startsOpen ? height : 0}}
        style={{height: spring(isOpened ? height : 0, springConfig)}}>
        {st => {
          this.height = Math.max(0, parseFloat(st.height)).toFixed(1);

          // TODO: this should be done using onEnd from ReactMotion, which is not yet implemented
          // See https://github.com/chenglou/react-motion/issues/235
          if (!isOpened && this.height === '0.0') {
            return null;
          }

          const newStyle = (isOpened && this.height === stringHeight) ? {height: 'auto'} : {
            height: st.height, overflow: 'hidden'
          };

          return <div style={{...style, ...newStyle}} {...props}>{content}</div>;
        }}
      </Motion>
    );
  }
});


export default Collapse;
