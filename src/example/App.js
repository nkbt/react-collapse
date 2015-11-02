import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import VariableText from './VariableText';
import VariableHeight from './VariableHeight';
import FixedHeight from './FixedHeight';
import SpringConfig from './SpringConfig';
import Nested from './Nested';


const style = {
  container: {
    margin: 20
  },
  section: {
    marginTop: 50
  }
};


const App = React.createClass({
  shouldComponentUpdate,


  render() {
    return (
      <div style={style.container}>

        <section style={style.section}>
          <h2>Example 1. Variable text</h2>
          <VariableText />
        </section>

        <section style={style.section}>
          <h2>Example 2. Variable height content</h2>
          <VariableHeight />
        </section>

        <section style={style.section}>
          <h2>Example 3. Fixed Collapse height</h2>
          <FixedHeight />
        </section>

        <section style={style.section}>
          <h2>Example 4. Custom spring configuration</h2>
          <SpringConfig />
        </section>

        <section style={style.section}>
          <h2>Example 5. Nested Collapse</h2>
          <Nested />
        </section>

      </div>
    );
  }
});


export default App;
