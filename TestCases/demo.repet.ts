import { Given, When, Then } from "cucumber";
import { async } from "q";
import { login } from "../PageObjects/login";
import { angular } from "../PageObjects/angular";
import { browser } from "protractor";

let log = new login();
let ang = new angular();

  //Given('I will navigate to Calc Site', async()=> {
  //  await browser.get('http://juliemr.github.io/protractor-demo/');				
  //});
  Given('I will navigate to {string} Site', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
     // Write code here that turns the phrase above into concrete actions
    if(string=="Calc"){
      await browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if(string=="AngularJS"){
      await browser.get("https://angularjs.org");
    }
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

  When('you will navigate to angular page', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await ang.angularLink.click();
    await browser.sleep(3000);
  });

  Then('you will enter {string} in search box', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await ang.search.sendKeys(string);
  });
