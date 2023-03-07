import { test, expect, chromium } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=500

test.describe('Page Object Model', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  
  test('BeforeAll', async () => {   

    const browsers=await chromium.launch({
      // headless: false,
    })
    const context=await browsers.newContext();
    const page=await context.newPage()
    const f = new PTS(page);

    await f.openURL("https://testingqarvn.com.es/datos-personales/");
    await f.Validar_Titulo("Datos Personales | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/datos-personales/")
    await f.Validar_Texto("//h2[contains(.,'Datos Personales Básicos')]","Básicos",tg)
      
    await f.scroll(0,500,tg)
    //await page.fill("//input[contains(@id,'wsf-1-field-21')]","Rodrigo")
    await f.texto_validar("#wsf-1-field-21","Rodrigo",tg)
    await f.texto_validar("//input[contains(@id,'wsf-1-field-22')]","Villanueva",tg)
    await f.tiempo(tg)  

  });

  test('BeforeAll Dos', async () => {   

    const browsers=await chromium.launch({
      // headless: false,
    })
    const context=await browsers.newContext();
    const page=await context.newPage()
    const f = new PTS(page);

    await f.openURL("https://testingqarvn.com.es/datos-personales/");
    await f.Validar_Titulo("Datos Personales | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/datos-personales/")
    await f.Validar_Texto("//h2[contains(.,'Datos Personales Básicos')]","Básicos",tg)
      
    await f.scroll(0,500,tg)
    //await page.fill("//input[contains(@id,'wsf-1-field-21')]","Rodrigo")
    await f.texto_validar("//input[contains(@id,'wsf-1-field-23')]","rod@gmail.com",tg)
    await f.texto_validar("//input[contains(@id,'wsf-1-field-24')]","656567",tg)
    await f.texto_validar("//textarea[contains(@id,'wsf-1-field-28')]","Dirección uno",tg)
    await f.tiempo(tg)  

  });


});//Describe 