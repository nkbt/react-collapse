import React, {PureComponent} from 'react';
import VariableText from './VariableText';
import VariableHeight from './VariableHeight';
import InitiallyOpened from './InitiallyOpened';
import FixedHeight from './FixedHeight';
import SpringConfig from './SpringConfig';
import Nested from './Nested';
import Hooks from './Hooks';
import {name} from '../../../package.json';


const style = {
  container: {
    padding: 20
  },
  section: {
    paddingTop: 30
  }
};


export default class App extends PureComponent {
  render() {
    return (
      <div style={style.container}>

        <h1>{name}</h1>

        <section style={style.section}>
          <h2>Example 1. Variable text</h2>
          <VariableText />
        </section>

        <section style={style.section}>
          <h2>Example 1.1. Variable text (initially opened)</h2>
          <VariableText isOpened={true} />
        </section>

        <section style={style.section}>
          <h2>Example 2. Variable height content</h2>
          <VariableHeight keepCollapsedContent={true} />
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

        <section style={style.section}>
          <h2>Example 7. Hooks</h2>
          <Hooks />
        </section>

      </div>
    );
  }
}
