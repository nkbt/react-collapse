import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';


import HeightReporter from 'react-height';


const Collapse = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    fixedHeight: React.PropTypes.number,
    style: React.PropTypes.object,
    springConfig: React.PropTypes.arrayOf(React.PropTypes.number)
  },


  getDefaultProps() {
    return {fixedHeight: -1, style: {}};
  },


  getInitialState() {
    return {height: -1};
  },

  componentWillMount() {
    this.height = '0.0';
  },


  shouldComponentUpdate,


  onHeightReady(height) {
    this.setState({height});
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

    const {height} = this.state;
    const stringHeight = parseFloat(height).toFixed(1);

    return (
      <div>
        <HeightReporter style={style} hidden={true} onHeightReady={this.onHeightReady} {...props}>
          {children}
        </HeightReporter>

        <Motion
          defaultStyle={{height: 0}}
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
