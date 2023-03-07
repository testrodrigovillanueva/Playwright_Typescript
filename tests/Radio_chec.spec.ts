import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=1000
let f:any =0
let page: Page;
let browser:any 
let context:any

test.describe('ejemplo de Radio y Checkbox', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);   

    await f.openURL("https://testingqarvn.com.es/radio-buttons/");
    await f.Validar_Titulo("Radio Buttons | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/radio-buttons/")
    await f.Validar_Texto("//h2[contains(.,'Datos Personales Básicos CheckBox y Radio Buttons')]","Básicos",tg)      
    await f.scroll(0,500,tg)
    console.log('Termina la Base');
   
  });

  
  test('Radio y Checkbox', async () => {  
    let ap:string=""
    let email:string=""
    let tel:string=""
    let dir:string=""
    await f.texto_try("//input[contains(@id,'wsf-1-field-37')]","PedrO",tg)
    //Condionar
    const val=await f.valor_campo("//input[contains(@id,'wsf-1-field-37')]",tg)
    //Convierto a minusculas    
    if(val.toLowerCase()=="rodrigo"){
      ap="Villanueva"
      email="rod@gmail.com"
      tel="5675675"
      dir="Dirección rodrigo"
    }else if(val.toLowerCase()=="juan"){
      ap="Perez"
      email="jua@gmail.com"
      tel="5555555"
      dir="Dirección de Juan"
    }else if(val.toLowerCase()=="pedro"){
      ap="Garcia"
      email="pedro@gmail.com"
      tel="333333"
      dir="Dirección de Pedro"
    }


    await f.texto_validar("//input[contains(@id,'wsf-1-field-38')]",ap,tg)
    await f.tiempo(tg)  
    await f.texto_validar("//input[contains(@id,'wsf-1-field-39')]",email,tg)
    await f.texto_try("//input[contains(@id,'wsf-1-field-40')]",tel,tg)
    await f.texto_validar("//textarea[contains(@id,'wsf-1-field-41')]",dir,tg)
    await f.tiempo(tg) 
    await f.scroll(0,500,tg)
    //checkbox
    // await f.click("//label[contains(@id,'wsf-1-label-42-row-1')]",tg)
    await f.check("//label[contains(@id,'wsf-1-label-42-row-1')]",tg)
    await f.validar_check("//label[contains(@id,'wsf-1-label-42-row-1')]")
    //Radio
    await f.check("//label[contains(@id,'wsf-1-label-44-row-2')]",tg)
  });


  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 