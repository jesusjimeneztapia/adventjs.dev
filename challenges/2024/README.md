<h1 align="center">AdventJS 2024</h1>

![AdventJS Retos de Programación para Navidad](https://adventjs.dev/og.webp 'AdventJS 2024')

## Retos

|  #  | Nombre del reto                                                               | Nivel[^1] |                              Descripción                               |                                                                                                                                                                                     Solución                                                                                                                                                                                     |         Puntuación[^2]         |
| :-: | ----------------------------------------------------------------------------- | :-------: | :--------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------: |
| 01  | [🎁 ¡Primer regalo repetido!](https://adventjs.dev/es/challenges/2024/1)      |    🟩     |    [Ver](/challenges/2024/Reto01-Primer_regalo_repetido/README.md)     |               [JS](/challenges/2024/Reto01-Primer_regalo_repetido/js/solution.js 'JavaScript') \| [TEST](/challenges/2024/Reto01-Primer_regalo_repetido/js/solution.test.js 'Pruebas')<br>[TS](/challenges/2024/Reto01-Primer_regalo_repetido/ts/solution.ts 'TypeScript') \| [SPEC](/challenges/2024/Reto01-Primer_regalo_repetido/ts/solution.spec.ts 'Pruebas')               | **★ ★ ★ ★ ★**<br>**★ ★ ★ ★ ★** |
| 02  | [🖼️ Enmarcando nombres](https://adventjs.dev/es/challenges/2024/2)            |    🟩     |      [Ver](/challenges/2024/Reto02-Enmarcando_nombres/README.md)       |                       [JS](/challenges/2024/Reto02-Enmarcando_nombres/js/solution.js 'JavaScript') \| [TEST](/challenges/2024/Reto02-Enmarcando_nombres/js/solution.test.js 'Pruebas')<br>[TS](/challenges/2024/Reto02-Enmarcando_nombres/ts/solution.ts 'TypeScript') \| [SPEC](/challenges/2024/Reto02-Enmarcando_nombres/ts/solution.spec.ts 'Pruebas')                       | **★ ★ ★ ★ ★**<br>**★ ★ ★ ★ ★** |
| 03  | [🏗️ Organizando el inventario](https://adventjs.dev/es/challenges/2024/3)     |    🟩     |   [Ver](/challenges/2024/Reto03-Organizando_el_inventario/README.md)   |         [JS](/challenges/2024/Reto03-Organizando_el_inventario/js/solution.js 'JavaScript') \| [TEST](/challenges/2024/Reto03-Organizando_el_inventario/js/solution.test.js 'Pruebas')<br>[TS](/challenges/2024/Reto03-Organizando_el_inventario/ts/solution.ts 'TypeScript') \| [SPEC](/challenges/2024/Reto03-Organizando_el_inventario/ts/solution.spec.ts 'Pruebas')         | **★ ★ ★ ★ ★**<br>**★ ★ ★ ★ ☆** |
| 04  | [🎄 Decorando el árbol de Navidad](https://adventjs.dev/es/challenges/2024/4) |    🟨     | [Ver](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/README.md) | [JS](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/js/solution.js 'JavaScript') \| [TEST](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/js/solution.test.js 'Pruebas')<br>[TS](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/ts/solution.ts 'TypeScript') \| [SPEC](/challenges/2024/Reto04-Decorando_el_arbol_de_Navidad/ts/solution.spec.ts 'Pruebas') | **★ ★ ★ ★ ★**<br>**★ ★ ★ ★ ★** |
| 05  | [👞 Emparejando botas](https://adventjs.dev/es/challenges/2024/5)             |    🟩     |       [Ver](/challenges/2024/Reto05-Emparejando_botas/README.md)       |                                                                                                                                                                                        ~                                                                                                                                                                                         |         **☆ ☆ ☆ ☆ ☆**          |
| 06  | [📦 ¿Regalo dentro de la caja?](https://adventjs.dev/es/challenges/2024/6)    |    🟨     |   [Ver](/challenges/2024/Reto06-Regalo_dentro_de_la_caja/README.md)    |                                                                                                                                                                                        ~                                                                                                                                                                                         |         **☆ ☆ ☆ ☆ ☆**          |

## Pruebas

Para ejecutar todas las pruebas de los retos se debe utilizar el siguiente comando:

```bash
npm run test
```

![Pruebas de todas las soluciones ejecutadas en consola](/challenges/2024/assets/images/all-test.png 'Pruebas de todas las soluciones ejecutadas')

### Pruebas individuales

Para ejecutar una prueba de algún reto de programación en específico, se debe utilizar el siguiente comando:

```bash
npm run test:$l:$nn
```

**Dónde:**

- `$l` es el lenguaje de programación del reto, `js` para **JavaScript** y `ts` para **TypeScript**.
- `$nn` es el número del reto de programación, el valor es de 2 dígitos, es decir, con `0` por delante en el caso de los números con un solo dígito.

![Pruebas de una solución específica ejecutada en consola](/challenges/2024/Reto01-Primer_regalo_repetido/assets/images/test-js.png 'Pruebas de una solución específica ejecutada')

[^1]: **Nivel**: 🟩 Fácil 🟨 Medio
[^2]: **Puntuación**: **★** Puntuación conseguida **☆** Puntuación no conseguida
