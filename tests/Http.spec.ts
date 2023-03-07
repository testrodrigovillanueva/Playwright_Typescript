import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=1000
let f:any =0
let page: Page;
let browser:any 
let context:any

var myArray = ['rodrigo', 'rodrigo@gmail.com','pedro','juan','SuperSecretPassword!']; 
//var myArray = ['rodrigo', 'rodrigo@gmail.com','krt.com']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)


test.describe('HTTP Authentication ', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext({
      httpCredentials: {
        username: 'admin',
        password: 'admin',
      }
    }); 
    page=await context.newPage()
    f = new PTS(page);   

         
    await f.scroll(0,500,tg)
    console.log('Termina la Base');
   

  });

  
  test('Http Authentication', async () => {  
    //Validar el texto 
    await f.openURL("http://the-internet.herokuapp.com/basic_auth")
    await f.validar_texto("//h3[contains(.,'Basic Auth')]","Basic",tg)
    await f.tiempo(3000)
    
   
  });

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 