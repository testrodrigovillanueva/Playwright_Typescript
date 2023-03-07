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

//npx playwright codegen --save-storage=auth.json
//https://www.saucedemo.com/
//archivo auth.json   

test.describe('HTTP Authentication2 ', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext({
       storageState: "./auth.json"
    }); 
    page=await context.newPage()
    f = new PTS(page);   

         
    await f.scroll(0,500,tg)
    console.log('Termina la Base');
   

  });


  test('Http Authentication', async () => {  
    //Validar el texto 
    await f.openURL("https://www.saucedemo.com/inventory.html")
    await f.click("//button[contains(@id,'add-to-cart-sauce-labs-backpack')]",tg)
    await f.click("//button[contains(@id,'add-to-cart-sauce-labs-bike-light')]",tg)
    await f.validar_texto("//div[@class='inventory_item_name'][contains(.,'Sauce Labs Backpack')]","Sauce",tg)
    await f.tiempo(3000)
    
   
  });

  
  

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 