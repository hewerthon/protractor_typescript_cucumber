"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const login_1 = require("../PageObjects/login");
const angular_1 = require("../PageObjects/angular");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let log = new login_1.login();
let ang = new angular_1.angular();
//Given('I will navigate to Calc Site', async()=> {
//  await browser.get('http://juliemr.github.io/protractor-demo/');				
//});
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(this, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.When('I add two number {string} and {string}', (string, string2) => __awaiter(this, void 0, void 0, function* () {
    yield log.firstinput.sendKeys(string);
    yield log.secondinput.sendKeys(string2);
}));
cucumber_1.Then('The output displayed should be {string}', (string) => __awaiter(this, void 0, void 0, function* () {
    yield log.goButton.click();
    yield log.result.getText().then(function (text) {
        expect(text).to.equal(string);
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby5zdGVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVGVzdENhc2VzL2RlbW8uc3RlcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBRTdDLGdEQUE2QztBQUM3QyxvREFBaUQ7QUFDakQsMkNBQXFDO0FBQ3JDLGdEQUF1QjtBQUV2QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksR0FBRyxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7QUFDdEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFFdEIsbURBQW1EO0FBQ25ELHVFQUF1RTtBQUN2RSxLQUFLO0FBQ0wsZ0JBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFRLEVBQUU7SUFDOUMsb0VBQW9FO0lBQ2xFLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNuRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3JFLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDN0QsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFBO0FBQ1IsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9