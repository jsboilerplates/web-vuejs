import FilterUppercase from './UppercaseFilter'

describe('UppercaseFilter.js', () => {
  it('should render uppercase content', () => {
    let input = 'sample'
    let result = FilterUppercase(input)
    expect(result).toEqual(input.toUpperCase())
  })
})
