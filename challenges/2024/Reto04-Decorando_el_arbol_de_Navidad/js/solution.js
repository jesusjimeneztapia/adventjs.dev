function createXmasTree(height, ornament) {
  const size = height * 2 - 1
  let result = ''
  let i = 1
  for (i; i <= height; ++i) {
    const large = i + (i - 1)
    const side = (size - large) / 2
    result += `${'_'.repeat(side)}${ornament.repeat(large)}${'_'.repeat(side)}\n`
  }
  const trunk = `${'_'.repeat((size - 1) / 2)}#${'_'.repeat((size - 1) / 2)}`
  return `${result}${[trunk, trunk].join('\n')}`
}

export { createXmasTree }
