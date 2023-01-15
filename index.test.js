const { getGiftsToRefill } = require('./index')

test('Test #02', () => {
  expect(getGiftsToRefill(['bike', 'car', 'bike', 'bike'], ['car', 'bike', 'doll', 'car'], ['bike', 'pc', 'pc'])).toStrictEqual(['doll', 'pc'])
})

test('Test #03', () => {
  expect(getGiftsToRefill([], [], [])).toStrictEqual([])
})

test('Test #04', () => {
  expect(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])).toStrictEqual([])
})

test('Test #05', () => {
  expect(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])).toStrictEqual(['a', 'b', 'c'])
})

test('Test #06', () => {
  expect(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f'])
})
