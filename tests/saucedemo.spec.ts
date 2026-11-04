 import { test, expect } from '@playwright/test';
 
//Parte 3
test('compra completa', async ({ page }) => {
  // 1. Login
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
 
  // Verificamos que estamos en la lista de productos
  await expect(page.getByText('Products')).toBeVisible();
 
  // 2. Agregar al carrito
  // Hay un botón "Add to cart" por producto: con .first() tomamos el primero
  // (Sauce Labs Backpack)
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
 
  // El ícono del carrito no tiene texto propio, así que lo buscamos
  // por su atributo data-test (lo encontramos con el inspector o con --ui)
  const badgeCarrito = page.locator('[data-test="shopping-cart-badge"]');
  await expect(badgeCarrito).toHaveText('1');
 
  // 3. Abrir el carrito
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
 
  // 4. Checkout: completamos los datos y continuamos
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByPlaceholder('First Name').fill('Luciana');
  await page.getByPlaceholder('Last Name').fill('Grimaldi');
  await page.getByPlaceholder('Zip/Postal Code').fill('1234');
  await page.getByRole('button', { name: 'Continue' }).click();
 
  // 5. Resumen (Overview): el producto debe aparecer, luego Finish
  await expect(page.getByText('Checkout: Overview')).toBeVisible();
  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
  await page.getByRole('button', { name: 'Finish' }).click();
 
  // 6. Verificación final: mensaje de confirmación
  await expect(page.getByText('Checkout: Complete!')).toBeVisible();
  await expect(page.getByText('THANK YOU FOR YOUR ORDER')).toBeVisible();
});
