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


test.describe('Combo Box', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);       

    //Combobox
    // await f.openURL("https://testingqarvn.com.es/combobox/");
    // await f.Validar_Titulo("ComboBox | TestingQaRvn")
    // await f.Validar_URL("https://testingqarvn.com.es/combobox/")
    // //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    // await f.scroll(0,700,tg)
    // console.log('Cargada la Base');

    await f.openURL("https://demoqa.com/select-menu");
    //await f.Validar_Titulo("ComboBox | TestingQaRvn")
    await f.Validar_URL("https://demoqa.com/select-menu")
    //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    await f.scroll(0,700,tg)
    console.log('Cargada la Base');
   

  });  
  
  // test('Combo uno', async () => {    
  //   await f.tiempo(2000)
  //   await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Linux",tg)
  //   await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Windows",tg)
  //   await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Mac",tg)
  //   await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Linux",tg)
  //   await f.tiempo(2000)
  
  // });

  test('Combox Multiples', async () => {   
    await f.click("//div[@class=' css-1hwfws3'][contains(.,'Select...')]",tg)  
    await f.click("#react-select-4-option-0",tg)
    await f.click("#react-select-4-option-1",tg)
    await f.click("#react-select-4-option-2",tg)
  });

  test.only('Combox Multiples dos', async () => {   
    // await f.click("//option[@value='saab'][contains(.,'Saab')]",tg)
    await f.combo_multiples("#cars",['volvo','audi','saab'],tg)
  });



  

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 