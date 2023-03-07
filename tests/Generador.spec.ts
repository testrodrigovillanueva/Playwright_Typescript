import { test, expect } from '@playwright/test';

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('Rodrigo');
  await page.getByPlaceholder('Full Name').press('Tab');
  await page.getByPlaceholder('name@example.com').fill('ro@gmail.com');
  await page.getByPlaceholder('name@example.com').press('Tab');
  await page.getByPlaceholder('Current Address').fill('Demo de la dirección');
  await page.getByPlaceholder('Current Address').press('Tab');
  await page.locator('#permanentAddress').fill('Demo dos de la Dirección');
  await sleep(3000)
});