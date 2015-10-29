import React, {View} from 'react-native';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';

const HeightReporter = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    onHeightReady: React.PropTypes.func.isRequired
  },


  shouldComponentUpdate,


  render() {
    const {
      onHeightReady,
      children,
      ...props
    } = this.props;

    return (
      <View style={{height: 0, overflow: 'hidden'}}>
        <View {...props} onLayout={({nativeEvent: {layout: {height}}}) => {
          if (this.height === null || (height > 0 && height !== this.height)) {
            this.height = height;
            this.props.onHeightReady(this.height);
          }
        }}>
          {children}
        </View>
      </View>
    );
  }
});


export default HeightReporter;
