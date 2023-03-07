import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=100
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
let x:number=0


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

    await f.openURL("https://testingqarvn.com.es/combobox/");
    //await f.Validar_Titulo("ComboBox | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/combobox/")
    //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    await f.scroll(0,200,tg)
    console.log('Cargada la Base');
   

  });  

  //checar el empty en texto_validar

  for(x=1;x<=10;x++){
    test(`Combo numero ${x}` , async () => {      
     
      await f.texto_validar("//input[contains(@id,'wsf-1-field-45')]",rand)
      await f.texto_validar("//input[contains(@id,'wsf-1-field-46')]","villanueva")
      await f.scroll(0,700)
      await f.texto_validar("//input[contains(@id,'wsf-1-field-47')]","rod@gmail.com")
      await f.texto_validar("//input[contains(@id,'wsf-1-field-48')]","6567576")
      await f.texto_validar("//textarea[contains(@id,'wsf-1-field-49')]",rand,tg)
      await f.click("//label[contains(@id,'wsf-1-label-50-row-1')]",tg)
      await f.click("//label[contains(@id,'wsf-1-label-51-row-1')]",tg)
      await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Linux",tg)
      await f.combo_value("//select[contains(@id,'wsf-1-field-53')]","Windows",tg)
      await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Mac",tg)
      await f.combo_Label("//select[contains(@id,'wsf-1-field-53')]","Linux",tg)
    });
  }
  

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 