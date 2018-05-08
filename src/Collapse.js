import React from 'react';
import PropTypes from 'prop-types';


export class Collapse extends React.Component {
  static propTypes = {
    theme: PropTypes.shape({
      container: PropTypes.string,
      content: PropTypes.string,
      iframe: PropTypes.string
    }),
    isOpened: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  };


  static defaultProps = {
    theme: PropTypes.shape({
      container: 'ReactCollapse--container',
      content: 'ReactCollapse--content',
      sensor: 'ReactCollapse--sensor'
    })
  };


  state = {height: 0};


  componentDidMount() {
    if (this.sensor) {
      this.sensor.contentWindow.addEventListener(`resize`, this.onResize, false);
      this.raf = window.requestAnimationFrame(this.onResize);
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    const {theme, isOpened, children} = this.props;
    const {height} = this.state;

    return children !== nextProps.children
      || isOpened !== nextProps.isOpened
      || height !== nextState.height
      || Object.keys(theme).some(c => theme[c] !== nextProps.theme[c]);
  }


  componentWillUnmount() {
    if (this.raf !== null) {
      window.cancelAnimationFrame(this.raf);
      this.raf = null;
    }
    if (this.sensor) {
      this.sensor.contentWindow.removeEventListener(`resize`, this.onResize, false);
      this.sensor = null;
    }
  }


  onResize = () => {
    if (this.sensor) {
      const {innerHeight} = this.sensor.contentWindow;
      const height = Math.ceil(innerHeight);
      this.setState({height});
    }
  };


  onSensorRef = ref => {
    this.sensor = ref;
  };


  raf = null;
  sensor = null;


  render() {
    const {isOpened, theme, children} = this.props;
    const {height} = this.state;

    return (
      <div
        style={{
          height: isOpened ? height : 0,
          overflow: 'hidden',
          transition: 'height 200ms'
        }}
        className={theme.container}>
        <div
          style={{
            position: 'relative'
          }}
          className={theme.content}>
          <iframe
            ref={this.onSensorRef}
            tabIndex="-1"
            title="Element resize sensor"
            style={{
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              border: 'none',
              background: 'transparent',
              pointerEvents: 'none',
              zIndex: -1
            }}
            className={theme.sensor} />
          {children}
        </div>
      </div>
    );
  }
}
