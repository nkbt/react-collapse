import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';


const HeightReporter = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onHeightReady: React.PropTypes.func.isRequired
  },


  componentDidMount() {
    this.height = this.refs.wrapper.clientHeight;
    if (this.height > 0) {
      return this.props.onHeightReady(this.height);
    }
  },


  shouldComponentUpdate,


  componentDidUpdate() {
    if (this.refs.wrapper.clientHeight > 0 && this.refs.wrapper.clientHeight !== this.height) {
      this.height = this.refs.wrapper.clientHeight;
      return this.props.onHeightReady(this.height);
    }
  },


  render() {
    const {onHeightReady, children, ...props} = this.props;

    return (
      <div style={{height: 0, overflow: 'hidden'}}>
        <div ref="wrapper" {...props}>
          {children}
        </div>
      </div>
    );
  }
});


export default HeightReporter;
