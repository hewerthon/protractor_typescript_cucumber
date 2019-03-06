Feature: I am going to validate my website functionalites

  Scenario Outline: Calculator Add functionality testing
    Given I will navigate to "Calc" Site 
    When I add two number "<values1>" and "<value25>"
    Then The output displayed should be "<result1>"
  Examples:
  | values1 | value25 | result1 |
  | 1  | 2  | 3  |
  | 3  | 4  | 7  |
  
  Scenario Outline: Calculator Add functionality testing
    Given I will navigate to "AngularJS" Site 
    When you will navigate to angular page
    Then you will enter "<key>" in search box

  Examples:
  | key | 
  | hello  |
  | olá  | 