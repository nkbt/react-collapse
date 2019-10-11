import React from 'react';
import {VariableText} from './VariableText';
import {VariableHeight} from './VariableHeight';
import {InitiallyOpened} from './InitiallyOpened';
import {Nested} from './Nested';
import {Hooks} from './Hooks';
import {AutoUnmount} from './AutoUnmount';
import {ForceInitialAnimation} from './ForceInitialAnimation';

import {Issue59} from './Issue59';
import {Issue66} from './Issue66';
import {Issue163} from './Issue163';


export const App = () => (
  <div className="app">

    <h1>@nkbt/react-collapse</h1>
    <section className="section">
      <h2>Variable text</h2>
      <VariableText />
    </section>

    <section className="section">
      <h2>Variable text (initially opened)</h2>
      <VariableText isOpened />
    </section>

    <section className="section">
      <h2>Variable height content</h2>
      <VariableHeight />
    </section>

    <section className="section">
      <h2>Initially opened</h2>
      <InitiallyOpened />
    </section>

    <section className="section">
      <h2>Force initial animation</h2>
      <ForceInitialAnimation />
    </section>

    <section className="section">
      <h2>Nested Collapse</h2>
      <Nested />
    </section>

    <section className="section">
      <h2>Hooks</h2>
      <Hooks />
    </section>

    <section className="section">
      <h2>Auto-unmount when closed</h2>
      <p>closed by default</p>
      <AutoUnmount isOpened={false} />
      <section className="section">
        <p>opened by default</p>
        <AutoUnmount isOpened />
      </section>
    </section>

    <h1>Edge cases from issues</h1>

    <section className="section">
      <h2>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nkbt/react-collapse/issues/59">Issue 59</a>
        &nbsp;Accordion component
      </h2>
      <Issue59 />
    </section>

    <section className="section">
      <h2>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nkbt/react-collapse/issues/66">Issue 66</a>
        &nbsp;Unnecessary unmounts
      </h2>
      <p>Opened by default</p>
      <Issue66 id="Issue66-opened" isOpened />
      <p>Closed by default</p>
      <Issue66 id="Issue66-closed" isOpened={false} />
    </section>

    <section className="section" style={{minHeight: 400}}>
      <h2>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/nkbt/react-collapse/issues/163">Issue 163</a>
        &nbsp;Overflow in collapse
      </h2>
      <Issue163 />
    </section>
  </div>
);
