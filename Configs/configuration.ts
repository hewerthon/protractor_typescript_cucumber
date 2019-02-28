import {Config} from "protractor"
import {browser} from "protractor"


//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		//framework: 'jasmine',
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		//specs: ['Registration.js'],
		framework: 'custom',
		specs: ['../TestCases/chainLocators.js'],
		/*
		onPrepare : function()
		{
			jasmine.getEnv().addReporter(
	    	        new Jasmine2HtmlReporter({
	    	          savePath: 'target/screenshots'
	    	        })
	    	);
			browser.driver.manage().window().maximize();
			//browser.waitForAngularEnabled(false);
		    
		},
		*/
		capabilities: 
		{
			//browserName: 'firefox',
			//browserName: 'internet explorer',  
			browserName: 'chrome',
			chromeOptions: 
			{
				args:["--disable-gpu", "--disable-popup-blocking", "--window-size=1520,820"]
			//"--headless",
			}
		},
  		suites: {
  			Smokesuite: ['ChainLocators.ts'],
			Regressionsuite: ['Jsobjectcall.js'] 
  		},
  		jasmineNodeOpts:{
  			showColors: true,
		}
	
};