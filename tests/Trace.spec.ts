import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=500
let f:any =0
let page: Page;
let browser:any 
let context:any

test.describe('Page Object Model', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);   

    await f.openURL("https://testingqarvn.com.es/datos-personales/");
    await f.Validar_Titulo("Datos Personales | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/datos-personales/")
    await f.Validar_Texto("//h2[contains(.,'Datos Personales Básicos')]","Básicos",tg)      
    await f.scroll(0,500,tg)
    console.log('Termina la Base');
   

  });

  
  test('Trace', async () => {       
    await f.texto_try("#wsf-1-field-21","Rodrigo",tg)
    await f.texto_validar("//input[contains(@id,'wsf-1-field-22')]","Villanueva",tg)
    await f.tiempo(tg)  
  });

  test('Trace Dos', async () => {  
    //await page.fill("//input[contains(@id,'wsf-1-field-21')]","Rodrigo")
    await f.texto_validar("//input[contains(@id,'wsf-1-field-23')]","rod@gmail.com",tg)
    await f.texto_try("//input[contains(@id,'wsf-1-field-249')]","656567",tg)
    await f.texto_validar("//textarea[contains(@id,'wsf-1-field-28')]","Dirección uno",tg)
    await f.tiempo(tg)  
  });

  test('Trace Tres', async () => {  
    await page.click("//button[contains(@id,'wsf-1-field-27')]")
    await f.tiempo(tg)  

  });


  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 