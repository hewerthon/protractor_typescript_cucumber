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
    specs: ['../../features/demo_repet.feature'],
    cucumberOpts: {
        require: [
            '../TestCases/timeout.js', '../TestCases/demo.repet.js'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkN1Y3VtYmVyUmVwZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9Db25maWdzL2NvbmZpZ3VyYXRpb25DdWN1bWJlclJlcGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMEVBQTBFO0FBQy9ELFFBQUEsTUFBTSxHQUFXO0lBQzFCLHVCQUF1QjtJQUN2QixrREFBa0Q7SUFDbEQsNkJBQTZCO0lBQzdCLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQy9ELEtBQUssRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0lBQzVDLFlBQVksRUFBRTtRQUNiLE9BQU8sRUFBRTtZQUNSLHlCQUF5QixFQUFFLDRCQUE0QjtTQUN2RDtLQUNEO0lBQ0Q7Ozs7Ozs7Ozs7OztNQVlFO0lBQ0YsWUFBWSxFQUNaO1FBQ0MseUJBQXlCO1FBQ3pCLHFDQUFxQztRQUNyQyxXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQ2I7WUFDQyxJQUFJLEVBQUMsQ0FBQyxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUM7WUFDN0UsZUFBZTtTQUNkO0tBQ0Q7SUFDQyxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNsQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztLQUNsQztJQUNELGVBQWUsRUFBQztRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2xCO0NBRUYsQ0FBQyJ9