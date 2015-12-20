import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';
import HeightReporter from 'react-height';


const stringHeight = height => Math.max(0, parseFloat(height)).toFixed(1);



const Collapse = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    fixedHeight: React.PropTypes.number,
    style: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
    springConfig: React.PropTypes.arrayOf(React.PropTypes.number),
    keepCollapsedContent: React.PropTypes.bool
  },


  getDefaultProps() {
    return {fixedHeight: -1, style: {}, keepCollapsedContent: false};
  },


  getInitialState() {
    return {height: -1};
  },

  componentWillMount() {
    this.height = stringHeight(0);
    this.renderStatic = true;
//    this.initiallyOpened = this.props.isOpened;
  },


//  componentWillReceiveProps({isOpened}) {
//    if (isOpened === this.props.isOpened) {
//      this.renderStatic = true;
//    }
//  },


  shouldComponentUpdate,

//  shouldComponentUpdate(props, state) {
//    if (props.isOpened === this.props.isOpened &&
//      props.keepCollapsedContent !== this.props.keepCollapsedContent) {
//      return false;
//    }
//
//    return shouldComponentUpdate.call(this, props, state);
//  },
//

  onHeightReady(height) {
    if (this.renderStatic && this.props.isOpened) {
      this.height = stringHeight(height);
      console.log('Collapse.js:54   this.renderStatic && this.props.isOpened', this.height);
    }
    this.setState({height});
  },


  renderFixed() {
    const {isOpened, style, children, fixedHeight, springConfig, keepCollapsedContent,
      ...props} = this.props;

    if (this.renderStatic) {
      this.renderStatic = false;
      const newStyle = {overflow: 'hidden', height: isOpened ? fixedHeight : 0};

      if (!keepCollapsedContent && !isOpened) {
        return null;
      }
      return <div style={{...newStyle, ...style}} {...props}>{children}</div>;
    }

    return (
      <Motion
        defaultStyle={{height: isOpened ? 0 : fixedHeight}}
        style={{height: spring(isOpened ? fixedHeight : 0, springConfig)}}>
        {({height}) => {
          this.height = stringHeight(height);

          // TODO: this should be done using onEnd from ReactMotion, which is not yet implemented
          // See https://github.com/chenglou/react-motion/issues/235
          if (!keepCollapsedContent && !isOpened && this.height === stringHeight(0)) {
            return null;
          }

          const newStyle = {overflow: 'hidden', height};

          return <div style={{...newStyle, ...style}} {...props}>{children}</div>;
        }}
      </Motion>
    );
  },


  renderHeightReporter() {
    const {children} = this.props;

    return <HeightReporter onHeightReady={this.onHeightReady}>{children}</HeightReporter>;
  },


  render() {
    const {isOpened, style, children, fixedHeight, springConfig, keepCollapsedContent,
      ...props} = this.props;

    if (fixedHeight > -1) {
      return this.renderFixed();
    }

    const renderStatic = this.renderStatic;
    const {height} = this.state;
    const currentStringHeight = parseFloat(height).toFixed(1);

    if (height > -1 && renderStatic) {
      this.renderStatic = false;
    }

    // Cache Content so it is not re-rendered on each animation step
    const content = this.renderHeightReporter();

    const skipAnimation = this.height === (isOpened ?
        Math.max(0, parseFloat(height)).toFixed(1) : '0.0');
    console.log('Collapse.js:122    skip animation', skipAnimation, Math.max(0, parseFloat(height)).toFixed(1), this.height);

    if (renderStatic || skipAnimation) {
      const newStyle = {overflow: 'hidden', height: isOpened ? 'auto' : 0};

      if (!isOpened && height > -1) {
        if (!keepCollapsedContent) {
          return null;
        }
        return (
          <div style={{height: 0, overflow: 'hidden', ...style}} {...props}>
            {content}
          </div>
        );
      }

      return <div style={{...newStyle, ...style}} {...props}>{content}</div>;
    }

    console.log('Collapse.js:128    is opened', isOpened, height);
    console.log('Collapse.js:138    ', this.height, Math.max(0, parseFloat(height)).toFixed(1));

    return (
      <Motion
        defaultStyle={{height: 0}}
//        defaultStyle={{height: isOpened ? 0 : Math.max(0, height)}}
        style={{height: spring(isOpened ? Math.max(0, height) : 0, springConfig)}}>
        {st => {
          this.height = stringHeight(st.height);

          // TODO: this should be done using onEnd from ReactMotion, which is not yet implemented
          // See https://github.com/chenglou/react-motion/issues/235
          if (!isOpened && this.height === '0.0') {
            if (!keepCollapsedContent) {
              return null;
            }
            return (
              <div style={{height: 0, overflow: 'hidden', ...style}} {...props}>
                {content}
              </div>
            );
          }

          const newStyle = (isOpened && this.height === currentStringHeight) ? {height: 'auto'} : {
            height: st.height, overflow: 'hidden'
          };

          return <div style={{...newStyle, ...style}} {...props}>{content}</div>;
        }}
      </Motion>
    );
  }
});


export default Collapse;
