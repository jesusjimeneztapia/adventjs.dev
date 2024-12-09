import { describe, expect, it } from 'vitest'
import { organizeInventory } from './solution'

describe('JavaScript | Reto #3: 🏗️ Organizando el inventario - 🟩 Fácil', () => {
  it('Test #1: return type', () => {
    const organizedInventory = organizeInventory([])
    expect(organizedInventory).toBeTypeOf('object')
  })

  it('Test #2: organizeInventory([])', () => {
    const organizedInventory = organizeInventory([])
    const expected = {}
    expect(organizedInventory).toEqual(expected)
  })

  it('Test #3: organizeInventory([{ name: "doll", quantity: 5, category: "toys" }])', () => {
    const organizedInventory = organizeInventory([{ name: 'doll', quantity: 5, category: 'toys' }])
    const expected = { toys: { doll: 5 } }
    expect(organizedInventory).toEqual(expected)
  })

  it('Test #4: organizeInventory([{ name: "book", quantity: 10, category: "education" }, { name: "book", quantity: 5, category: "education" }, { name: "paint", quantity: 3, category: "art" }])', () => {
    const organizedInventory = organizeInventory([
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' },
    ])
    const expected = {
      education: {
        book: 15,
      },
      art: {
        paint: 3,
      },
    }
    expect(organizedInventory).toEqual(expected)
  })

  it('Test #5: organizeInventory([{ name: "doll", quantity: 5, category: "toys" }, { name: "car", quantity: 3, category: "toys" }, { name: "ball", quantity: 2, category: "sports" }, { name: "car", quantity: 2, category: "toys" }, { name: "racket", quantity: 4, category: "sports" }])', () => {
    const organizedInventory = organizeInventory([
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' },
    ])
    const expected = {
      toys: {
        doll: 5,
        car: 5,
      },
      sports: {
        ball: 2,
        racket: 4,
      },
    }
    expect(organizedInventory).toEqual(expected)
  })
})
