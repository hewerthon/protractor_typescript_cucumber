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
const protractor_1 = require("protractor");
const login_1 = require("../PageObjects/login");
const angular_1 = require("../PageObjects/angular");
describe('Protractor baby steps', () => {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let log = new login_1.login();
        //browser.waitForAngularEnabled(false);
        //browser.get("http://google.com");
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        // write yout raw protractor code
        yield log.firstinput.sendKeys(1);
        yield log.secondinput.sendKeys(2);
        yield log.goButton.click();
        log.result.getText().then(function (text) {
            console.log(text);
        });
        protractor_1.browser.sleep(3000);
    }));
    it('Angular home page title validation', () => __awaiter(this, void 0, void 0, function* () {
        let ang = new angular_1.angular();
        yield protractor_1.browser.get("https://angularjs.org");
        yield ang.angularLink.click();
        yield ang.search.sendKeys("Hello");
    }));
    // code to close browser
    it('close browswer', function () {
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW5Mb2NhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1Rlc3RDYXNlcy9jaGFpbkxvY2F0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBbUM7QUFJbkMsZ0RBQTZDO0FBQzdDLG9EQUFpRDtBQUVqRCxRQUFRLENBQUMsdUJBQXVCLEVBQUMsR0FBRSxFQUFFO0lBR2xDLEVBQUUsQ0FBQyx5QkFBeUIsRUFBQyxHQUFPLEVBQUU7UUFFckMsSUFBSSxHQUFHLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUN0Qix1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsaUNBQWlDO1FBQ2pDLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO1lBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFFRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV4QixDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLG9DQUFvQyxFQUFFLEdBQU8sRUFBRTtRQUNqRCxJQUFJLEdBQUcsR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUN4QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsTUFBTSxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzdCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFcEMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVGLHdCQUF3QjtJQUN4QixFQUFFLENBQUMsZ0JBQWdCLEVBQUU7SUFDckIsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSJ9