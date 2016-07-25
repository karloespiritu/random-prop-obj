# random-prop-obj [![Build Status](https://travis-ci.org/karloespiritu/random-prop-obj.svg?branch=master)](https://travis-ci.org/karloespiritu/random-prop-obj)

Pick a random property value from an object

## Install

```js
npm install --save random-prop-obj
```

## Usage

```js
const randomProp = require('random-prop-obj')
const obj = {a: 1, b: 'two', c: 3, d: 4}

randomProp(obj)
// => two

randomProp(obj)
// => 3

```