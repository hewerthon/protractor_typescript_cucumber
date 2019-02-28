import { Given, When, Then } from "cucumber";
import { async } from "q";
import { login } from "../PageObjects/login";
import { angular } from "../PageObjects/angular";
import { browser } from "protractor";

let log = new login();

  Given('I will navigate to Calc Site', async()=> {
    await browser.get('http://juliemr.github.io/protractor-demo/');				
  });

  When('I add two number {string} and {string}', async(string, string2)=> {
    await log.firstinput.sendKeys(string);
    await log.secondinput.sendKeys(string2);
    
  });
  
  Then('The output displayed should be {string}', async(string)=> {
    await log.goButton.click();
    await log.result.getText().then(function(text){
        console.log(text);
        })
  });