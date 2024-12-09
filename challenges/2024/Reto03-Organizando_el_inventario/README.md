# Reto #3: 🏗️ Organizando el inventario - 🟩 Fácil

Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. **Necesitas ayudar a Santa a organizar el inventario.**

Recibirás un array de objetos, donde **cada objeto representa un juguete y tiene las propiedades:**

- `name`: el nombre del juguete (string).
- `quantity`: la cantidad disponible de ese juguete (entero).
- `category`: la categoría a la que pertenece el juguete (string).

Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

- Las claves del objeto serán las categorías de juguetes.
- Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
- Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
- Si el array está vacío, la función debe devolver un objeto vacío {}.

```js
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' },
]

organizeInventory(inventory)

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventory2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' },
]

organizeInventory(inventory2)

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
```

## Solución

### 1. JavaScript

**Puntuación**: **★ ★ ★ ★ ★**

- **[Código](/challenges/2024/Reto03-Organizando_el_inventario/js/solution.js 'Código de la solución en JavaScript')**

```js
function organizeInventory(inventory) {
  return inventory.reduce((acc, { category, name, quantity }) => {
    const foundCategory = acc[category]
    const foundQuantity = foundCategory?.[name] ?? 0
    return { ...acc, [category]: { ...foundCategory, [name]: foundQuantity + quantity } }
  }, {})
}
```

- **[Pruebas](/challenges/2024/Reto03-Organizando_el_inventario/js/solution.test.js 'Pruebas de solución en JavaScript')**

```bash
npm run test:js:03
```

![Pruebas de la solución en JavaScript ejecutadas en consola](/challenges/2024/Reto03-Organizando_el_inventario/assets/images/test-js.png 'Pruebas de la solución en JavaScript ejecutadas')

### 2. TypeScript

**Puntuación**: **★ ★ ★ ★ ☆**

- **[Código](/challenges/2024/Reto03-Organizando_el_inventario/ts/solution.ts)**

```ts
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
```

- **[Pruebas](/challenges/2024/Reto03-Organizando_el_inventario/ts/solution.spec.ts)**

```bash
npm run test:ts:03
```

![Pruebas de la solución en TypeScript ejecutadas en consola](/challenges/2024/Reto03-Organizando_el_inventario/assets/images/test-ts.png 'Pruebas de la solución en TypeScript ejecutadas')
