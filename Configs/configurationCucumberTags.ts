import {Config, browser} from "protractor"
import * as reporter from "cucumber-html-reporter"
//var reporter = require('cucumber-html-reporter'); import in javascript


//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
export let config: Config = {
		//framework: 'jasmine',
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		//specs: ['Registration.js'],
		directConnect:true,
		framework: 'custom',
		frameworkPath: require.resolve('protractor-cucumber-framework'),
		specs: ['../../features/demo.tags.feature'],
		cucumberOpts: {
			format:'json:./cucumberresport.json',
			tags:["@regressivetest"],
			require: [
				'../TestCases/timeout.js', '../TestCases/hooks.js', '../TestCases/demo.step.js'
			]
		},
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
  		suites: {
  			Smokesuite: ['ChainLocators.ts'],
			Regressionsuite: ['Jsobjectcall.js'] 
  		},
  		jasmineNodeOpts:{
  			showColors: true,
		},

		onComplete: () =>{
			var options = {
			  theme: 'bootstrap',
			  jsonFile: './cucumberresport.json',
			  output: './cucumber_report.html',
			  reportSuiteAsScenarios: true,
			  launchReport: true,
			  metadata: {
				  "App Version":"0.3.2",
				  "Test Environment": "STAGING",
				  "Browser": "Chrome  54.0.2840.98",
				  "Platform": "Windows 10",
				  "Parallel": "Scenarios",
				  "Executed": "Remote"
			  }
		  };
	   
		  reporter.generate(options);
	
	
		  }
	
};