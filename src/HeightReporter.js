import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';


const HeightReporter = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onHeightReady: React.PropTypes.func.isRequired
  },


  componentDidMount() {
    this.height = this.refs.wrapper.offsetHeight;
    if (this.height > 0) {
      return this.props.onHeightReady(this.height);
    }
  },


  shouldComponentUpdate,


  componentDidUpdate() {
    if (this.refs.wrapper.offsetHeight > 0 && this.refs.wrapper.offsetHeight !== this.height) {
      this.height = this.refs.wrapper.offsetHeight;
      return this.props.onHeightReady(this.height);
    }
  },


  render() {
    return (
      <div style={{height: 0, overflow: 'hidden'}}>
        <div ref="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
});


export default HeightReporter;
