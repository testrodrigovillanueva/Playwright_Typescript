import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
import dotenv from 'dotenv'
//import { chromium } from 'playwright';

dotenv.config()

let tg:number=500
let f:any =0
let page: Page;
let browser:any 
let context:any
let archivo:string
archivo="C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_TYPESCRIPT_CURSO/tests/archivos/img1.png"


var myArray = ['rodrigo', 'rodrigo@gmail.com', 'SuperSecretPassword!']; 
//var myArray = ['rodrigo', 'rodrigo@gmail.com','krt.com']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)

let datos = ['rodrigo', 'villanueva','rod@gmail.com', '67576567','Dirección demo uno','Python'];


test.describe('Calendarios', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);     

    await f.openURL("https://testingqarvn.com.es/upload-files");
    //await f.Validar_Titulo("ComboBox | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/upload-files/")
    //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    await f.scroll(0,700,tg)
    console.log('Cargada la Base');
   

  });  

  test.only('Parametros por Env', async () => {
    //console.log(process.env);
    await f.texto_validar("//input[contains(@id,'wsf-1-field-80')]",process.env.nombre,tg)  
    await f.texto_validar("//input[contains(@id,'wsf-1-field-81')]",process.env.ap,tg)  
    await f.texto_validar("//input[contains(@id,'wsf-1-field-82')]",process.env.email,tg)  
    await f.texto_validar("//input[contains(@id,'wsf-1-field-83')]",process.env.tel,tg)  
    await f.texto_validar("//textarea[contains(@id,'wsf-1-field-84')]",process.env.direccion,tg) 
    if(process.env.le.toLowerCase()=="php"){
      await f.click("//label[contains(@id,'wsf-1-label-85-row-1')]",tg)
      await f.tiempo(3000)
    }
    else if(process.env.le.toLowerCase()=="python"){
      await f.click("//label[contains(@id,'wsf-1-label-85-row-2')]",tg)
      await f.tiempo(3000)
    }
   
  });

  test('Parametros Condional', async () => {
    await f.texto_validar("//input[contains(@id,'wsf-1-field-80')]",`${datos[0]}`,tg)  
    await f.texto_validar("//input[contains(@id,'wsf-1-field-81')]",`${datos[1]}`,tg)  
    await f.texto_validar("//input[contains(@id,'wsf-1-field-82')]",`${datos[2]}`,tg)  
    await f.texto_validar("//input[contains(@id,'wsf-1-field-83')]",`${datos[3]}`,tg)  
    await f.texto_validar("//textarea[contains(@id,'wsf-1-field-84')]",`${datos[4]}`,tg)  
    if(`${datos[5]}`.toLowerCase()=="php"){
      await f.click("//label[contains(@id,'wsf-1-label-85-row-1')]",tg)
      await f.tiempo(3000)
    }
    else if(`${datos[5]}`.toLowerCase()=="python"){
      await f.click("//label[contains(@id,'wsf-1-label-85-row-2')]",tg)
      await f.tiempo(3000)
    }
  });



  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 