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


test.describe('Retries con While', () => {

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  test.beforeAll(async () => {
    console.log('Inicia la base del Test');
    browser=await chromium.launch({})
    context=await browser.newContext(); 
    page=await context.newPage()
    f = new PTS(page);   

    await f.openURL("https://the-internet.herokuapp.com/login");
    await f.Validar_Titulo("The Internet")
    await f.Validar_URL("https://the-internet.herokuapp.com/login")
    await f.Validar_Texto("//h2[contains(.,'Login Page')]","Login",tg)      
    await f.scroll(0,500,tg)
    console.log('Termina la Base');
   

  });

  
  test('Retries con While', async () => {       
    var bandera=true
    do{                
        var rand = myArray[(Math.random() * myArray.length) | 0]
        console.log(rand)
        await f.scroll(0,300,tg)

        await f.texto_validar("//input[contains(@id,'username')]","tomsmith",tg)
        await f.texto_validar("//input[contains(@id,'password')]",rand,tg)
        await f.click("//i[contains(.,'Login')]",tg)
        const valor=await f.valor_texto("//div[@id='flash']")
        console.log("Primer Bandera antes del if")
        console.log(bandera)
        console.log(valor[0].trim())//quitar los espacios
        var texto=(valor[0].trim()).substring(0, 25)
        console.log(texto)     
        if(texto=="Your password is invalid!"){
            console.log("Entro en el de invalidad continua") 
            bandera=true  
            console.log(bandera)
        }
        if(texto!="Your password is invalid!"){
            console.log("Paso el password") 
            bandera=false  
            console.log(bandera)           
        }      

    }while(bandera==true);
  });

  test.afterAll(async () => {
    await page.close()
    await context.close()
    await browser.close()
    console.log('Termina la Prueba');
  });


});//Describe 