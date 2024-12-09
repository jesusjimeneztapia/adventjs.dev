type Inventory = Array<{ name: string; quantity: number; category: string }>

function organizeInventory(inventory: Inventory): object {
  let result = {}
  for (const { category, name, quantity } of inventory) {
    const foundCategory = result[category]
    const foundQuantity = foundCategory?.[name] ?? 0
    result = { ...result, [category]: { ...foundCategory, [name]: foundQuantity + quantity } }
  }
  return result
}

export { organizeInventory }
