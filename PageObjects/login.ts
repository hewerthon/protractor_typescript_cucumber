import { ElementFinder, element, by } from "protractor";

export class login{
    firstinput:ElementFinder;
    //
    secondinput:ElementFinder
    //
    goButton:ElementFinder;
    //
    result:ElementFinder;

    constructor(){
        this.firstinput=element(by.model('first'));
        this.secondinput=element(by.model('second'));
        this.goButton=element(by.id('gobutton'));
        this.result=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
}