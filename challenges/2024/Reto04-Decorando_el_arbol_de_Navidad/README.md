# Reto #4: 🎄 Decorando el árbol de Navidad - 🟨 Medio

**¡Es hora de poner el árbol de Navidad en casa!** 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

- El árbol está compuesto de triángulos de caracteres especiales.
- Los espacios en blanco a los lados del árbol se representan con guiones bajos \_.
- Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
- El árbol siempre debe tener la misma longitud por cada lado.
- Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.

Ejemplos:

```js
const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/
```

Asegúrate de utilizar saltos de línea \n al final de cada línea, **excepto en la última.**

## Solución

### 1. JavaScript

**Puntuación**: **★ ★ ★ ★ ★**

- **[Código](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/js/solution.js 'Código de la solución en JavaScript')**

```js
function createXmasTree(height, ornament) {
  const size = height * 2 - 1
  let result = ''
  let i = 1
  for (i; i <= height; ++i) {
    const large = i + (i - 1)
    const side = (size - large) / 2
    result += `${'_'.repeat(side)}${ornament.repeat(large)}${'_'.repeat(side)}\n`
  }
  const trunk = `${'_'.repeat((size - 1) / 2)}#${'_'.repeat((size - 1) / 2)}`
  return `${result}${[trunk, trunk].join('\n')}`
}
```

- **[Pruebas](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/js/solution.test.js 'Pruebas de solución en JavaScript')**

```bash
npm run test:js:04
```

![Pruebas de la solución en JavaScript ejecutadas en consola](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/assets/images/test-js.png 'Pruebas de la solución en JavaScript ejecutadas')

### 2. TypeScript

**Puntuación**: **★ ★ ★ ★ ★**

- **[Código](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/ts/solution.ts)**

```ts
function createXmasTree(height: number, ornament: string): string {
  const size = height * 2 - 1
  let result = ''
  let i = 1
  for (i; i <= height; ++i) {
    const large = i + (i - 1)
    const side = (size - large) / 2
    result += `${'_'.repeat(side)}${ornament.repeat(large)}${'_'.repeat(side)}\n`
  }
  const trunk = `${'_'.repeat((size - 1) / 2)}#${'_'.repeat((size - 1) / 2)}`
  return `${result}${[trunk, trunk].join('\n')}`
}
```

- **[Pruebas](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/ts/solution.spec.ts)**

```bash
npm run test:ts:04
```

![Pruebas de la solución en TypeScript ejecutadas en consola](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/assets/images/test-ts.png 'Pruebas de la solución en TypeScript ejecutadas')
