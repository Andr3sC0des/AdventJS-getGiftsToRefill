function getGiftsToRefill (a1, a2, a3) {
  let array = []
  const result = []
  array = array.concat([...new Set(a1)], [...new Set(a2)], [...new Set(a3)])

  const count = array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})

  for (const i in count) {
    if (count[i] === 1) {
      result.push(i)
    }
  }
  return result
}

module.exports = { getGiftsToRefill }
