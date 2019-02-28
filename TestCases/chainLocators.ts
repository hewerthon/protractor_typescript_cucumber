import {browser} from "protractor";
import {element, by} from "protractor";
import {} from "jasmine";
import { async } from "q";
import { login } from "../PageObjects/login";
import { angular } from "../PageObjects/angular";

describe('Protractor baby steps',()=>
		{
			
			it('Open Angular js website',async()=>{

				let log = new login();
				//browser.waitForAngularEnabled(false);
				//browser.get("http://google.com");
				browser.get('http://juliemr.github.io/protractor-demo/');
				// write yout raw protractor code
				await log.firstinput.sendKeys(1);
			    await log.secondinput.sendKeys(2);

			    await log.goButton.click();
			    
			    log.result.getText().then(function(text){
			    console.log(text);
			    })
			    
			    browser.sleep(3000);
			    				
			})

			it('Angular home page title validation', async()=>{
				let ang = new angular();
				await browser.get("https://angularjs.org");
				await ang.angularLink.click()
				await ang.search.sendKeys("Hello");
				
			})
			
			// code to close browser
			it('close browswer', function() {
			})
		})
		
