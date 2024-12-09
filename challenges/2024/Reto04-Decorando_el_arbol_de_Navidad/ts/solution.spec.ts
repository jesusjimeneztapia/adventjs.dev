import { describe, expect, it } from 'vitest'
import { createXmasTree } from './solution'

describe('TypeScript | Reto #4: 🎄 Decorando el árbol de Navidad - 🟨 Medio', () => {
  it('Test #1: return type', () => {
    const createdXmasTree = createXmasTree(1, '*')
    expect(createdXmasTree).toBeTypeOf('string')
  })

  it('Test #2: createXmasTree(3, "*")', () => {
    const createdXmasTree = createXmasTree(3, '*')
    const expected = '__*__\n_***_\n*****\n__#__\n__#__'
    expect(createdXmasTree).toEqual(expected)
  })

  it('Test #3: createXmasTree(5, "+")', () => {
    const createdXmasTree = createXmasTree(5, '+')
    const expected =
      '____+____\n' +
      '___+++___\n' +
      '__+++++__\n' +
      '_+++++++_\n' +
      '+++++++++\n' +
      '____#____\n' +
      '____#____'
    expect(createdXmasTree).toEqual(expected)
  })

  it('Test #4: createXmasTree(6, "@")', () => {
    const createdXmasTree = createXmasTree(6, '@')
    const expected =
      '_____@_____\n' +
      '____@@@____\n' +
      '___@@@@@___\n' +
      '__@@@@@@@__\n' +
      '_@@@@@@@@@_\n' +
      '@@@@@@@@@@@\n' +
      '_____#_____\n' +
      '_____#_____'
    expect(createdXmasTree).toEqual(expected)
  })

  it('Test #5: createXmasTree(1, "*")', () => {
    const createdXmasTree = createXmasTree(1, '*')
    const expected = '*\n#\n#'
    expect(createdXmasTree).toEqual(expected)
  })

  it('Test #6: createXmasTree(4, "#")', () => {
    const createdXmasTree = createXmasTree(4, '#')
    const expected = '___#___\n' + '__###__\n' + '_#####_\n' + '#######\n' + '___#___\n' + '___#___'
    expect(createdXmasTree).toEqual(expected)
  })
})
