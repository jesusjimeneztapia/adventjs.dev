function createFrame(names: string[]): string {
  const max = Math.max(...names.map((name) => name.length))
  const frame = '*'
  const line = frame.repeat(max + 4)
  let result = line
  for (const name of names) {
    const spaces = max - name.length
    result += `\n* ${name}${' '.repeat(spaces)} *`
  }
  return `${result}\n${line}`
}

export { createFrame }
