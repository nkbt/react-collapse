# react-collapse

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nkbt/help)

[![Circle CI](https://circleci.com/gh/nkbt/react-collapse.svg?style=svg)](https://circleci.com/gh/nkbt/react-collapse)
[![Coverage Status](https://coveralls.io/repos/nkbt/react-collapse/badge.svg?branch=master)](https://coveralls.io/r/nkbt/react-collapse?branch=master)
[![Dependency Status](https://david-dm.org/nkbt/react-collapse.svg)](https://david-dm.org/nkbt/react-collapse)
[![devDependency Status](https://david-dm.org/nkbt/react-collapse/dev-status.svg)](https://david-dm.org/nkbt/react-collapse#info=devDependencies)

Component-wrapper for collapse animation with react-motion for elements with variable (and dynamic) height


![React Collapse](src/example/react-collapse.gif)


## Installation

### NPM

```sh
npm install --save react-collapse
```


### Bower:
```sh
bower install --save https://npmcdn.com/react-collapse/build/react-collapse.js
```

or in `bower.json`

```json
{
  "dependencies": {
    "react-collapse": "https://npmcdn.com/react-collapse/build/react-collapse.js"
  }
}
```

then include as
```html
<script src="bower_components/react-collapse/index.js"></script>
```


### 1998 Script Tag:
```html
<script src="https://npmcdn.com/react-collapse/build/react-collapse.js"></script>
(Module exposed as `ReactMyComponent`)
```


## Demo

[http://nkbt.github.io/react-collapse/example](http://nkbt.github.io/react-collapse/example)

## Codepen demo

[http://codepen.io/nkbt/pen/MarzEg](http://codepen.io/nkbt/pen/MarzEg?editors=101)

## Usage

```js
<Collapse isOpened={true || false}>
  <div>Random content</div>
</Collapse>
```


## Options


#### `isOpened`: PropTypes.boolean.isRequired

Expands or collapses content.


#### `children`: PropTypes.node.isRequired

One or multiple children with static, variable or dynamic height.

```js
<Collapse isOpened={true}>
  <p>Paragraph of text</p>
  <p>Another paragraph is also OK</p>
  <p>Images and any other content are ok too</p>
  <img src="nyancat.gif" />
</Collapse>
```


#### `fixedHeight`: PropTypes.number

If content's height is known ahead it is possible to bypass the process of content height calculation by passing optional `fixedHeight` prop with number of pixels.

```js
<Collapse isOpened={true} fixedHeight={100}>
  <div>Animated container will always expand to 100px height</div>
</Collapse>
```


#### `springConfig`: React.PropTypes.arrayOf(React.PropTypes.number)

Custom config `[stiffness, damping]` passed to the spring function (see https://github.com/chenglou/react-motion#spring-number---stiffness-damping---configurationobject)

```js
import {presets} from 'react-motion';

<Collapse isOpened={true} springConfig={presets.wobbly}>
  <div>Wobbly animated container</div>
</Collapse>
```

```js
<Collapse isOpened={true} springConfig={[100, 20]}>
  <div>Customly animated container</div>
</Collapse>
```

#### `keepCollapsedContent`: React.PropTypes.bool (default: `false`)

By default ReactCollapse destroys content of collapsed element. setting `keepCollapsedContent` to `true` allows to keep content. ReactCollapse renders container with `height: 0` and `overflow: hidden` (with all the content untouched) when closed instead of destroying it. See #18 for details.


#### Pass-through props

All other props are applied to a container that is being resized. So it is possible to pass `style` or `className`, for example.

```js
<Collapse isOpened={true}
  style={{width: 200, border: '1px solid red'}}
  className="collapse">

  <div>
    Animated container has red border, 200px width
    and has `class="collapse"`
  </div>
</Collapse>
```


## Behaviour notes

- initially opened Collapse elements will be statically rendered with no animation (see #19)
- it is possible to override `overflow` and `height` styles for Collapse (see #16), and ReactCollapse may behave unexpectedly. Do it only when you definitely know you need it, otherwise, never override `overflow` and `height` styles.


## Development and testing

To run example covering all `ReactCollapse` features, use `npm start`, which will compile `src/example/Example.js`

```bash
git clone git@github.com:nkbt/react-collapse.git
cd react-collapse
npm install
npm start

# then
open http://localhost:8080
```

## Tests

```bash
npm test

# to run tests in watch mode for development
npm run test:dev

# to generate test coverage (./reports/coverage)
npm run test:cov
```

## License

MIT
