'use strict'

const test = require('tape')
const randomPropValue = require('./index')

test('should pick a value from array of object property values', function(t) {

  const obj = {"a": 1, "b": "two", "c": 3}
  const keys = Object.keys(obj)
  const values = [];

  // get all property values of obj and store it in values
  keys.map((k) => values.push(obj[k]))

  t.plan(1)
  // returns true if actual result is in objVals
  t.equal(true, values.indexOf(randomPropValue(obj)) > -1, "test 1")
  t.end()
})
