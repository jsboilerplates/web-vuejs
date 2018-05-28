import FilterUppercase from '@/filter/filter-uppercase'

describe('filter-uppercase.js', () => {
  it('should render uppercase content', () => {
    let input = 'sample'
    let result = FilterUppercase(input)
    expect(result).toEqual(input.toUpperCase())
  })
})
