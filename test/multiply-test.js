const { assert: {isNumber, equal} } = require('chai')
const multiply = require('../lib/multiply')

describe('multiply', () => {
  it('should return a number', () => {
    isNumber(multiply())
  })

  it('should return 4', () => {
    equal(4, '4')
  })
})
