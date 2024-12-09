# Reto #1: 🎁 ¡Primer regalo repetido! - 🟩 Fácil

**Santa Claus** 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, **los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.**

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

```js
const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía
```

## Solución

### 1. JavaScript

**Puntuación**: **★ ★ ★ ★ ★**

- **[Código](/challenges/2024/Reto01-Primer_regalo_repetido/js/solution.js 'Código de la solución en JavaScript')**

```js
function prepareGifts(gifts) {
  return [...new Set(gifts)].sort((a, b) => a - b)
}
```

- **[Pruebas](/challenges/2024/Reto01-Primer_regalo_repetido/js/solution.test.js 'Pruebas de solución en JavaScript')**

```bash
npm run test:js:01
```

![Pruebas de la solución en JavaScript ejecutadas en consola](/challenges/2024/Reto01-Primer_regalo_repetido/assets/images/test-js.png 'Pruebas de la solución en JavaScript ejecutadas')

### 2. TypeScript

**Puntuación**: **★ ★ ★ ★ ★**

- **[Código](/challenges/2024/Reto01-Primer_regalo_repetido/ts/solution.ts)**

```ts
function prepareGifts(gifts: number[]): number[] {
  return [...new Set(gifts)].sort((a, b) => a - b)
}
```

- **[Pruebas](/challenges/2024/Reto01-Primer_regalo_repetido/ts/solution.spec.ts)**

```bash
npm run test:ts:01
```

![Pruebas de la solución en TypeScript ejecutadas en consola](/challenges/2024/Reto01-Primer_regalo_repetido/assets/images/test-ts.png 'Pruebas de la solución en TypeScript ejecutadas')
