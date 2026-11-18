# Corrección — Sesión 3: Playwright primer contacto

**Archivos corregidos:** `tests/sesion3.spec.ts` y `tests/saucedemo.spec.ts`

¡Excelente trabajo! Los tests están muy claros, con comentarios en cada paso, y usan los locators recomendados (`getByPlaceholder`, `getByRole`, `getByText`).

## Verificación

- `npx playwright test` → los 4 tests pasan en verde en los 3 navegadores (chromium, firefox y webkit): 12 de 12.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1–3 | Instalar Playwright | ✅ | Config, carpeta `tests` y navegadores OK. |
| 5 | Test 1: título con `toHaveTitle` | ✅ | Buena idea guardar la URL en una constante. |
| 6 | Test 2: agregar tarea | ✅ | |
| 7 | Test 3: marcar tarea como completada | ✅ | Muy bien verificar con `toBeChecked` y además el contador `0 items left`. |
| 8 | `saucedemo.spec.ts` con un único test `compra completa` | ✅ | |
| 9 | Login | ✅ | |
| 10 | Agregar al carrito y verificar que el ícono muestra 1 | ✅ | Muy bien resuelto con el badge del carrito y `toHaveText('1')`. |
| 11 | Abrir el carrito | ✅ | |
| 12–13 | Checkout y resumen | ✅ | |
| 14 | Mensaje "Thank you for your order!" | ✅ | |
