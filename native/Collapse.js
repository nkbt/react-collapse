import React, {View} from 'react-native';
import {Motion, spring} from 'react-motion';


import HeightReporter from './HeightReporter';


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
    return {height: 0, dirty: true};
  },

  componentWillMount() {
    this.height = '0.00';
  },


  componentWillReceiveProps({children, fixedHeight}) {
    if (fixedHeight < 0 && children !== this.props.children) {
      this.setState({dirty: true});
    }
  },


  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.children !== this.props.children || nextState !== this.state;
  },


  onHeightReady(height) {
    this.setState({height, dirty: false});
  },


  renderHeightReporter() {
    if (!this.state.dirty && this.state.height) {
      return null;
    }
    const {isOpened, fixedHeight, ...props} = this.props;

    return (
      <HeightReporter onHeightReady={this.onHeightReady} {...props} />
    );
  },


  renderFixed() {
    const {isOpened, style, children, fixedHeight, springConfig, ...props} = this.props;

    return (
      <Motion
        defaultStyle={{height: 0}}
        style={{height: spring(isOpened ? fixedHeight : 0, springConfig)}}>
        {({height}) => (!isOpened && !height) ? null : (
          <View style={{...style, height, overflow: 'hidden'}} {...props}>
            {children}
          </View>
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

    return (
      <View>
        {this.renderHeightReporter()}

        <Motion
          defaultStyle={{height: 0}}
          style={{height: spring(isOpened ? height : 0, springConfig)}}>
          {st => {
            this.height = parseFloat(st.height).toFixed(2);
            // if (!isOpened && !st.height) {
            //   return null;
            // }

            const newStyle = this.height !== parseFloat(height).toFixed(2) ? {
              height: st.height,
              overflow: 'hidden'
            } : {height: null};

            return (
              <View style={{...style, ...newStyle}} {...props}>
                {children}
              </View>
            );
          }}
        </Motion>
      </View>
    );
  }
});


export default Collapse;
