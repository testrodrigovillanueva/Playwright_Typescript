import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=1000
let f:any =0
let page: Page;
let browser:any 
let context:any

var myArray = ['rodrigo', 'rodrigo@gmail.com', 'SuperSecretPassword!']; 
//var myArray = ['rodrigo', 'rodrigo@gmail.com','krt.com']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
console.log(rand)


test.describe('Acciones Click', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);   

    //Mouse Over
    // await f.openURL("https://playwright.dev/docs/codegen-intro");
    // await f.Validar_Titulo("Test Generator | Playwright")
    // await f.Validar_URL("https://playwright.dev/docs/codegen-intro")
    // await f.Validar_Texto("//h1[contains(.,'Test Generator')]","Test",tg)      
    // await f.scroll(0,200,tg)
    // console.log('Cargada la Base');

    // await f.openURL("https://demoqa.com/buttons");
    // await f.Validar_Titulo("DEMOQA")
    // await f.Validar_URL("https://demoqa.com/buttons")
    // await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    // await f.scroll(0,200,tg)
    // console.log('Cargada la Base');

    //Drag and Drop
    await f.openURL("https://demoqa.com/droppable");
    await f.Validar_Titulo("DEMOQA")
    await f.Validar_URL("https://demoqa.com/droppable")
    //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    await f.scroll(0,200,tg)
    console.log('Cargada la Base');
   

  });

  
  // test('Mouse Over', async () => {       
  //   await f.mouse_over("//a[@href='#'][contains(.,'Node.js')]",tg)
  //   await f.tiempo(tg)
  //   await f.click("//a[@href='/python/docs/codegen-intro'][contains(.,'Python')]",tg)
  //   await f.tiempo(3000)
  // });

  // test('Opciones Click', async () => {       
  //   await f.click_texto("Click Me",tg)
  //   await f.click_derecho_texto("Right Click Me",tg)
  //   await f.dobleClick_texto("Double Click Me",tg)
  // });


  test.only('Drag and Drop', async () => {    
    await f.drag_drop("//div[contains(@id,'draggable')]","(//div[@class='drop-box ui-droppable'][contains(.,'Drop here')])[1]",tg)
    await f.tiempo(2000)
  
  });

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 