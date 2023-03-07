 import { test, expect, chromium } from '@playwright/test';
//import { chromium } from 'playwright';

test.describe('Cargando el Navegador', () => {

  // test.use({
  //   viewport:{width:1900, height:800},
  // })

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  
  test('Hola mundo', async () => {

    const browsers=await chromium.launch({
      headless: false,
    })

    const context=await browsers.newContext();
    const page=await context.newPage()

    await page.goto('https://demoqa.com/text-box');
    await expect(page).toHaveTitle(/DEMOQA/);
    await expect(page).toHaveURL(/.*text-box/);
    // await page.locator("#userName").fill("Rodrigo")
    await page.fill("#userName","Rodrigo")
    await page.fill("#userEmail","rodrigo@gmail.com")
    await sleep(3000)
    console.log('Demo de un Snnipet');
    
    
  });

  // test('Hola mundo 2', async () => {

  //   const browsers=await chromium.launch({
  //     // headless: false,
  //   })

  //   const context=await browsers.newContext();
  //   const page=await context.newPage()

  //   await page.goto('https://demoqa.com/text-box');
  //   await expect(page).toHaveTitle(/DEMOQA/);
  //   await expect(page).toHaveURL(/.*text-box/);
  //   // await page.locator("#userName").fill("Rodrigo")
  //   await page.fill("#currentAddress","Demo dirección")
  //   await page.fill("#permanentAddress","Dirección dos")
  //   await page.click("#submit")
  //   await sleep(3000)
    
  // });
  
});//describe