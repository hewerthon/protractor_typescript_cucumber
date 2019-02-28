"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class angular {
    constructor() {
        this.angularLink = protractor_1.element(protractor_1.by.xpath("//a[contains(text(),'angular.io')]"));
        this.search = protractor_1.element(protractor_1.by.css("input[type='search']"));
    }
}
exports.angular = angular;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1BhZ2VPYmplY3RzL2FuZ3VsYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxPQUFPO0lBSWhCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUV4RCxDQUFDO0NBQ0o7QUFURCwwQkFTQyJ9