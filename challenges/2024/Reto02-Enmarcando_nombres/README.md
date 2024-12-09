# Reto #2: 🖼️ Enmarcando nombres - 🟩 Fácil

**Santa Claus** 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

**Reglas:**

- Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
- Cada nombre debe estar en una línea, alineado a la izquierda.
- El marco está construido con \* y tiene un borde de una línea de ancho.
- La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.

Ejemplo de funcionamiento:

```js
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```

## Solución

### 1. JavaScript

**Puntuación**: **★ ★ ★ ★ ★**

- **[Código](/challenges/2024/Reto02-Enmarcando_nombres/js/solution.js 'Código de la solución en JavaScript')**

```js
function createFrame(names) {
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
```

- **[Pruebas](/challenges/2024/Reto02-Enmarcando_nombres/js/solution.test.js 'Pruebas de solución en JavaScript')**

```bash
npm run test:js:02
```

![Pruebas de la solución en JavaScript ejecutadas en consola](/challenges/2024/Reto02-Enmarcando_nombres/assets/images/test-js.png 'Pruebas de la solución en JavaScript ejecutadas')

### 2. TypeScript

**Puntuación**: **★ ★ ★ ★ ★**

- **[Código](/challenges/2024/Reto02-Enmarcando_nombres/ts/solution.ts)**

```ts
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
```

- **[Pruebas](/challenges/2024/Reto02-Enmarcando_nombres/ts/solution.spec.ts)**

```bash
npm run test:ts:02
```

![Pruebas de la solución en TypeScript ejecutadas en consola](/challenges/2024/Reto02-Enmarcando_nombres/assets/images/test-ts.png 'Pruebas de la solución en TypeScript ejecutadas')
