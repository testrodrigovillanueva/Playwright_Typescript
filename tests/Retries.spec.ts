import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=100
let f:any =0
let page: Page;
let browser:any 
let context:any

var myArray = ['rodrigo.com', 'rodrigo@gmail.com', 'rod.mx','rorro@gmail.com','rx@gmail.com','rr']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)


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

    await f.openURL("https://testingqarvn.com.es/prueba-de-campos-checkbox/");
    await f.Validar_Titulo("Prueba de campos Checkbox | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
    await f.Validar_Texto("//h2[contains(.,'Datos Personales Básicos CheckBox')]","Básicos",tg)      
    await f.scroll(0,500,tg)
    console.log('Termina la Base');
   

  });

  
  test('Retries', async () => {       
    await f.texto_try("//input[contains(@id,'wsf-1-field-29')]","Rodrigo",tg)
    await f.texto_try("//input[contains(@id,'wsf-1-field-30')]","Villanueva",tg)
    await f.texto_validar("//input[contains(@id,'wsf-1-field-31')]",rand,tg)
    await f.tiempo(tg)  
    await f.click("//button[contains(@id,'wsf-1-field-34')]",tg)
    await f.tiempo(tg)  
    await f.validar_texto("//p[contains(.,'Gracias por tu encuesta.')]","Gracias",tg)
  });

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 