import { ElementFinder, element, by } from "protractor";

export class angular{
    angularLink:ElementFinder;
    search:ElementFinder;
    nav:ElementFinder;
    constructor(){
        this.angularLink=element(by.xpath("//a[contains(text(),'angular.io')]"));
        this.search=element(by.css("input[type='search']"));
        
    }
}