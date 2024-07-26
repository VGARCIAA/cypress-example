Feature: Login to a website

 @HappyPath 
  Scenario: Successful login
    Given I open the website "urlSauceDemo"
    When I attempt to login with valid username "standard_user" and password "secret_sauce"
    Then I should be logged in