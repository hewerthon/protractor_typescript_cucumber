Feature: I am going to validate my website functionalites

  Scenario: Calculator Add functionality testing
    Given I will navigate to "Calc" Site 
    When I add two number "3" and "5"
    Then The output displayed should be "8"

  Scenario: Calculator Add functionality testing
    Given I will navigate to "Calc" Site 
    When I add two number "5" and "5"
    Then The output displayed should be "10"

  Scenario: Calculator Add functionality testing
    Given I will navigate to "AngularJS" Site 
    When you will navigate to angular page
    Then you will enter "Hello" in search box
