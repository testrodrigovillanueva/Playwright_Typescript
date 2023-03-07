import { test, expect, chromium } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=1500

test.describe('Page Object Model', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  
  test('Scroll', async () => {
   

    const browsers=await chromium.launch({
      // headless: false,
    })
    const context=await browsers.newContext();
    const page=await context.newPage()
    const f = new PTS(page);

    await f.openURL("https://testingqarvn.com.es/datos-personales/");
    
    // await expect(page).toHaveTitle(/Datos Personales | TestingQaRvn/);
    // await expect(page).toHaveURL(/.*datos-personales/);
    // await page.locator("#userName").fill("Rodrigo")
    await f.Validar_Pagina("Datos Personales | TestingQaRvn","https://testingqarvn.com.es/datos-personales/","//h2[contains(.,'Datos Personales Básicos')]","Básicos",tg)
    
    await f.scroll(0,500,tg)
    //await page.fill("//input[contains(@id,'wsf-1-field-21')]","Rodrigo")
    await f.texto_validar("#wsf-1-field-21","Rodrigo",tg)
    await f.texto_validar("//input[contains(@id,'wsf-1-field-22')]","Villanueva",tg)
    await f.tiempo(tg)
    
    
    
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