// Importamos "test" (para definir tests) y "expect" (para hacer verificaciones)
import { test, expect } from '@playwright/test';
 
// URL del sitio de práctica
const URL = 'https://demo.playwright.dev/todomvc';
 
// Test 1: navegar al sitio y verificar el título de la página
test('TC-001', async ({ page }) => {
  
  await page.goto(URL);
 
  await expect(page).toHaveTitle(/TodoMVC/);
});
 
// Test 2: agregar una tarea nueva y verificar que aparece en la lista
test('TC-002', async ({ page }) => {
  await page.goto(URL);
 
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Comprar pan');
  await input.press('Enter');
 
  await expect(page.getByText('Comprar pan')).toBeVisible();
});
 
// Test 3: marcar una tarea como completada y verificar que cambió su estado
test('TC-003', async ({ page }) => {
  await page.goto(URL);
 
  await page.waitForTimeout(3000);
 
  // 
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Estudiar Playwright');
  await input.press('Enter');
    await page.waitForTimeout(3000);
 
  const checkbox = page.getByRole('checkbox', { name: 'Toggle Todo' });
  await checkbox.check();
 
  await page.waitForTimeout(3000);
 
  // Verificamos que el checkbox quedó marcado y que el contador ya no muestra tareas pendientes
  await expect(checkbox).toBeChecked();
  await expect(page.getByText('0 items left')).toBeVisible();
 
  await page.waitForTimeout(3000);
});
