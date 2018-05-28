import FilterLimit from '@/filter/filter-limit'

describe('filter-limit.js', () => {
  it('should render limit content', () => {
    let input = 'sample'
    let result = FilterLimit()
    expect(result.length).toEqual(0)

    result = FilterLimit(input)
    expect(result.length).toEqual(6)

    result = FilterLimit(input, 2)
    expect(result.length).toEqual(2)

    result = FilterLimit(input, 4, 'nw')
    expect(result.length).toEqual(6)
    expect(result.indexOf('nw')).toBeGreaterThan(0)
  })
})
