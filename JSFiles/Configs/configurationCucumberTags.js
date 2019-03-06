"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
//var reporter = require('cucumber-html-reporter'); import in javascript
//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //framework: 'jasmine',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['Registration.js'],
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../../features/demo.tags.feature'],
    cucumberOpts: {
        format: 'json:./cucumberresport.json',
        tags: ["@regressivetest"],
        require: [
            '../TestCases/timeout.js', '../TestCases/hooks.js', '../TestCases/demo.step.js'
        ]
    },
    capabilities: {
        //browserName: 'firefox',
        //browserName: 'internet explorer',  
        browserName: 'chrome',
        chromeOptions: {
            args: ["--disable-gpu", "--disable-popup-blocking", "--window-size=1520,820"]
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
    jasmineNodeOpts: {
        showColors: true,
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberresport.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbkN1Y3VtYmVyVGFncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0NvbmZpZ3MvY29uZmlndXJhdGlvbkN1Y3VtYmVyVGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxpRUFBa0Q7QUFDbEQsd0VBQXdFO0FBR3hFLDBFQUEwRTtBQUMvRCxRQUFBLE1BQU0sR0FBVztJQUMxQix1QkFBdUI7SUFDdkIsa0RBQWtEO0lBQ2xELDZCQUE2QjtJQUM3QixhQUFhLEVBQUMsSUFBSTtJQUNsQixTQUFTLEVBQUUsUUFBUTtJQUNuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxLQUFLLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztJQUMzQyxZQUFZLEVBQUU7UUFDYixNQUFNLEVBQUMsNkJBQTZCO1FBQ3BDLElBQUksRUFBQyxDQUFDLGlCQUFpQixDQUFDO1FBQ3hCLE9BQU8sRUFBRTtZQUNSLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLDJCQUEyQjtTQUMvRTtLQUNEO0lBQ0QsWUFBWSxFQUNaO1FBQ0MseUJBQXlCO1FBQ3pCLHFDQUFxQztRQUNyQyxXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQ2I7WUFDQyxJQUFJLEVBQUMsQ0FBQyxlQUFlLEVBQUUsMEJBQTBCLEVBQUUsd0JBQXdCLENBQUM7WUFDN0UsZUFBZTtTQUNkO0tBQ0Q7SUFDRDs7Ozs7Ozs7Ozs7O01BWUU7SUFDQSxNQUFNLEVBQUU7UUFDUCxVQUFVLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNsQyxlQUFlLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztLQUNsQztJQUNELGVBQWUsRUFBQztRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2xCO0lBRUQsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNoQixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx3QkFBd0I7WUFDbEMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRTtnQkFDVCxhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUNwQjtTQUNELENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRzNCLENBQUM7Q0FFSixDQUFDIn0=