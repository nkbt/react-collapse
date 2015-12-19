import React from 'react';
import {shouldComponentUpdate} from 'react-addons-pure-render-mixin';
import VariableText from './VariableText';
import VariableHeight from './VariableHeight';
import InitiallyOpened from './InitiallyOpened';
import FixedHeight from './FixedHeight';
import SpringConfig from './SpringConfig';
import Nested from './Nested';


const style = {
  container: {
    padding: 20
  },
  section: {
    paddingTop: 30
  }
};


const App = React.createClass({
  shouldComponentUpdate,


  render() {
    return (
      <div style={style.container}>

        <h1>ReactCollapse</h1>

        <section style={style.section}>
          <h2>Example 1. Variable text</h2>
          <VariableText />
        </section>

        <section style={style.section}>
          <h2>Example 2. Variable height content</h2>
          <VariableHeight />
        </section>

        <section style={style.section}>
          <h2>Example 3. Initially opened</h2>
          <InitiallyOpened />
        </section>

        <section style={style.section}>
          <h2>Example 4. Fixed Collapse height</h2>
          <FixedHeight />
        </section>

        <section style={style.section}>
          <h2>Example 5. Custom spring configuration</h2>
          <SpringConfig />
        </section>

        <section style={style.section}>
          <h2>Example 6. Nested Collapse</h2>
          <Nested />
        </section>

      </div>
    );
  }
});


export default App;
