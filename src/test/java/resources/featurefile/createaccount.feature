Feature: Create Account Functionality
  As user , I would like to create account successfully

  @sanity @smoke @regression
  Scenario: I should able to create account with valid information
    When    I click on login link
    And     I enter email address for create account "shena@gmail.com"
    And     I click on create account button
    And     I enter the first name "johnen"
    And     I enter the last name "sena"
    And     I enter the password "1234567"
    And     I enter the address "johnen road"
    And     I enter the city "london"
    And     I select the state "Hawaii"
    And     I enter the zipcode "12345"
    And     I select the country "United States"
    And     I enter the phone number "1234567890"
    And     I enter the alias address "My address"
    And     I click on registration button
    Then    I am successfully registration with valid information
    And     I can see the my account message "My Account"

