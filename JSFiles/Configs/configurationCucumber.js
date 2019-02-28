"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['Registration.js'],
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../../features/demo.feature'],
    cucumberOpts: {
        require: [
            '../TestCases/timeout.js', '../TestCases/step.js'
        ]
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
    capabilities: {
        //browserName: 'firefox',
        //browserName: 'internet explorer',  
        browserName: 'chrome',
        chromeOptions: {
            args: ["--disable-gpu", "--disable-popup-blocking", "--window-size=1520,820"]
            //"--headless",
        }
    },
    suites: {
        Smokesuite: ['ChainLocators.ts'],
        Regressionsuite: ['Jsobjectcall.js']
    },
    jasmineNodeOpts: {
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkN1Y3VtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQ29uZmlncy9jb25maWd1cmF0aW9uQ3VjdW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwwRUFBMEU7QUFDL0QsUUFBQSxNQUFNLEdBQVc7SUFDMUIsdUJBQXVCO0lBQ3ZCLGtEQUFrRDtJQUNsRCw2QkFBNkI7SUFDN0IsYUFBYSxFQUFDLElBQUk7SUFDbEIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsS0FBSyxFQUFFLENBQUMsNkJBQTZCLENBQUM7SUFDdEMsWUFBWSxFQUFFO1FBQ2IsT0FBTyxFQUFFO1lBQ1IseUJBQXlCLEVBQUUsc0JBQXNCO1NBQ2pEO0tBQ0Q7SUFDRDs7Ozs7Ozs7Ozs7O01BWUU7SUFDRixZQUFZLEVBQ1o7UUFDQyx5QkFBeUI7UUFDekIscUNBQXFDO1FBQ3JDLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGFBQWEsRUFDYjtZQUNDLElBQUksRUFBQyxDQUFDLGVBQWUsRUFBRSwwQkFBMEIsRUFBRSx3QkFBd0IsQ0FBQztZQUM3RSxlQUFlO1NBQ2Q7S0FDRDtJQUNDLE1BQU0sRUFBRTtRQUNQLFVBQVUsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1FBQ2xDLGVBQWUsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0tBQ2xDO0lBQ0QsZUFBZSxFQUFDO1FBQ2YsVUFBVSxFQUFFLElBQUk7S0FDbEI7Q0FFRixDQUFDIn0=