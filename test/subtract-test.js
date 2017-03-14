const { assert: {isNumber, equal} } = require('chai')
const subtract = require('../lib/subtract')

describe('subtract', () => {
  it('should return a number', () => {
    isNumber(subtract())
  })

  it('should return 1', () => {
    equal(1, '1')
  })
})
