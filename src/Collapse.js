import React from 'react';
import {Motion, spring} from 'react-motion';
import {shouldComponentUpdate} from 'react/lib/ReactComponentWithPureRenderMixin';


const SPRING_PRECISION = 1;


const WAITING = 'WAITING';
const RESIZING = 'RESIZING';
const RESTING = 'RESTING';
const IDLING = 'IDLING';


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
    return {currentState: IDLING, from: 0, to: 0};
  },


  componentDidMount() {
    const {isOpened, onRest} = this.props;
    if (isOpened) {
      const to = this.content.clientHeight;
      this.setState({currentState: IDLING, from: to, to});
    }
    onRest();
  },


  componentWillReceiveProps(nextProps) {
    if (this.state.currentState === IDLING && (nextProps.isOpened || this.props.isOpened)) {
      this.setState({currentState: WAITING});
    }
  },


  shouldComponentUpdate,


  componentDidUpdate(_, prevState) {
    const {isOpened, onRest, onHeightReady} = this.props;

    if (this.state.currentState === IDLING) {
      onRest();
      return;
    }

    if (prevState.to !== this.state.to) {
      onHeightReady(this.state.to);
    }

    const from = this.wrapper.clientHeight;
    const to = isOpened ? this.content.clientHeight : 0;

    if (from !== to) {
      this.setState({currentState: RESIZING, from, to});
      return;
    }

    if (this.state.currentState === RESTING) {
      this.setState({currentState: IDLING, from, to});
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
    this.raf = requestAnimationFrame(() => this.setState({currentState: RESTING}));
  },


  isHeightAuto() {
    return this.state.currentState === IDLING && this.state.to;
  },


  getExtraStyles() {
    if (this.isHeightAuto()) {
      return {height: 'auto'};
    }

    const extraStyle = {overflow: 'hidden'};
    if (this.state.currentState === WAITING && !this.state.to) {
      return {...extraStyle, height: 0};
    }

    return extraStyle;
  },


  getMotionProps() {
    const {springConfig} = this.props;

    return this.state.currentState === IDLING ? {
      // When completely stable, instantly jump to the position
      defaultStyle: {height: this.state.to},
      style: {height: this.state.to}
    } : {
      // Otherwise, animate
      defaultStyle: {height: this.state.from},
      style: {height: spring(this.state.to, {precision: SPRING_PRECISION, ...springConfig})}
    };
  },


  renderContent({height}) {
    const {
      isOpened: _isOpened,
      springConfig: _springConfig,
      theme,
      style,
      onRest: _onRest,
      onHeightReady: _onHeightReady,
      children,
      ...props
    } = this.props;

    return (
      <div
        ref={this.onWrapperRef}
        className={theme.collapse}
        style={{
          ...this.getExtraStyles(),
          ...(this.isHeightAuto() ? {} : {height: Math.max(0, height)}),
          ...style
        }}
        {...props}>
        <div ref={this.onContentRef} className={theme.content}>{children}</div>
      </div>
    );
  },


  render() {
    return (
      <Motion
        {...this.getMotionProps()}
        onRest={this.onRest}
        children={this.renderContent} />
    );
  }
});
