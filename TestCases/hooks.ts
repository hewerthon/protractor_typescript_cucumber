//var {After, Before} = require('cucumber'); é igual a linha de baixo
import {After, Before, Status} from "cucumber";
import { browser } from "protractor";

Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@regressivetest"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    browser.manage().window().maximize();
});

Before({tags: "@smoketest"}, function () {
    // This hook will be executed before scenarios tagged with @foo and @bar
    console.log("I need to execute first");
});

After({tags: "@regressivetest"}, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test complete");
});

After(async function (scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test complete");
    if(scenario.result.status=== Status.FAILED)
    {
        // code to take screenshot
        const screenshot = await browser.takeScreenshot();
            this.attach(screenshot, "image/png")
    }
});
