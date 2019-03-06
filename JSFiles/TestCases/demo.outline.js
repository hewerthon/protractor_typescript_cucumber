"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const login_1 = require("../PageObjects/login");
const angular_1 = require("../PageObjects/angular");
const protractor_1 = require("protractor");
let log = new login_1.login();
let ang = new angular_1.angular();
cucumber_1.Given('I will navigate to {string} Site', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    // Write code here that turns the phrase above into concrete actions
    if (string == "Calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJS") {
        yield protractor_1.browser.get("https://angularjs.org");
    }
}));
cucumber_1.When('I add two number {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield log.firstinput.sendKeys(string);
    yield log.secondinput.sendKeys(string2);
}));
cucumber_1.Then('The output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield log.goButton.click();
    yield log.result.getText().then(function (text) {
        console.log(text);
    });
}));
cucumber_1.When('you will navigate to angular page', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ang.angularLink.click();
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('you will enter {string} in search box', (string) => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield ang.search.sendKeys(string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5vdXRsaW5lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdENhc2VzL2RlbW8ub3V0bGluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBRTdDLGdEQUE2QztBQUM3QyxvREFBaUQ7QUFDakQsMkNBQXFDO0FBRXJDLElBQUksR0FBRyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFFdEIsZ0JBQUssQ0FBQyxrQ0FBa0MsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ3hELG9FQUFvRTtJQUNwRSxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUUsTUFBTSxFQUFDO1FBQ2hCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNoRTtTQUNJLElBQUcsTUFBTSxJQUFFLFdBQVcsRUFBQztRQUMxQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDNUM7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3JFLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDN0QsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUE7QUFDUixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLG1DQUFtQyxFQUFFLEdBQVEsRUFBRTtJQUNsRCxvRUFBb0U7SUFDcEUsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzVELG9FQUFvRTtJQUNwRSxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==