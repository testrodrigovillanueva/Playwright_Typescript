import { test, expect, chromium ,Page } from '@playwright/test';
import { PTS } from './Funciones';
//import { chromium } from 'playwright';

let tg:number=300
let f:any =0
let page: Page;
let browser:any 
let context:any
let archivo:string
let pan:string
archivo="C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_TYPESCRIPT_CURSO/tests/archivos/img1.png"


var myArray = ['rodrigo', 'rodrigo@gmail.com', 'SuperSecretPassword!']; 
//var myArray = ['rodrigo', 'rodrigo@gmail.com','krt.com']; 
var rand = myArray[(Math.random() * myArray.length) | 0]
var ranp = Math.ceil(Math.random()*1000);
//console.log(ranp)
pan="C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_TYPESCRIPT_CURSO/tests/archivos/img"+ranp+".png"



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

    await f.openURL("https://testingqarvn.com.es/upload-files");
    //await f.Validar_Titulo("ComboBox | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/upload-files/")
    //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    await f.scroll(0,800,tg)
    console.log('Cargada la Base');
  });  
  
 

  test('Pantalla Screenshot', async () => {
    await f.scroll(0,1000)
    await f.tiempo(tg)
    await f.Upload_file("//input[contains(@id,'wsf-1-field-94')]",archivo,tg)
    await f.Mover_Upload_file("//input[contains(@id,'wsf-1-field-94')]",tg)
    await f.Upload_file("//input[contains(@id,'wsf-1-field-94')]",archivo,tg)
    //await f.Pantalla(pan,tg)
    //await f.Pantalla_Completa(pan,tg)
    await f.Pantalla_Elemento("//input[contains(@id,'wsf-1-field-94')]",pan,tg)
    
  });

 
  

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 