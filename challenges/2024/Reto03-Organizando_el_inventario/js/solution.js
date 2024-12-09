function organizeInventory(inventory) {
  return inventory.reduce((acc, { category, name, quantity }) => {
    const foundCategory = acc[category]
    const foundQuantity = foundCategory?.[name] ?? 0
    return { ...acc, [category]: { ...foundCategory, [name]: foundQuantity + quantity } }
  }, {})
}

export { organizeInventory }
