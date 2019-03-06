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
//Given('I will navigate to Calc Site', async()=> {
//  await browser.get('http://juliemr.github.io/protractor-demo/');				
//});
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5yZXBldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RDYXNlcy9kZW1vLnJlcGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsZ0RBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCwyQ0FBcUM7QUFFckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztBQUN0QixJQUFJLEdBQUcsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztBQUV0QixtREFBbUQ7QUFDbkQsdUVBQXVFO0FBQ3ZFLEtBQUs7QUFDTCxnQkFBSyxDQUFDLGtDQUFrQyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDeEQsb0VBQW9FO0lBQ25FLG9FQUFvRTtJQUNyRSxJQUFHLE1BQU0sSUFBRSxNQUFNLEVBQUM7UUFDaEIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQ2hFO1NBQ0ksSUFBRyxNQUFNLElBQUUsV0FBVyxFQUFDO1FBQzFCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUM1QztBQUNILENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsd0NBQXdDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFDLEVBQUU7SUFDckUsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTFDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUNBQXlDLEVBQUUsQ0FBTSxNQUFNLEVBQUMsRUFBRTtJQUM3RCxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQTtBQUNSLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsbUNBQW1DLEVBQUUsR0FBUSxFQUFFO0lBQ2xELG9FQUFvRTtJQUNwRSxNQUFNLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVDQUF1QyxFQUFFLENBQU8sTUFBTSxFQUFDLEVBQUU7SUFDNUQsb0VBQW9FO0lBQ3BFLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9