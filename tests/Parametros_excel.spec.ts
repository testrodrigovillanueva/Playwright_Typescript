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


test.describe('Parametros desde Excel', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);     

    await f.openURL("https://testingqarvn.com.es/datos-personales/");
    //await f.Validar_Titulo("ComboBox | TestingQaRvn")
    await f.Validar_URL("https://testingqarvn.com.es/datos-personales/")
    //await f.Validar_Texto("//div[@class='main-header'][contains(.,'Buttons')]","Buttons",tg)      
    await f.scroll(0,700,tg)
    console.log('Cargada la Base');

  });  

//Leer los datos de Excel 
//Leer desde Excel
var XL=require("xlsx");
var libro=XL.readFile(("C:/Users/Rodrigo/Documents/VIDEOS_UDEMY_ES/PLAYWRIGHT_TYPESCRIPT_CURSO/tests/archivos/datos.xlsx"));
let datos_xl=libro.SheetNames;
console.log(datos_xl)
const hoja=datos_xl[0]
const excel=XL.utils.sheet_to_json(libro.Sheets[hoja])
// console.log(excel)
// for(const fila of excel)
// {  
//   console.log(fila['nombre'])
//   console.log(fila['ap'])
//   console.log(fila['email'])
// }

  test.only('Parametros por Excel', async () => {
    console.log(process.env);
    for(const fila of excel){ 
      await f.texto_validar("//input[contains(@id,'wsf-1-field-21')]",fila['nombre'],tg)  
      await f.texto_validar("//input[contains(@id,'wsf-1-field-22')]",fila['ap'],tg)  
      await f.texto_validar("//input[contains(@id,'wsf-1-field-23')]",fila['email'],tg)  
      await f.texto_validar("//input[contains(@id,'wsf-1-field-24')]",fila['tel'].toString(),tg)  
      await f.texto_validar("//textarea[contains(@id,'wsf-1-field-28')]",fila['direccion'],tg) 

      await f.click("//button[contains(@id,'wsf-1-field-27')]",tg)
      // page.reload()
      // page.goBack()
      await f.openURL("https://testingqarvn.com.es/datos-personales/");
      
    }
  });



  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()    
    console.log('Termina la Prueba');
  });


});//Describe 