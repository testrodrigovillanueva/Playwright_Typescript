import { test, expect } from '@playwright/test';


test('Hola mundo', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page).toHaveTitle(/DEMOQA/);
  await expect(page).toHaveURL(/.*text-box/);
  // await page.locator("#userName").fill("Rodrigo")
  await page.fill("#userName","Rodrigo")
  await page.fill("#userEmail","rodrigo@gmail.com")
  
});

