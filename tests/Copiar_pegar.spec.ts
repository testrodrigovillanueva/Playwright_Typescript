import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=1500
let f:any =0
let page: Page;
let browser:any 
let context:any

var myArray = ['rodrigo', 'rodrigo@gmail.com', 'SuperSecretPassword!']; 
//var myArray = ['rodrigo', 'rodrigo@gmail.com','krt.com']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)


test.describe('Copiar y Pegar', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);       

    //Copiar y Pegar
    await f.openURL("https://testingqarvn.com.es/datos-personales/");
    await f.Validar_Titulo("Datos Personales | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/datos-personales/")
    //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    await f.scroll(0,200,tg)
    console.log('Cargada la Base');
   

  });  
  
  test('Copiar input', async () => {    
    await f.texto_validar("//input[contains(@id,'wsf-1-field-21')]","Juan Perez",tg)
    await f.copiar_input("//input[contains(@id,'wsf-1-field-21')]",tg)
    await f.pegar_input("//input[contains(@id,'wsf-1-field-22')]",tg)
    await f.tiempo(2000)
  
  });


  test.only('Copiar Texto', async () => {   
    await f.copiar_texto("//h2[contains(.,'Datos Personales Básicos')]","//input[contains(@id,'wsf-1-field-22')]",tg)
    await f.copiar_texto("//label[contains(@id,'wsf-1-label-28')]","//textarea[contains(@id,'wsf-1-field-28')]",tg)
    await f.tiempo(2000)
  
  });

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 