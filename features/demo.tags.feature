Feature: I am going to validate my website functionalites

  @regressivetest
  Scenario: Calculator Add functionality testing
    Given I will navigate to Calc Site 
    When I add two number "3" and "5"
    Then The output displayed should be "9"


  @regressivetest
  Scenario: Calculator Add functionality testing
    Given I will navigate to Calc Site 
    When I add two number "6" and "5"
    Then The output displayed should be "11"

  @smoketest
  Scenario: Calculator Add functionality testing
    Given I will navigate to Calc Site 
    When I add two number "5" and "5"
    Then The output displayed should be "10"

