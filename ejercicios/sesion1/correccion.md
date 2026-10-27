# Corrección — Sesión 1: TypeScript sintaxis base

**Archivo corregido:** `ejercicios/sesion1/TareaSesion1.ts`

¡Muy buen trabajo! El código es prolijo y está todo tipado.

## Verificación

- `npx tsx TareaSesion1.ts` → corre sin errores.
- `npx tsc --noEmit` (con `strict: true`) → sin errores de tipos.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 2 | Array de ≥ 5 casos con `id`, `titulo`, `prioridad`, `ejecutado` | ✅ | 5 casos. Muy bien definir `type Prioridad` y `type Caso` una sola vez y reutilizarlos. |
| 3 | `contarPorPrioridad(casos)` | ✅ | Devuelve `{ alta: 2, media: 2, baja: 1 }`. Excelente el uso de `Record<Prioridad, number>` para tipar el resultado. |
| 4 | `listarPendientes(casos)` | ✅ | Funciona, pero el resultado se guarda en `resultado` y nunca se imprime, así que al correr el archivo no se ve (ver detalles menores). |
| 5 | Arrow function `formatearCaso(caso)` | ✅ | Formato idéntico al pedido: `#2 - Recuperar contraseña (media) - Pendiente`. |
| 6 | `forEach` imprimiendo los casos formateados | ✅ | |

## Detalles menores

- Falta un `console.log(resultado)` (o `console.log(listarPendientes(casos))`) para ver los pendientes por consola.
- Como tip a futuro, el método `filter` de los arrays sirve justamente para lo que hace `listarPendientes`: `casos.filter((caso) => !caso.ejecutado)`.
- `caso.ejecutado === true ? ... : ...` se puede escribir simplemente `caso.ejecutado ? ... : ...`.
