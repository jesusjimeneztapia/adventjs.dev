import { describe, expect, it } from 'vitest'
import { createFrame } from './solution'

describe('TypeScript | Reto #2: 🖼️ Enmarcando nombres - 🟩 Fácil', () => {
  it('Test #1: return type', () => {
    const createdFrame = createFrame([''])
    expect(createdFrame).toBeTypeOf('string')
  })

  it('Test #2: createFrame(["midu"])', () => {
    const createdFrame = createFrame(['midu'])
    const expected = '********\n* midu *\n********'
    expect(createdFrame).toEqual(expected)
  })

  it('Test #3: createFrame(["midu", "madeval", "educalvolpz"])', () => {
    const createdFrame = createFrame(['midu', 'madeval', 'educalvolpz'])
    const expected =
      '***************\n' +
      '* midu        *\n' +
      '* madeval     *\n' +
      '* educalvolpz *\n' +
      '***************'
    expect(createdFrame).toEqual(expected)
  })

  it('Test #4: createFrame(["a", "bb", "ccc"])', () => {
    const createdFrame = createFrame(['a', 'bb', 'ccc'])
    const expected = '*******\n* a   *\n* bb  *\n* ccc *\n*******'
    expect(createdFrame).toEqual(expected)
  })

  it('Test #5: createFrame(["a", "bb", "ccc", "dddd"])', () => {
    const createdFrame = createFrame(['a', 'bb', 'ccc', 'dddd'])
    const expected = '********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********'
    expect(createdFrame).toEqual(expected)
  })

  it('Test #6: createFrame(["midu", "madeval", "educalvolpz", "midu"])', () => {
    const createdFrame = createFrame(['midu', 'madeval', 'educalvolpz', 'midu'])
    const expected =
      '***************\n' +
      '* midu        *\n' +
      '* madeval     *\n' +
      '* educalvolpz *\n' +
      '* midu        *\n' +
      '***************'
    expect(createdFrame).toEqual(expected)
  })
})
