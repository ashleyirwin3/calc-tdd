const { assert: {isNumber} } = require('chai')
const subtract = require('../lib/subtract')

describe('subtract', () => {
  it('should return a number', () => {
    isNumber(subtract())
  })
})
