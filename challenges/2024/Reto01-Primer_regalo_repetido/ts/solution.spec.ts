import { describe, expect, it } from 'vitest'
import { prepareGifts } from './solution'

describe('TypeScript | Reto #1: 🎁 ¡Primer regalo repetido! - 🟩 Fácil', () => {
  it('Test #1: return type', () => {
    const preparedGifts = prepareGifts([])
    expect(preparedGifts).instanceOf(Array)
  })

  it('Test #2: prepareGifts([3, 1, 2, 3, 4, 2, 5])', () => {
    const preparedGifts = prepareGifts([3, 1, 2, 3, 4, 2, 5])
    const expected = [1, 2, 3, 4, 5]
    expect(preparedGifts).toEqual(expected)
  })

  it('Test #3: prepareGifts([5, 5, 5, 5])', () => {
    const preparedGifts = prepareGifts([5, 5, 5, 5])
    const expected = [5]
    expect(preparedGifts).toEqual(expected)
  })

  it('Test #4: prepareGifts([1, 2, 3])', () => {
    const preparedGifts = prepareGifts([1, 2, 3])
    const expected = [1, 2, 3]
    expect(preparedGifts).toEqual(expected)
  })

  it('Test #5: prepareGifts([])', () => {
    const preparedGifts = prepareGifts([])
    const expected = []
    expect(preparedGifts).toEqual(expected)
  })

  it('Test #6: prepareGifts([10, 20, 10, 30, 20, 30, 40])', () => {
    const preparedGifts = prepareGifts([10, 20, 10, 30, 20, 30, 40])
    const expected = [10, 20, 30, 40]
    expect(preparedGifts).toEqual(expected)
  })

  it('Test #7: prepareGifts([3, 1, 2, 3, 1, 2])', () => {
    const preparedGifts = prepareGifts([3, 1, 2, 3, 1, 2])
    const expected = [1, 2, 3]
    expect(preparedGifts).toEqual(expected)
  })
})
