import React from 'react';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';
import {Motion, spring} from 'react-motion';
import HeightReporter from 'react-height';


const stringHeight = height => Math.max(0, parseFloat(height)).toFixed(1);


const Collapse = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    fixedHeight: React.PropTypes.number,
    style: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
    springConfig: React.PropTypes.objectOf(React.PropTypes.number),
    keepCollapsedContent: React.PropTypes.bool,
    onHeightReady: React.PropTypes.func
  },


  getDefaultProps() {
    return {
      fixedHeight: -1,
      style: {},
      keepCollapsedContent: false,
      onHeightReady: () => {} // eslint-disable-line no-empty-function
    };
  },


  getInitialState() {
    return {height: -1, isOpenedChanged: false};
  },

  componentWillMount() {
    this.height = stringHeight(0);
    this.renderStatic = true;
  },


  componentWillReceiveProps({isOpened}) {
    this.setState({isOpenedChanged: isOpened !== this.props.isOpened});
  },

  shouldComponentUpdate,

  componentDidUpdate({isOpened}) {
    if (isOpened !== this.props.isOpened) {
      const report = this.props.isOpened ? this.state.height : 0;

      this.props.onHeightReady(report);
    }
  },

  onHeightReady(height) {
    const {isOpened, keepCollapsedContent} = this.props;

    if (this.renderStatic && isOpened) {
      this.height = stringHeight(height);
    }
    if (keepCollapsedContent) {
      this.setState({height});
    } else {
      this.setState({height: isOpened ? height : 0});
    }

    const reportHeight = this.props.isOpened ? height : 0;

    if (this.state.height !== reportHeight) {
      this.props.onHeightReady(reportHeight);
    }
  },


  getMotionHeight(height) {
    const {isOpened, springConfig} = this.props;
    const {isOpenedChanged} = this.state;

    const newHeight = isOpened ? Math.max(0, parseFloat(height)).toFixed(1) : stringHeight(0);

    // No need to animate if content is closed and it was closed previously
    // Also no need to animate if height did not change
    const skipAnimation = !isOpenedChanged && !isOpened || this.height === newHeight;

    const springHeight = spring(isOpened ? Math.max(0, height) : 0, springConfig);
    const instantHeight = isOpened ? Math.max(0, height) : 0;

    return skipAnimation ? instantHeight : springHeight;
  },


  renderFixed() {
    const {
      isOpened, style, children, fixedHeight, springConfig: _, keepCollapsedContent, ...props
    } = this.props;

    if (this.renderStatic) {
      this.renderStatic = false;

      const newStyle = isOpened ? {height: 'auto'} : {
        height: isOpened ? fixedHeight : 0, overflow: 'hidden'
      };

      if (!keepCollapsedContent && !isOpened) {
        return null;
      }
      this.height = stringHeight(fixedHeight);
      return <div style={{...newStyle, ...style}} {...props}>{children}</div>;
    }

    return (
      <Motion
        defaultStyle={{height: isOpened ? 0 : fixedHeight}}
        style={{height: this.getMotionHeight(fixedHeight)}}>
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


  render() {
    const {
      isOpened, style, children, fixedHeight, springConfig: _, keepCollapsedContent, ...props
    } = this.props;

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
    const content = <HeightReporter onHeightReady={this.onHeightReady}>{children}</HeightReporter>;

    if (renderStatic) {
      const newStyle = isOpened ? {height: 'auto'} : {overflow: 'hidden', height: 0};

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

    return (
      <Motion
        defaultStyle={{height: Math.max(0, height)}}
        style={{height: this.getMotionHeight(height)}}>
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

          const newStyle = isOpened && this.height === currentStringHeight ? {height: 'auto'} : {
            height: st.height, overflow: 'hidden'
          };

          return <div style={{...newStyle, ...style}} {...props}>{content}</div>;
        }}
      </Motion>
    );
  }
});


export default Collapse;
