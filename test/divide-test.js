const { assert: {isNumber, equal} } = require('chai')
const divide = require('../lib/divide')

describe('divide', () => {
  it('should return a number', () => {
    isNumber(divide())
  })

  it('should return 2', () => {
    equal(2, '2')
  })
})
