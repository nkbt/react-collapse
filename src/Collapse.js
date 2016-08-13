import React from 'react';
import {Motion, spring} from 'react-motion';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const SPRING_PRECISION = 1;


const WAIT = 'WAIT';
const RESIZE = 'RESIZE';
const REST = 'REST';
const STABLE = 'STABLE';


const noop = () => null;
const css = {
  collapse: 'collapse',
  content: 'content'
};


export const Collapse = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    springConfig: React.PropTypes.objectOf(React.PropTypes.number),

    theme: React.PropTypes.objectOf(React.PropTypes.string),
    style: React.PropTypes.object,

    onRest: React.PropTypes.func,
    onHeightReady: React.PropTypes.func,

    children: React.PropTypes.node.isRequired
  },


  getDefaultProps() {
    return {
      style: {},
      theme: css,
      onRest: noop,
      onHeightReady: noop
    };
  },


  getInitialState() {
    return {action: STABLE, from: 0, to: 0};
  },


  componentDidMount() {
    const {isOpened, onRest} = this.props;
    if (isOpened) {
      const to = this.content.clientHeight;
      this.setState({action: STABLE, from: to, to});
    }
    onRest();
  },


  componentWillReceiveProps(nextProps) {
    if (this.state.action === STABLE && (nextProps.isOpened || this.props.isOpened)) {
      this.setState({action: WAIT});
    }
  },


  shouldComponentUpdate,


  componentDidUpdate(_, prevState) {
    const {isOpened, onRest, onHeightReady} = this.props;

    if (this.state.action === STABLE) {
      onRest();
      return;
    }

    if (prevState.to !== this.state.to) {
      onHeightReady(this.state.to);
    }

    const from = this.wrapper.clientHeight;
    const to = isOpened ? this.content.clientHeight : 0;

    if (from !== to) {
      this.setState({action: RESIZE, from, to});
      return;
    }

    if (this.state.action === REST) {
      this.setState({action: STABLE, from, to});
    }
  },


  componentWillUnmount() {
    cancelAnimationFrame(this.raf);
  },


  onContentRef(content) {
    this.content = content;
  },


  onWrapperRef(wrapper) {
    this.wrapper = wrapper;
  },


  onRest() {
    this.raf = requestAnimationFrame(() => this.setState({action: REST}));
  },


  render() {
    const {
      isOpened: _isOpened,
      springConfig,
      theme,
      style,
      onRest: _onRest,
      onHeightReady: _onHeightReady,
      children,
      ...props
    } = this.props;

    const isAutosize = this.state.action === STABLE && this.state.to;
    const extraStyle = {};
    if (isAutosize) {
      extraStyle.height = 'auto';
    } else {
      extraStyle.overflow = 'hidden';
      if (this.state.action === WAIT && !this.state.to) {
        extraStyle.height = 0;
        extraStyle.overflow = 'hidden';
      }
    }


    const motionProps = this.state.action === STABLE ? {
      // When waiting, instantly jump to the position
      defaultStyle: {height: this.state.to},
      style: {height: this.state.to}
    } : {
      // Otherwise, animate
      defaultStyle: {height: this.state.from},
      style: {height: spring(this.state.to, {precision: SPRING_PRECISION, ...springConfig})}
    };


    return (
      <Motion {...motionProps} onRest={this.onRest}>
        {({height}) => (
          <div
            ref={this.onWrapperRef}
            className={theme.collapse}
            style={{
              ...extraStyle,
              ...(isAutosize ? {} : {height: Math.max(0, height)}),
              ...style
            }}
            {...props}>
            <div ref={this.onContentRef} className={theme.content}>{children}</div>
          </div>
        )}
      </Motion>
    );
  }
});
