# Corrección — Sesión 2

**Archivo corregido:** `ejercicios/sesion2/casosTest.ts`

¡Muy buen trabajo! El archivo cumple con todos los puntos de la consigna y no tiene errores de tipos.

## Verificación

- `npx tsx casosTest.ts` → corre sin errores y, después de los 500ms, imprime los 3 casos formateados.
- `npx tsc --noEmit` (con `strict: true`) → sin errores de tipos.

## Lo que está bien

- La interface `CasoDeTest` tiene las cuatro propiedades con los tipos pedidos.
- El array está tipado con la interface y tiene 3 casos.
- `obtenerCasosDeTest()` devuelve `Promise<CasoDeTest[]>` y resuelve a los 500ms con `setTimeout`, tal como pedía la consigna.
- `main()` es `async`, hace `await` y recorre con `forEach` usando `formatearCaso`.
- `formatearCaso` mantiene el mismo formato que en la sesión 1.
