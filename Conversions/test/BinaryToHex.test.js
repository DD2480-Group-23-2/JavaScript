import binaryToHex from '../BinaryToHex'

describe('BinaryToHex', () => {
  it('expects to return correct hexadecimal value', () => {
    expect(binaryToHex('1000')).toBe('8')
  })

  it('expects to return correct hexadecimal value for more than one hex digit', () => {
    expect(binaryToHex('11101010')).toBe('EA')
  })

  it('expects to return correct hexadecimal value for padding-required binary', () => {
    expect(binaryToHex('1001101')).toBe('4D')
  })

  it('expects to return correct hexadecimal value, matching (num).toString(16)', () => {
    expect(binaryToHex('1111')).toBe(
      parseInt('1111', 2).toString(16).toUpperCase()
    )
  })

  it('expects to return correct hexadecimal value for letters', () => {
    expect(binaryToHex('101010111100110111101111')).toBe('ABCDEF')
  })

  it('expects to return correct hexadecimal value for numbers', () => {
    expect(binaryToHex('1001000110100010101100111100010010000')).toBe(
      '1234567890'
    )
  })
})
