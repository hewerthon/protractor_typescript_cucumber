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
const protractor_1 = require("protractor");
let log = new login_1.login();
cucumber_1.Given('I will navigate to Calc Site', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RDYXNlcy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFFN0MsZ0RBQTZDO0FBRTdDLDJDQUFxQztBQUVyQyxJQUFJLEdBQUcsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO0FBRXBCLGdCQUFLLENBQUMsOEJBQThCLEVBQUUsR0FBTyxFQUFFO0lBQzdDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHdDQUF3QyxFQUFFLENBQU0sTUFBTSxFQUFFLE9BQU8sRUFBQyxFQUFFO0lBQ3JFLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUxQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLENBQU0sTUFBTSxFQUFDLEVBQUU7SUFDN0QsTUFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEIsQ0FBQyxDQUFDLENBQUE7QUFDUixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=