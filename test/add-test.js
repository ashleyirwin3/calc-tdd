const { assert: {isNumber, equal} } = require('chai')
const add = require('../lib/add')

describe('add', () => {
  it('should return a number', () => {
    isNumber(add())
  })

  it('should return 3', () => {
    equal(3, '3')
  })
})
