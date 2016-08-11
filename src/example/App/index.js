import React from 'react';
import VariableText from './VariableText';
import VariableHeight from './VariableHeight';
import InitiallyOpened from './InitiallyOpened';
import SpringConfig from './SpringConfig';
import Nested from './Nested';
import Hooks from './Hooks';
import {name} from '../../../package.json';


import css from './App.css';


const App = React.createClass({
  render() {
    return (
      <div className={css.app}>

        <h1>{name}</h1>

        <section className={css.section}>
          <h2>1. Variable text</h2>
          <VariableText />
        </section>

        <section className={css.section}>
          <h2>2. Variable text (initially opened)</h2>
          <VariableText isOpened={true} />
        </section>

        <section className={css.section}>
          <h2>3. Variable height content</h2>
          <VariableHeight />
        </section>

        <section className={css.section}>
          <h2>4. Initially opened</h2>
          <InitiallyOpened />
        </section>

        <section className={css.section}>
          <h2>5. Custom spring configuration</h2>
          <SpringConfig />
        </section>

        <section className={css.section}>
          <h2>6. Nested Collapse</h2>
          <Nested />
        </section>

        <section className={css.section}>
          <h2>7. Hooks</h2>
          <Hooks />
        </section>

      </div>
    );
  }
});


export default App;
