import React from 'react';
import {Motion, spring} from 'react-motion';
import HeightReporter from 'react-height';


const PRECISION = 0.5;


const stringHeight = height => Math.max(0, parseFloat(height)).toFixed(1);


const Collapse = React.createClass({
  propTypes: {
    isOpened: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node.isRequired,
    style: React.PropTypes.object, // eslint-disable-line react/forbid-prop-types
    springConfig: React.PropTypes.objectOf(React.PropTypes.number),
    keepCollapsedContent: React.PropTypes.bool,
    onRest: React.PropTypes.func,
    onHeightReady: React.PropTypes.func
  },


  getDefaultProps() {
    return {
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
    this.dirtyHeight = true;
  },


  componentWillReceiveProps({isOpened}) {
    this.dirtyHeight = isOpened !== this.props.isOpened;
  },


  shouldComponentUpdate(props, state) {
    return this.state.isOpened !== state.isOpened ||
      this.state.height !== state.height ||
      this.props.children !== props.children ||
      this.props.style !== props.style ||
      this.props.springConfig !== props.springConfig ||
      this.props.keepCollapsedContent !== props.keepCollapsedContent ||
      this.props.onRest !== props.onRest ||
      this.props.onHeightReady !== props.onHeightReady;
  },


  componentDidUpdate({isOpened}) {
    if (isOpened !== this.props.isOpened) {
      const report = this.props.isOpened ? this.state.height : 0;

      this.props.onHeightReady(report);
    }
  },


  onHeightReady(height) {
    const {isOpened, onHeightReady} = this.props;

    const isOpenedChangedState = {isOpenedChanged: this.dirtyHeight};
    const heightState = {height: isOpened || !this.renderStatic ? height : 0};

    this.dirtyHeight = false;

    if (this.renderStatic && isOpened) {
      this.height = stringHeight(height);
    }

    this.setState({...isOpenedChangedState, ...heightState});

    const reportHeight = isOpened ? height : 0;

    if (this.state.height !== reportHeight) {
      onHeightReady(reportHeight);
    }
  },


  getMotionHeight(height) {
    const {isOpened, springConfig} = this.props;
    const {isOpenedChanged} = this.state;

    const newHeight = isOpened ? stringHeight(height) : stringHeight(0);

    // No need to animate if content is closed and it was closed previously
    // Also no need to animate if height did not change
    const skipAnimation = !isOpenedChanged && !isOpened || this.height === newHeight;

    const springHeight = spring(isOpened ? Math.max(0, height) : 0, {
      precision: PRECISION,
      ...springConfig
    });
    const instantHeight = isOpened ? Math.max(0, height) : 0;

    return skipAnimation ? instantHeight : springHeight;
  },


  render() {
    const {
      springConfig: _springConfig,
      onHeightReady: _onHeightReady,
      isOpened,
      style,
      children,
      keepCollapsedContent,
      onRest,
      ...props
    } = this.props;

    const renderStatic = this.renderStatic;
    const {height} = this.state;
    const currentStringHeight = stringHeight(height);

    if (height > -1 && renderStatic) {
      this.renderStatic = false;
    }

    // Cache Content so it is not re-rendered on each animation step
    const content = (
      <HeightReporter
        dirty={this.dirtyHeight}
        onHeightReady={this.onHeightReady}>
        {children}
      </HeightReporter>
    );

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

      // <Motion> to prevent loosing input after causing this component to re-render
      return (
        <Motion
          style={{height: Math.max(0, height)}}
          onRest={onRest}>
          {() =>
            <div style={{...newStyle, ...style}} {...props}>{content}</div>
          }
        </Motion>
      );
    }

    return (
      <Motion
        onRest={onRest}
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
              <div style={{height: 0, overflow: 'hidden', ...style}} {...props}>{content}</div>
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
