import { maxProductOfThree } from '../MaxProductOfThree'

describe('MaxProductOfThree', () => {
  it('expects to throw error for array with only 2 numbers', () => {
    expect(() => {
      maxProductOfThree([1, 3])
    }).toThrow('Triplet cannot exist with the given array')
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, 6, 5, 3, 1, -10])).toBe(300)
  })

  it('expects to return 300 as the maximum product', () => {
    expect(maxProductOfThree([10, -6, 5, 3, 1, -10])).toBe(600)
  })

  // max product works no matter the order
  it('expects to return 24 as the maximum product', () => {
    expect(maxProductOfThree([-1, 2, 3, 4])).toBe(24)
  })

  it('expects to return 24 as the maximum product', () => {
    expect(maxProductOfThree([-1, 4, 3, 2])).toBe(24)
  })
})
