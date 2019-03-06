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
    specs: ['../../features/demo_outline.feature'],
    cucumberOpts: {
        require: [
            '../TestCases/timeout.js', '../TestCases/demo.outline.js'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkN1Y3VtYmVyT3V0bGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbmZpZ3MvY29uZmlndXJhdGlvbkN1Y3VtYmVyT3V0bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDBFQUEwRTtBQUMvRCxRQUFBLE1BQU0sR0FBVztJQUMxQix1QkFBdUI7SUFDdkIsa0RBQWtEO0lBQ2xELDZCQUE2QjtJQUM3QixhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxLQUFLLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztJQUM5QyxZQUFZLEVBQUU7UUFDYixPQUFPLEVBQUU7WUFDUix5QkFBeUIsRUFBRSw4QkFBOEI7U0FDekQ7S0FDRDtJQUNEOzs7Ozs7Ozs7Ozs7TUFZRTtJQUNGLFlBQVksRUFDWjtRQUNDLHlCQUF5QjtRQUN6QixxQ0FBcUM7UUFDckMsV0FBVyxFQUFFLFFBQVE7UUFDckIsYUFBYSxFQUNiO1lBQ0MsSUFBSSxFQUFDLENBQUMsZUFBZSxFQUFFLDBCQUEwQixFQUFFLHdCQUF3QixDQUFDO1lBQzdFLGVBQWU7U0FDZDtLQUNEO0lBQ0MsTUFBTSxFQUFFO1FBQ1AsVUFBVSxFQUFFLENBQUMsa0JBQWtCLENBQUM7UUFDbEMsZUFBZSxFQUFFLENBQUMsaUJBQWlCLENBQUM7S0FDbEM7SUFDRCxlQUFlLEVBQUM7UUFDZixVQUFVLEVBQUUsSUFBSTtLQUNsQjtDQUVGLENBQUMifQ==