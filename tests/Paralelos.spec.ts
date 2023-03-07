import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

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

  test('Datos uno', async () => {
    await f.texto_validar("//input[contains(@id,'wsf-1-field-80')]","rodrigo",tg)  
  });

  test('Datos dos', async () => {
    await f.texto_validar("//input[contains(@id,'wsf-1-field-81')]","villanueva",tg)  
  });

  test('Datos tres', async () => {
    await f.texto_validar("//input[contains(@id,'wsf-1-field-82')]","rod@gmail.com",tg)  
  });

  test('Datos cuatro', async () => {
    await f.texto_validar("//input[contains(@id,'wsf-1-field-83')]","576576",tg)  
  });
  

  test('Calendarios Click', async () => {
    await f.scroll(0,1000)
    await f.tiempo(tg)
    await f.click("//input[contains(@id,'wsf-1-field-91')]",tg)
    await f.click("(//div[contains(.,'17')])[9]",tg)
  
  });
  
 





 


  

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 