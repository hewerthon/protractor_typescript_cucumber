"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbmZpZ3MvY29uZmlndXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDBFQUEwRTtBQUMxRSxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtEQUFrRDtJQUNsRCw2QkFBNkI7SUFDN0IsU0FBUyxFQUFFLFFBQVE7SUFDbkIsS0FBSyxFQUFFLENBQUMsK0JBQStCLENBQUM7SUFDeEM7Ozs7Ozs7Ozs7OztNQVlFO0lBQ0YsWUFBWSxFQUNaO1FBQ0MseUJBQXlCO1FBQ3pCLHFDQUFxQztRQUNyQyxXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQ2I7WUFDQyxJQUFJLEVBQUMsQ0FBQyxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUM7WUFDN0UsZUFBZTtTQUNkO0tBQ0Q7SUFDQyxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNsQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztLQUNsQztJQUNELGVBQWUsRUFBQztRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2xCO0NBRUYsQ0FBQyJ9